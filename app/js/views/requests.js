Bees.Views.RequestList = BaseView.extend({
    tagName: 'ul',
    className: 'requests',
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.html(this.el);
        this.render();
    },
    render: function() {
        console.log(this.collection);
        this.collection.each(_.bind(this.renderChildren, this));
    },
    renderChildren: function(request) {
        new Bees.Views.RequestListItem({
            model: request,
            $container: this.$el,
        });
    }

})

Bees.Views.RequestListItem = BaseView.extend({
    tagName: 'li',
    className: 'request',
    events:{
        'click .accept': 'acceptRequest',
        'click .archive': 'archiveRequest'
    },
    initialize: function(opts) {
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
        this.listenTo(this.model, 'change:archived', this.render);
        this.listenTo(this.model, 'change:delete', this.render);
    },
    render: function() {
        var that = this;
        var formattedDates = {
            'createdAt':    moment(this.model.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
            'startDate':    moment( this.model.get('startDate') ).format('MMMM Do YYYY, h:mm:ss a'),
            'endDate':      moment( this.model.get('endDate') ).format('MMMM Do YYYY, h:mm:ss a'),
        };
        if(this.userType === 'beekeeper'){
            w = 'farmer';
        }   else{
            w = 'beekeeper';
        }

        var query = new Parse.Query(Bees.Models.User);
        query.get(this.model.get(w).id)
            .then(function(user){
                that.$el.html(that.template({
                request: that.model.toJSON(),
                user: user.toJSON(),
                formattedDates: formattedDates 
            }));
        })

    },
    acceptRequest: function(){
        var user = Parse.User.current();
        var request = this.model;
        this.model.set('accepted', true);
        this.model.save();
        user.set('hivesAvailable', user.get('hivesAvailable') - this.model.get('numHives'));
        user.save();
        // Send Confirmation Email to farmer
        sendMail({});
    },
    archiveRequest: function(){
        var user = Parse.User.current();
        var request = this.model;
        user.set('hivesAvailable', user.get('hivesAvailable') + request.get('numHives'));
        user.save();
        request.set('archived', true);
        request.save();
    }
})