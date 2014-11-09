Bees.Views.HeaderView = BaseView.extend({
    subViews: [],
    template: Bees.templates.header,
    events: {
        'click .log-out': 'logout',
        'click .log-in': 'login',
        'click .show-menu': 'showMenu',
        'click .account': 'showAccount',
        'keyup .search' : 'search'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();

        this.listenTo(Bees.Session, 'change', this.render);
    },

    render: function() {
        if (Parse.User.current()){
            var user = Parse.User.current().toJSON()
        }
        this.$el.html(this.template({session: Bees.Session.toJSON(), user: user}));
        this.subViews.push(
            new Bees.Views.NavView({
                $container:$('.menu'),
                model: Bees.Session,
                user: user
            }));
    },

    login: function() {
        BeesApp.navigate('login', {
            trigger: true
        });
    },

    logout: function() {
        Parse.User.logOut();
        Bees.Session.set('user', null);
        BeesApp.navigate('login', {
            trigger: true
        });
    },
    showMenu: function(){
        $('nav').toggleClass('showing');
        $('.main-container').toggleClass('menu-showing');
    },
    showAccount: function(){
        BeesApp.navigate('/account', {
            trigger: true
        });  
    },

    search: function(e){
        if(e.keyCode === 13){
            BeesApp.navigate('search/'+$(e.target).val(), {trigger: true});
        }
    }
});

Bees.Views.NavView = BaseView.extend({
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
        this.$el.html(this.template({session: this.model.toJSON(), user: this.user}));
    },
});

