Bees.Views.NewUserView = Parse.View.extend({
    tagName: 'form',
    className: 'user',
    template: Bees.templates.newuser,

    events: {
        'submit': 'createUser'
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

    createUser: function(e) {

        e.preventDefault();
        var credentials = this.$el.serializeObject();
        var user = new Parse.User();
        user.set("username", credentials.userName);
        user.set("password", credentials.pass);
        user.set("userType", credentials.userType);
        user.signUp(null, {
            success: function(user) {
                Bees.Models.Session.set('user', user);
                BeesApp.navigate('/', {
                    trigger: true
                });
            },
            error: function(user, error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    }
});