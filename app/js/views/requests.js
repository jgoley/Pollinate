Bees.Views.RequestList = BaseView.extend({
    tagName: 'ul',
    className: 'requests',
    subViews: [],
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.html(this.el);
        this.render();
    },
    render: function() {
        this.collection.each(_.bind(this.renderChildren, this));
    },
    renderChildren: function(request) {
        this.subViews.push(
            new Bees.Views.RequestListItem({
            model: request,
            $container: this.$el,
        }));
    }

})

Bees.Views.RequestListItem = BaseView.extend({
    tagName: 'li',
    className: 'request',
    events:{
        'click .accept': 'acceptRequest',
        'click .archive': 'archiveRequest',
        'click .cancel': 'cancelRequest',
        'click .delete': 'deleteRequest',
    },
    initialize: function(opts) {
        _.invoke(this.subViews, 'dispose');
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.userType = Parse.User.current().get('userType');
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
        var that = this;
        var request = this.model;
        var formattedDates = {
            'createdAt':    moment(request.createdAt).format('MMM D, YYYY | h:mm a'),
            'startDate':    moment( request.get('startDate') ).format('MMM D, YYYY'),
            'endDate':      moment( request.get('endDate') ).format('MMM D, YYYY'),
        };
        if(this.userType === 'beekeeper'){
            w = 'farmer';
        }   else{
            w = 'beekeeper';
        }

        var query = new Parse.Query(Bees.Models.User);
        query.get(request.get(w).id)
            .then(function(user){
                that.$el.html(that.template({
                request: request.toJSON(),
                user: user.toJSON(),
                formattedDates: formattedDates 
            }));
        })

    },
    acceptRequest: function(){
        var user = Parse.User.current();
        var request = this.model;
        request.set({'accepted': true, 'acceptedDate': new Date()});
        request.save();
        user.set('hivesAvailable', user.get('hivesAvailable') - this.model.get('numHives'));
        user.save();
        // Send Confirmation Email to farmer
        // sendMail({});
    },
    archiveRequest: function(){
        var user = Parse.User.current();
        var request = this.model;
        user.set('hivesAvailable', user.get('hivesAvailable') + request.get('numHives'));
        user.save();
        request.set('archivedBeekeeper', true);
        request.save();
    },
    cancelRequest: function(){
        this.model.set('archivedFarmer', true);
        this.model.save();
        // sendMail({});
    },
    deleteRequest: function(){
        var check = confirm("Are you sure you want to delete the request?");
        if (check){
            this.model.destroy();
            this.dispose();
        }
    },
})