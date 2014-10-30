Bees.Views.HiveGroupList = Parse.View.extend({
    tagName: 'ul',
    className: 'hive-groups',
    template: Bees.templates.hiveGroups,

    events:{
        'click .addGroup': 'addGroup'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.render();
        // this.collection.on('change', _.bind(this.render, this))
    },

    render: function() {
        this.$el.html(this.template());
        this.collection.each(_.bind(this.renderChildren, this));
    },

    renderChildren: function(hiveGroup) {
        console.log(hiveGroup);
        new Bees.Views.HiveGroupListItem({
            $container: this.$el,
            model: hiveGroup
        })
    },

    addGroup: function(){
        BeesApp.navigate('hivegroup/add', {trigger: true});
        this.remove();
    }
});

Bees.Views.HiveGroupListItem = Parse.View.extend({
    tagName: 'li',
    className: 'hive-group',
    template: Bees.templates.hiveGroupListItem,

    events: {
        'click .delete': 'deleteGroup',
        'click .edit': 'editGroup',
        'click .view': 'viewGroup',
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.append(this.el);
        this.render();
        this.model.on('change', _.bind(this.render, this))

    },

    render: function() {
        this.$el.html(this.template({
            group: this.model.toJSON()
        }))
    },

    deleteGroup: function() {
        console.log("Deleting");
        this.model.destroy();
    },

    editGroup: function() {
        console.log("Edit");
    },

    viewGroup: function() {
        console.log(this.model);
        console.log("navigating to ", this.model.id);
        BeesApp.navigate('hivegroups/view/'+this.model.id, {
            trigger: true
        });
        this.remove();
    },

    remove: function() {
        this.$el.remove();
        this.model.off('change', _.bind(this.render, this))
        return this;
    },


});