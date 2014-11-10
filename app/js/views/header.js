(function(){
    
    'use script';

    Bees.Views.HeaderView = BaseView.extend({
        subViews: [],
        className: 'nav-container',
        template: Bees.templates.header,
        events: {
            'click .show-menu': 'showMenu',
            'keyup .search' : 'search',
            'click .logo': 'removeSelected',
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
                    $container: $('.main-menu'),
                    model: Bees.Session,
                    user: user
                }));
        },

        showMenu: function(e){
            e.preventDefault();
            $('nav').toggleClass('showing');
            $('.main-container').toggleClass('menu-showing');
        },

        search: function(e){
            if(e.keyCode === 13){
                BeesApp.navigate('search/'+$(e.target).val(), {trigger: true});
            }
        },
        removeSelected: function(){
            $('.main-menu a').removeClass('selected-nav');
        }
    });

    Bees.Views.NavView = BaseView.extend({
        tagName: 'ul',
        template: Bees.templates.nav,

        events:{
            'click a': 'addClass',
            'click .log-out': 'logout',
            'click .log-in': 'login',
            'click .account': 'showAccount',
        },

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

        login: function(e) {
            e.preventDefault();
            BeesApp.navigate('login', {
                trigger: true
            });
        },

        logout: function(e) {
            e.preventDefault()
            Parse.User.logOut();
            Bees.Session.set('user', null);
            BeesApp.navigate('login', {
                trigger: true
            });
        },
        showAccount: function(e){
            e.preventDefault()
            BeesApp.navigate('/account', {
                trigger: true
            });  
        },
        addClass: function(e){
            console.log(e.target);
            $('.main-menu a').removeClass('selected-nav');
            $(e.target).addClass('selected-nav');
        }
    });

})();