Bees.Router = Parse.Router.extend({

    routes: {
        '': 'index',
        'login': 'login',
        'newuser': 'newuser',

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

    
});