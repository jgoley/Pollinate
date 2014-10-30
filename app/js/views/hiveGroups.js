Bees.Views.HiveGroupList = Parse.View.extend({
    tagName: 'ul',
    className: 'hive-groups',


    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.render();
    },

    render: function() {
        this.collection.each(_.bind(this.renderChildren, this));
    },

    renderChildren: function(hiveGroup){
        console.log(hiveGroup);
        new Bees.Views.HiveGroupListItem({
            $container: this.$el,
            model: hiveGroup
        })
    }

});

Bees.Views.HiveGroupListItem = Parse.View.extend({
    tagName: 'li',
    className: 'hive-group',
    template: Bees.templates.hiveGroupListItem,
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.prepend(this.el);
        this.render();
    },

    render: function() {
        this.$el.html(this.template({group: this.model.toJSON()}))
    },

});