Bees.Views.RequestList = BaseView.extend({
    tagName: 'ul',
    className: 'requests',
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
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
    template: Bees.templates.requests.listItem,
    events:{
        'click .accept': 'acceptRequest',
        'click .archive': 'archiveRequest',
        'click .delete': 'deleteRequest',
    },
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();
        this.listenTo(this.model, 'change:accepted', this.render);
        this.listenTo(this.model, 'change:archived', this.render);
        this.listenTo(this.model, 'change:delete', this.render);
    },
    render: function() {
        var that = this;
        var formattedDates = {
            'created':      moment(this.model.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
            // 'startDate':    moment( this.model.get('startDate') ).format('MMMM Do YYYY, h:mm:ss a'),
            // 'endDate':      moment( this.model.get('endDate') ).format('MMMM Do YYYY, h:mm:ss a'),
        };
        var query = new Parse.Query(Bees.Models.User);
        query.get(this.model.get('farmer').id)
            .then(function(farmer){
                that.$el.html(that.template({
                request: that.model.toJSON(),
                farmer: farmer.toJSON()
            }));
        })
    },
    acceptRequest: function(){
        this.model.set('accepted', true);
        this.model.save();
        // Send Confirmation Email to farmer
        Parse.Cloud.run('sendEmail', {message: 'Your request has been accepted by the beekeeper', subject: 'Request for bees accepted'}, {
          success: function(result) {console.log(result)},
          error: function(error) {console.log(error);}
        });
    },
    archiveRequest: function(){
        this.model.set('archived', true);
        this.model.save();
    },
    deleteRequest: function(){
        this.model.destroy();
        this.dispose();
    }
})