// App.curentView = new ...

// if (Bees.currentView) Bees.currentView.dispose();

Bees.Router = Parse.Router.extend({

    routes: {
        '': 'index',
        'login': 'login',
        'newuser': 'newUser',

        'account': 'account',
        'user/:user_id': 'user',
        'user/:user_id/reviews': 'reviews',
        // 'user/:user_id/request': 'request',

        'requests': 'requests',

        'search/:type': 'search',

        'map': 'map'
    },

    initialize: function() {
        this.currentUser = Parse.User.current();
        new Bees.Views.ApplicationView({
            el: 'body'
        });
    },

    index: function() {
        disposeViews();
        var user = Parse.User.current();
        if (!user) {
            this.navigate('/login', {
                trigger: true
            });
        } else {
            if (this.checkUserType()) {
                Bees.currentView = new Bees.Views.BeekeeperIndex({
                    $container: $('.main-container'),
                });

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
        var query = new Parse.Query(Bees.Models.User);
        query.equalTo('username', Parse.User.current().get('username'))
        var user = query.first(function(user) {
            Bees.currentView = new Bees.Views.EditAccountView({
                $container: $('.main-container'),
                model: user
            })
        }, function(error) {
            console.log(error);
        })
    },

    user: function(user_id) {
        disposeViews();
        var query = new Parse.Query(Bees.Models.User);
        query.get(user_id).then(function(user) {
            Bees.currentView = new Bees.Views.User({
                model: user,
                $container: $('.main-container')
            })
        })
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
        var query = new Parse.Query(Bees.Models.Request).equalTo(Parse.User.current().get('userType'), Parse.User.current());
        var requests = query.collection();
        requests.fetch().then(function(requests){
            Bees.currentView = new Bees.Views.RequestList({
                $container: $('.main-container'),
                collection: requests
            });
        });

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
        if (Parse.User.current().get('userType') === 'beekeeper')
            return true;
        else return false
    },
});