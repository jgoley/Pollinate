
(function(){

    'use strict';

    Bees.Views.LoginView = BaseView.extend({
        tagName: 'form',
        className: 'user-login',
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
            this.render();
        },

        render: function() {    
            this.$el.prepend(this.template());
            this.$el.parsley();
        },

        loginUser: function(e) {
            e.preventDefault();
            var that = this;
            var credentials = this.$el.serializeObject();
            Parse.User.logIn(credentials.userName, credentials.pass, {
                success: function(user) {
                    Bees.Session.set('user', user)
                    BeesApp.navigate('/', {
                        trigger: true
                    });
                    // that.dispose();
                },
                error: function(user, error) {
                    alert(error.message);
                }
            });
        }
    });

})();