Bees.Views.HeaderView = Parse.View.extend({
    template: Bees.templates.header,

    events: {
        'click .log-out': 'logout',
        'click .log-in': 'login',
        'click .show-menu': 'showMenu',
        'click .account': 'showAccount'
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
        console.log("Header Rendered");
        if (Parse.User.current()){
            var user = Parse.User.current().toJSON()
        }
        this.$el.html(this.template({session: Bees.Session.toJSON(), user: user}));
        new Bees.Views.NavView({
            $container:$('.menu'),
            model: Bees.Session,
            user: user
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
    },
    showAccount: function(){
        BeesApp.navigate('/account', {
            trigger: true
        });  
    }
});

Bees.Views.NavView = Parse.View.extend({
    tagName: 'nav',
    template: Bees.templates.nav,

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
            user: opts.user
        });
        this.user = options.user;
        options.$container.html(this.el);
        this.render();
    },

    render: function() {
        console.log("nav rendered");
        this.$el.html(this.template({session: this.model.toJSON(), user: this.user}));
    },
});

