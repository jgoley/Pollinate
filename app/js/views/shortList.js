Bees.Views.UserShortList = BaseView.extend({
    subViews: [],
    tagName: 'ul',
    className: 'short-list',
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
            type: opts.type
        })
        options.$container.prepend(this.el);
        this.type = options.type;
        this.render();
    },
    render: function(){
        var that = this;
        this.$el.append('<h1>'+this.type+' near you:</h1>');
        this.collection.each(_.bind(this.renderChildren, this));
    },
    renderChildren: function(user){
        this.subViews.push(
            new Bees.Views.UserShortListItem({
                $container: this.$el,
                model: user
            })
        );
    }

})
            
Bees.Views.UserShortListItem = BaseView.extend({
    tagName: 'li',
    className: 'short-list-item',
    template: Bees.templates.shortList,
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.append(this.el);
        this.render();
    },
    render: function(){
        this.$el.append(this.template({user: this.model.toJSON()}));
    }
})