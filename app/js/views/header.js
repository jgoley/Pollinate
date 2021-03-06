(function(){
    
    'use script';

    Bees.Views.HeaderView = BaseView.extend({
        subViews: [],
        className: 'nav-container',
        template: Bees.templates.header,
        events: {
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
            if (Bees.Session.get('user')){
                var user = Bees.Session.get('user').toJSON()
            }
            this.$el.html(this.template({session: Bees.Session.toJSON(), user: user}));
            this.subViews.push(
                new Bees.Views.NavView({
                    $container: $('.main-menu'),
                    model: Bees.Session,
                    user: user,
                    viewport: 'desktop'
                }));
            this.subViews.push(
                new Bees.Views.NavView({
                    $container: $('.off-canvas'),
                    model: Bees.Session,
                    user: user,
                    viewport: 'mobile'
                }));
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
            'click .nav-link': 'addClass',
            'click .log-out': 'logout',
            'click .log-in': 'login',
            'mouseover .account': 'showSubMenu',
            'mouseout .account': 'hideSubMenu'
        },

        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                user: opts.user,
                viewport: opts.viewport
            });
            this.user = options.user;
            options.$container.html(this.el);
            this.viewport = options.viewport;
            this.render();
        },


        render: function() {
            this.$el.html(this.template({session: this.model.toJSON(), user: this.user, viewport: this.viewport}));
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
            $('.nav-link').removeClass('selected-nav');
            $(e.target).addClass('selected-nav');
        },
        showSubMenu: function(e){
            $('.admin-menu').toggleClass('hidden');
            $(e.target).addClass('selectedNav');
        },
        hideSubMenu: function(e){
            $('.admin-menu').toggleClass('hidden');
            $(e.target).removeClass('selectedNav');
        }
    });

})();