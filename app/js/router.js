Bees.Router = Parse.Router.extend({

    routes: {
        '': 'index',
        'login': 'login',
        'newuser': 'newUser',

        'find': 'find',

        'account/edit': 'editAccount',
        ':user_id': 'user',
        ':user_id/reviews': 'reviews',

        'bids': 'bidsIndex',
        'bids/:bid_id': 'showBid'
    },

    initialize: function() {
        this.currentUser = Parse.User.current();
        new Bees.Views.ApplicationView({
            el: 'body'
        });
    },

    index: function() {
        var user = Parse.User.current();
        if (!user) {
            this.navigate('/login', {
                trigger: true
            });
        } else {
            // var query = new Parse.Query(Bees.Models.Pic);
            // query.equalTo('photog', Parse.User.current())
            // var collection = query.collection();
            // collection.fetch().then(function() {
            //     new Bees.Views.BeesListView({
            //         $container: $('.main-container'),
            //         collection: collection,
            //         title: Parse.User.current().get('username')
            //     });
            // });
        }
    },

    login: function() {
        new Bees.Views.LoginView({
            $container: $('.main-container'),
            session: new Bees.Models.Session()
        });
    },

    newUser: function() {
        new Bees.Views.NewUserView({
            $container: $('.main-container')
        });
    },

    editAccount: function() {
        var query = new Parse.Query(Bees.Models.User);
        query.equalTo('username', Parse.User.current().get('username'))
        var user = query.first(function(user) {
            new Bees.Views.EditAccountView({
                $container: $('.main-container'),
                model: user
            })
            console.log("The user", user);
        }, function(error) {
            console.log(error);
        })
    }
});