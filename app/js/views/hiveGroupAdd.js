Bees.Views.AddHiveGroup = BaseView.extend({
    tagName: 'form',
    className: 'user',
    template: Bees.templates.hiveGroups.add,

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

    addHiveGroup: function(e) {
        var that = this;
        e.preventDefault();
        user = Parse.User.current();
        var groupData = this.$el.serializeObject();
        groupData.user = user;
        var group = new Bees.Models.HiveGroup(groupData);
        console.log(group);
        group.save().then(function() {
            user.addUnique('hiveGroups', group);
            if (user.get('hiveCount'))
                user.set('hiveCount', user.get('hiveCount') + groupData.hiveCount);
            else
                user.set('hiveCount', groupData.hiveCount);
            user.save();
            BeesApp.navigate('hivegroups', {
                trigger: true
            })
            that.remove();
        })

    }
});