Bees.Views.HeaderView = Parse.View.extend({
    template: Bees.templates.header,

    events: {
        'click .log-out': 'logout',
        'click .log-in': 'login',
        'click .show-menu': 'showMenu'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();

        Bees.Session.on('change', _.bind(this.render, this));
    },

    render: function() {
        this.$el.html(this.template({session: Bees.Session.toJSON()}));
        new Bees.Views.NavView({
            $container:$('.menu')
        })
    },

    login: function() {
        BeesApp.navigate('login', {
            trigger: true
        });
    },

    logout: function() {
        Parse.User.logOut();
        Bees.Session.set('user', null);
        BeesApp.navigate('/', {
            trigger: true
        });
    },
    showMenu: function(){
        $('nav').toggleClass('showing');
    }
});

Bees.Views.NavView = Parse.View.extend({
    tagName: 'nav',
    template: Bees.templates.nav,

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.render();
    },

    render: function() {
        this.$el.html(this.template());
    },
});

