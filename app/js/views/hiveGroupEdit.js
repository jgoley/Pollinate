Bees.Views.HiveGroupEdit = BaseView.extend({
    tagName: 'form',
    className: 'hive-group',
    template: Bees.templates.hiveGroups.edit,

    events:{
        'click .update': 'update'
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

    update: function(e){
        console.log("updating")
        e.preventDefault();
        var groupData = this.$el.serializeObject();
        console.log(groupData);
        this.model.save(groupData);
        BeesApp.navigate('hivegroup/'+this.model.id+'/view', {trigger: true})
        this.remove();
    }
});