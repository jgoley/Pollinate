Bees.Views.AddHiveGroup = Parse.View.extend({
    tagName: 'form',
    className: 'user',
    template: Bees.templates.addHiveGroup,

    events: {
        'submit': 'addHiveGroup'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.render();
    },

    render: function() {
        this.$el.prepend(this.template());
    },

    addHiveGroup: function(e){
        e.preventDefault();
        var groupData = this.$el.serializeObject();
        groupData.user = Parse.User.current();
        var group = new Bees.Models.HiveGroup(groupData);
        console.log(group);
        group.save();
        BeesApp.navigate('hivegroups', {trigger: true})
        this.remove();
    }
});