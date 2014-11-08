Bees.Router = Parse.Router.extend({

    routes: {
        '': 'index',
        'login': 'login',
        'newuser': 'newUser',
        'account': 'account',
        'user/:user_id': 'user',
        'user/:user_id/reviews': 'reviews',
        'requests': 'requests',
        'search/:type': 'search',
        'map': 'map'
    },

    initialize: function() {
        if(Parse.User.current()){
            this.currentUser = Parse.User.current();
            this.userType = this.currentUser.get('userType');
        }
        new Bees.Views.ApplicationView({
            el: 'body'
        });
    },

    index: function() {
        disposeViews();
        if (!this.currentUser) {
            this.goLogin();
        } else {
            if (this.checkUserType()) {
                new Bees.Collections.Requests({
                    user: Parse.User.current()
                }).fetch().then(function(collection){
                    Bees.currentView = new Bees.Views.BeekeeperIndex({
                        $container: $('.main-container'),
                        collection: collection
                    });    
                })
            } else {
                Bees.currentView = new Bees.Views.FarmerIndex({
                    $container: $('.main-container'),
                });
            }

        }
    },

    login: function() {
        disposeViews();
        Bees.currentView = new Bees.Views.LoginView({
            $container: $('.main-container'),
            session: new Bees.Models.Session()
        });
    },

    newUser: function() {
        disposeViews();
        new Bees.Views.NewUserView({
            $container: $('.main-container')
        });
    },

    account: function() {
        disposeViews();
        if (!this.currentUser) {
            this.goLogin();
        } else{
            Bees.currentView = new Bees.Views.EditAccountView({
                $container: $('.main-container'),
                model: Parse.User.current()
            });
        }
    },

    user: function(user_id) {
        disposeViews();
        if (!this.currentUser) {
            this.goLogin();
        } else{
            var query = new Parse.Query(Bees.Models.User);
            query.get(user_id).then(function(user) {
                Bees.currentView = new Bees.Views.User({
                    model: user,
                    $container: $('.main-container')
                })
            })
        }
    },

    reviews: function(user_id) {
        disposeViews();
        var query = new Parse.Query(Bees.Models.User);
        query.get(user_id).then(function(user) {
            Bees.currentView = new Bees.Views.UserReviews({
                model: user,
                $container: $('.main-container')
            })
        })
    },

    requests: function() {
        disposeViews();
        if (!this.currentUser) {
            this.goLogin();
        } else{
            var requests = new Bees.Collections.Requests({
                user: this.currentUser
            })
            requests.fetch().then(function(requests){
                Bees.currentView = new Bees.Views.Requests({
                    $container: $('.main-container'),
                    collection: requests
                });
            });
        }
    },

    search: function(type) {
        disposeViews();
        Bees.currentView = new Bees.Views.Search({
            userType: type,
            $container: $('.main-container'),
        })
    },

    map: function() {
        disposeViews();
        var collection = new Bees.Collections.User();
        collection.fetch().then(function() {
            Bees.currentView = new Bees.Views.Map({
                $container: $('.main-container'),
                collection: collection,
            })
        })
    },

    checkUserType: function() {
        if (this.userType === 'beekeeper')
            return true;
        else return false
    },
    goLogin: function(){
        this.navigate('/login', {
            trigger: true
        });
    }
});