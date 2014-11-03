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
        this.collection.each(_.bind(this.renderChildren, this));
    },

    renderChildren: function(request) {
        console.log("A review",request)
            new Bees.Views.RequestListItem({
                model: request,
                $container: this.$el,
                // reviewer: reviewer
            // }, function(user, error){
            //     console.log(error);
            // })
        });
    }

})

Bees.Views.RequestListItem = BaseView.extend({

    tagName: 'li',
    className: 'request',
    template: Bees.templates.requests.listItem,
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();
    },

    render: function() {
        var that = this;
        var query = new Parse.Query(Bees.Models.User);
        query.get(this.model.get('farmer').id).then(function(farmer){
            that.$el.append(that.template({
            request: that.model.toJSON(),
            farmer: farmer.toJSON()
        }));

        })
    },


})