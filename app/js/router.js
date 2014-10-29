Bees.Router = Parse.Router.extend({

    routes: {
        '': 'index',
        'login': 'login',
        'newuser': 'newUser',

        'find': 'find',

        '/:user_id': 'user',
        'reviews/:user_id': 'reviews',

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
            var query = new Parse.Query(Bees.Models.Pic);
            query.equalTo('photog', Parse.User.current())
            var collection = query.collection();
            collection.fetch().then(function() {
                new Bees.Views.BeesListView({
                    $container: $('.main-container'),
                    collection: collection,
                    title: Parse.User.current().get('username')
                });
            });
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


    
});