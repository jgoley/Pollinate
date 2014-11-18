(function(){

    'use strict';

    Bees.Router = Parse.Router.extend({

        routes: {
            '': 'index',
            'login': 'login',
            'logout': 'logout',
            'newuser': 'newUser',
            'account': 'account',
            'change-password': 'changePassword',
            'user/:user_id': 'user',
            'user/:user_id/reviews': 'reviews',
            'requests': 'requests',
            'requests/archived': 'requestsArchived',
            'request/:request_id': 'request',
            'request/:request_id/edit': 'editRequest',
            'reviews': 'reviews',
            'messages': 'messages',
            'messages/message_id': 'messageView',
            'search': 'search',
            'search/:query_text': 'search',
        },

        initialize: function() {

            if(Parse.User.current()){
                Parse.User.current().fetch();
                this.currentUser = Parse.User.current();
                this.userType = this.currentUser.get('userType');
            }
            new Bees.Views.ApplicationView({
                el: 'body'
            });
        },

        index: function() {
            disposeViews();
            if (!Bees.Session.get('user')) {
                this.goLogin();
            } else {
                if (Bees.Session.get('user').get('userType') === 'beekeeper') {
                    new Bees.Collections.Requests({
                        user: Bees.Session.get('user')
                    }).getAll().then(function(collection){
                        Bees.currentView = new Bees.Views.BeekeeperIndex({
                            $container: $('.main-container'),
                            collection: collection
                        });    
                    })
                } else {
                    new Bees.Collections.Requests({
                        user: Bees.Session.get('user')
                    }).getAll().then(function(collection){
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

        logout: function(){
            disposeViews();
            Parse.User.logOut();
            Bees.Session.set('user', null);
            BeesApp.navigate('login', {
                trigger: true
            });
        },

        newUser: function() {
            disposeViews();
            Bees.currentView = new Bees.Views.NewUserView({
                $container: $('.main-container')
            });
        },

        account: function() {
            disposeViews();
            if (!Bees.Session.get('user')) {
                this.goLogin();
            } else{
                Bees.currentView = new Bees.Views.EditAccountView({
                    $container: $('.main-container'),
                    model: Bees.Session.get('user')
                });
            }
        },

        changePassword: function(){
            disposeViews();
        },

        user: function(user_id) {
            disposeViews();
            if (!Bees.Session.get('user')) {
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
            if (!Bees.Session.get('user')) {
                this.goLogin();
            } else{
                new Bees.Collections.Requests({
                    user: Bees.Session.get('user')
                }).getAll().then(function(requests){
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
            if (!Bees.Session.get('user')) {
                this.goLogin();
            } else{
                new Bees.Collections.Requests({
                    user: Bees.Session.get('user'),
                }).getArchived().then(function(requests){
                    Bees.currentView = new Bees.Views.Requests({
                        $container: $('.main-container'),
                        collection: requests
                    });
                });
            }
        },
        
        request: function(requestID) {
            disposeViews();
            if (!Bees.Session.get('user')) {
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

        editRequest: function(requestID){
            disposeViews();
            if (!Bees.Session.get('user')) {
                this.goLogin();
            } else{
                var query = new Parse.Query('Requests');
                query.get(requestID).then(function(request){
                    Bees.currentView = new Bees.Views.RequestEdit({
                        $container: $('.main-container'),
                        model: request
                    });
                });
            }
        },

        reviews: function(){
            disposeViews();
            if (!Bees.Session.get('user')) {
                this.goLogin();
            } else{
                new Bees.Collections.UserReviews({
                    user: Bees.Session.get('user'),
                }).getAll().then(function(reviews){
                    Bees.currentView = new Bees.Views.UserReviewsPage({
                        $container: $('.main-container'),
                        collection: new Parse.Collection(reviews)
                    });
                });   
            }
        },

        messages: function(){
            disposeViews();
            if (!Bees.Session.get('user')) {
                this.goLogin();
            } else{

                Bees.currentView = new Bees.Views.Messages({
                    $container: $('.main-container'),
                });

            }
        },

        search: function(queryText) {
            disposeViews();
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