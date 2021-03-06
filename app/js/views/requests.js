(function(){

    'use strict';

    Bees.Views.Requests = BaseView.extend({
        className: 'request-container',
        tagName: 'section',
        subViews: [],
        template: Bees.templates.requests.base,
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.html(this.el);
            this.render();
        },
        render: function() {
            this.$el.html(this.template());
            var requests = this.collection;
            if (this.collection.length === 0){
                $('.requests').append('<h3>Currently, you have no requests</h3>')
            }

            var notAccepted = new Parse.Collection(
                requests.filter(function(request){
                    return request.get('accepted') === false;
            }));

            if(Bees.Session.get('user').get('userType') === 'beekeeper'){
                var archivedCheck = 'archivedBeekeeper';
            } else var archivedCheck = 'archivedFarmer';

            var accepted = new Parse.Collection(
                requests.filter(function(request){
                    return request.get('accepted') &&  !request.get(archivedCheck) ;
            }));
            
            var archived = new Parse.Collection(
                requests.filter(function(request){
                    return request.get(archivedCheck);
            }));            

            if(notAccepted.length > 0 ){
                this.subViews.push(
                    new Bees.Views.RequestList({
                        $container: $('.requests'),
                        collection: notAccepted,
                        info: {title: 'Pending Requests', class:'notAccepted'}
                }));
            } 
            else {}

            if(accepted.length > 0 ){
                this.subViews.push(
                    new Bees.Views.RequestList({
                        $container: $('.requests'),
                        collection: accepted,
                        info: {title: 'Accepted Requests', class:'accepted'}
                }));
            }

            if(archived.length > 0 && accepted.length === 0 && notAccepted.length === 0){
                this.subViews.push(
                    new Bees.Views.RequestList({
                        $container: $('.requests'),
                        collection: archived,
                        info: {title: 'Archived', class:'archived'}
                }));
            } else if (archived.length > 0){
                $('.requests').append('<a href="#/requests/archived" class="button archived">View Archived Requests</a>');
            }
        },

    })

    Bees.Views.RequestList = BaseView.extend({
        tagName: 'ul',
        subViews: [],
        className: 'request-list',
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                info: opts.info
            });
            this.info =  options.info;
            options.$container.append(this.el);
            this.render();
        },
        render: function() {
            //this.$el.addClass(this.info.class);
            if (this.info){
                this.$el.append('<h1 class="main-title">'+this.info.title+'</h1>')
            }
            if (this.collection.length === 0){
                this.$el.append();
            }
            this.collection.each(_.bind(this.renderChildren, this));
        },
        renderChildren: function(request) {
            this.subViews.push(
                new Bees.Views.RequestListItem({
                model: request,
                $container: this.$el,
            }));
        }

    });

    Bees.Views.RequestListItem = BaseView.extend({
        tagName: 'li',
        className: 'request',
        events:{
            'click .accept': 'acceptRequest',
            'click .archive': 'archiveRequest',
            'click .cancel': 'cancelRequest',
            'click .delete': 'deleteRequest',
            'click .more-info': 'moreInfo',
            'click .edit-request': 'editRequest'
        },
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.append(this.el);
            this.userType = Bees.Session.get('user').get('userType');
            if(this.userType === 'beekeeper'){
                this.template = Bees.templates.requests.listItemBeekeeper;
            }
            else{
                this.template = Bees.templates.requests.listItemFarmer;
            }

            this.render();
            this.listenTo(this.model, 'change:accepted', this.render);
            this.listenTo(this.model, 'change:archivedBeekeeper', this.render);
            this.listenTo(this.model, 'change:archivedFarmer', this.render);
            this.listenTo(this.model, 'change:delete', this.render);
        },
        render: function() {
            _.invoke(this.subViews, 'dispose');
            var that = this;
            var request = this.model;
            var formattedDates = {
                'createdAt':    moment(request.createdAt).format('MMM D, YYYY | h:mm a'),
                'startDate':    moment(request.get('startDate')).format('MMM D, YYYY'),
                'endDate':      moment(request.get('endDate')).format('MMM D, YYYY'),
                'archivedBeekeeperDate':      moment(request.get('archivedBeekeeperDate')).format('MMM D, YYYY'),
            };
            if(this.userType === 'beekeeper'){
                var w = 'farmer';
            }   else{
                var w = 'beekeeper';
            }

            var user = new Parse.Query(Bees.Models.User);
            user.get(request.get(w).id)
                .then(function(user){
                    that.$el.html(that.template({
                        request: request.toJSON(),
                        user: user.toJSON(),
                        formattedDates: formattedDates 
                }));
            })

        },
        acceptRequest: function(){
            var user = Bees.Session.get('user');
            var request = this.model;
            var hivesAvailable = user.get('hivesAvailable');

            if(hivesAvailable > request.get('numHives')){
                request.set({'accepted': true, 'acceptedDate': new Date()});
                request.save();
                user.set('hivesAvailable', user.get('hivesAvailable') - request.get('numHives'));
                user.save();
                // Send Confirmation Email to farmer
                request.get('farmer').fetch().done(function(farmer){
                    var email = {
                        subject: 'Request for Bees Accepted!',
                        message: 'Your request for bees has been accepted. Details:'+Bees.Session.get('user').get('username')+' '+request.id+' '+request.get('startDate')+' '+request.get('endDate')
                        ,
                        from: 'jgoley.etc@gmail.com',
                        to: 'jgoley@gmail.com',//farmer.get('email'),
                    };
                    sendMail(email);  
                })
            } else{
                alert("You don't have enough hives in your inventory to fulfill request");                
            }
        },
        archiveRequest: function(){
            var user = Bees.Session.get('user');
            var request = this.model;
            if(user.get('userType') === 'beekeeper'){
                user.set('hivesAvailable', user.get('hivesAvailable') + request.get('numHives'));
                user.save();
                request.set('archivedBeekeeper', true);
                request.set('archivedBeekeeperDate', new Date());
            } else{
                request.set('archivedFarmer', true);
            }
            request.save();
        },
        cancelRequest: function(){
            // this.model.destroy();
            this.model.set('canceled', true);
            var email = {
                subject: 'Request for Bees Canceled',
                message: Bees.Session.get('user').get('username')+' canceled their request for bees',
                from: 'jgoley.etc@gmail.com',
                to: 'jgoley@gmail.com',//beekeeper.get('email'),
            }
            sendMail(email);
        },
        deleteRequest: function(){
            var check = confirm("Are you sure you want to delete the request?");
            if (check){
                this.model.destroy();
                this.dispose();
            }
        },
        moreInfo: function(){
            this.$el.find('ul').toggleClass('hidden');
            this.$el.toggleClass('selected');
        },
        editRequest: function(){
            BeesApp.navigate('request/'+this.model.id+'/edit', {trigger: true})
        }
    });

    Bees.Views.BeekeeperUpcomingRequestsList = BaseView.extend({
        tagName: 'ul',
        subViews: [],
        className: 'upcoming-requests',
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                info: opts.info
            });
            this.info =  options.info;
            options.$container.append(this.el);
            this.render();
        },
        render: function() {
            _.invoke(this.subViews, 'dispose');
            this.$el.append('<h1 class="main-title">Upcoming requests:</h1>');
            if (this.info){
                this.$el.append('<h1 class="main-title">'+this.info.title+'</h1>');
            }
            if (this.collection.length === 0){
                this.$el.append();
            }
            this.collection.each(_.bind(this.renderChildren, this));
        },
        renderChildren: function(request) {
            this.subViews.push(
                new Bees.Views.BeekeeperUpcomingRequestsListItem({
                model: request,
                $container: this.$el,
            }));
        }

    });

    Bees.Views.BeekeeperUpcomingRequestsListItem = BaseView.extend({
        tagName: 'li',
        className: 'upcoming-request',
        template: Bees.templates.beekeeperIndex.upcoming,
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.append(this.el);
            this.render();
        },
        render: function() {
            _.invoke(this.subViews, 'dispose');
            var request = this.model;
            var formattedDates = {
                'createdAt':    moment(request.createdAt).format('MMM D, YYYY | h:mm a'),
                'startDate':    moment(request.get('startDate')).format('MMM D, YYYY'),
                'endDate':      moment(request.get('endDate')).format('MMM D, YYYY'),
                'startDateFromNow':      moment( moment(request.get('startDate')).add(1, 'day') ).fromNow(),
                'endDateFromNow':      moment( moment(request.get('endDate')).add(1, 'day') ).fromNow(),
            };
            this.userType = Bees.Session.get('user').get('userType');
            if(this.userType === 'beekeeper'){
                var w = 'farmer';
            }   else{
                var w = 'beekeeper';
            }
            var that = this;
            var user = new Parse.Query(Bees.Models.User);
            user.get(request.get(w).id)
                .then(function(user){
                    that.$el.html(that.template({
                        request: request.toJSON(),
                        user: user.toJSON(),
                        formattedDates: formattedDates 
                }));
            })
        },
    });

})();
