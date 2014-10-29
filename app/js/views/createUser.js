Pix.Views.CreateUserView = Parse.View.extend({
    tagName: 'form',
    template: _.template($('#create-template').html()),

    events: {
        'submit': 'createUser'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.append(this.el);
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

        user.signUp(null, {
            success: function(user) {
                Pix.Auth.set('user', user);
                PixApp.navigate('/pix', {
                    trigger: true
                });
            },
            error: function(user, error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    }
});