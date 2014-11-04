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
        'click .accept': 'acceptRequest'
    },
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();
        this.listenTo(this.model, 'change:accepted', this.render);
    },
    render: function() {
        var that = this;
        console.log("rendering");
        this.model.set('formattedDate', moment( this.model.createdAt ).format('MMMM Do YYYY, h:mm:ss a') )
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
        console.log(this.model);
        this.model.save();
    }
})