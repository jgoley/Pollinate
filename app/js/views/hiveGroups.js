Bees.Views.HiveGroupList = BaseView.extend({
    tagName: 'ul',
    className: 'hive-groups',
    template: Bees.templates.hiveGroups.list,

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

Bees.Views.HiveGroupListItem = BaseView.extend({
    tagName: 'li',
    className: 'hive-group',
    template: Bees.templates.hiveGroups.listItem,

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
        this.listenTo(this.model, 'change', this.render)
        // this.model.on('change', _.bind(this.render, this))

    },

    render: function() {
        this.$el.html(this.template({
            group: this.model.toJSON()
        }))
    },

    deleteGroup: function() {
        var user = Parse.User.current();
        user.remove('hiveGroups', this.model);
        user.save();
        this.model.destroy();
        this.undelegateEvents();
        this.remove()
    },

    editGroup: function() {
        BeesApp.navigate('hivegroup/'+this.model.id+'/edit', {
            trigger: true
        });
    },

    viewGroup: function() {
        console.log("navigating to ", this.model.id);
        BeesApp.navigate('hivegroup/'+this.model.id+'/view', {
            trigger: true
        });
    },


});