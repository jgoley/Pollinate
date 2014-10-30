Bees.Views.HiveGroup = BaseView.extend({
    className: 'hive-group',
    template: Bees.templates.hiveGroups.hiveGroup,

    events:{
        'click .edit': 'editGroup',
        'click .delete': 'deleteGroup',
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.render();
    },

    render: function() {
        this.$el.html(this.template({group: this.model.toJSON()}));
    },

    deleteGroup: function(){
        this.model.destroy();
        BeesApp.navigate('hivegroups', {trigger: true});
    },
    editGroup: function(){
        BeesApp.navigate('hivegroup/'+this.model.id+'/edit', {trigger: true});
    } 
});