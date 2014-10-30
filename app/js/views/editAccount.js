Bees.Views.EditAccountView = BaseView.extend({
    tagName: 'form',
    className: 'user',
    template: Bees.templates.account.edit,

    events: {
        'submit': 'saveUser'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.html(this.el);
        this.render();
    },

    render: function() {
        this.$el.prepend(this.template({
            user: this.model.toJSON()
        }));
    },

    saveUser: function(e) {
        var user = this.model;
        e.preventDefault();
        var credentials = this.$el.serializeObject();
        user.save(credentials);
        profile.set()
    }
});