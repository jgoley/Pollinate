Bees.Views.LoginView = Parse.View.extend({
    tagName: 'form',
    className: 'user',
    template: Bees.templates.login,

    events: {
        'submit': 'loginUser'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
            session: opts.session
        });
        options.$container.html(this.el);
        console.log("Session", options.session);
        this.render();
    },

    render: function() {    
        this.$el.prepend(this.template());
    },

    loginUser: function(e) {
        e.preventDefault();
        var that = this;
        var credentials = this.$el.serializeObject();
        Parse.User.logIn(credentials.userName, credentials.pass, {
            success: function(user) {
                that.undelegateEvents();
                Bees.Session.set('user', user)

                BeesApp.navigate('/', {
                    trigger: true
                });
                that.remove();
            },
            error: function(user, error) {
                alert(error.message);
            }
        });
    }
});