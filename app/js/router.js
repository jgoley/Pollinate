(function(){

    'use strict';

    Bees.Router = Parse.Router.extend({

        routes: {
            '': 'index',
            'login': 'login',
            'newuser': 'newUser',
            'account': 'account',
            'user/:user_id': 'user',
            'user/:user_id/reviews': 'reviews',
            'requests': 'requests',
            'requests/archived': 'requestsArchived',
            'request/:request_id': 'request',
            'reviews': 'reviews',
            'search': 'search',
            'search/:query_text': 'search',
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
            console.log("The Current User:",Parse.User.current());
            if (!this.currentUser) {
                this.goLogin();
            } else {
                if (Parse.User.current().get('userType') === 'beekeeper') {
                    new Bees.Collections.Requests({
                        user: Parse.User.current()
                    }).fetch().then(function(collection){
                        console.log("!Collection in router",collection)
                        Bees.currentView = new Bees.Views.BeekeeperIndex({
                            $container: $('.main-container'),
                            collection: collection
                        });    
                    })
                } else {
                    new Bees.Collections.Requests({
                        user: Parse.User.current()
                    }).fetch().then(function(collection){
                        console.log("!Collection in router",collection)
                        Bees.currentView = new Bees.Views.FarmerIndex({
                            $container: $('.main-container'),
                            collection: collection
                        });
                    })
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

        requests: function() {
            disposeViews();
            if (!this.currentUser) {
                this.goLogin();
            } else{
                new Bees.Collections.Requests({
                    user: Parse.User.current()
                }).fetch().then(function(requests){
                    Bees.currentView = new Bees.Views.Requests({
                        $container: $('.main-container'),
                        collection: requests
                    });
                }).fail(function(err){
                    console.error(err);
                });
            }
        },

        requestsArchived: function() {
            disposeViews();
            if (!this.currentUser) {
                this.goLogin();
            } else{
                new Bees.Collections.RequestsArchived({
                    user: Parse.User.current(),
                }).fetch().then(function(requests){
                    Bees.currentView = new Bees.Views.Requests({
                        $container: $('.main-container'),
                        collection: requests
                    });
                });
            }
        },
        
        request: function(requestID) {
            disposeViews();
            if (!this.currentUser) {
                this.goLogin();
            } else{
                var query = new Parse.Query('Requests');
                query.get(requestID).then(function(request){
                    Bees.currentView = new Bees.Views.Request({
                        $container: $('.main-container'),
                        model: request
                    });
                });
            }
        },

        reviews: function(){
            disposeViews();
            if (!this.currentUser) {
                this.goLogin();
            } else{
                new Bees.Collections.UserReviews({
                    user: this.currentUser
                }).fetch().then(function(reviews){
                    console.log(reviews)
                    if(reviews.length > 0){
                        Bees.currentView = new Bees.Views.UserReviewsPage({
                            $container: $('.main-container'),
                            collection: reviews
                        });
                    } else{
                        $('.main-container').html('<p>No reviews.</p>')
                    }
                });   
            }
        },

        search: function(queryText) {
            disposeViews();
            console.log("queryText");
            Bees.currentView = new Bees.Views.Search({
                queryText: queryText,
                $container: $('.main-container'),
            });
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

})();