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

        // 'hivegroups': 'hiveGroups',
        // 'hivegroups/view/all': 'hiveGroupsAll',
        // 'hivegroups/user/:user_id': 'hiveGroupsUser',
        // 'hivegroup/:hiveGroup_id/view': 'viewHiveGroup',
        // 'hivegroup/:hiveGroup_id/edit': 'editHiveGroup',
        // 'hivegroup/add': 'addHiveGroup',

        'map': 'map'
    },

    initialize: function() {
        this.currentUser = Parse.User.current();
        new Bees.Views.ApplicationView({
            el: 'body'
        });
    },

    index: function() {
        var user = Parse.User.current();
        disposeViews();
        if (!user) {
            this.navigate('/login', {
                trigger: true
            });
        } else {
            if (this.checkUserType()) {
                console.log("A beekeeper");
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
        // var type = Parse.User.current().get('userType');
        // if (Parse.User.current().get('userType') === 'beekeeper'){
        // else
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

    // hiveGroups: function() {
    //     if (!this.checkUserType()) {
    //         BeesApp.navigate('/', {
    //             trigger: true
    //         });
    //     } else {
    //         var collection = new Bees.Collections.UserHiveGroups();
    //         collection.fetch().then(function() {
    //             Bees.currentView = new Bees.Views.HiveGroupList({
    //                 $container: $('.main-container'),
    //                 collection: collection
    //             });
    //         })
    //     }
    // },

    // hiveGroupsAll: function() {
    //     var collection = new Bees.Collections.HiveGroups();
    //     collection.fetch().then(function() {
    //         Bees.currentView = new Bees.Views.HiveGroupList({
    //             $container: $('.main-container'),
    //             collection: collection
    //         });
    //     })
    // },

    // viewHiveGroup: function(hiveGroup_id) {
    //     var query = new Parse.Query(Bees.Models.HiveGroup);
    //     query.equalTo('objectId', hiveGroup_id);
    //     query.first().then(function(group) {
    //         Bees.currentView = new Bees.Views.HiveGroup({
    //             $container: $('.main-container'),
    //             model: group
    //         });
    //     })
    // },

    // editHiveGroup: function(hiveGroup_id) {
    //     var query = new Parse.Query(Bees.Models.HiveGroup);
    //     query.equalTo('objectId', hiveGroup_id);
    //     query.first().then(function(group) {
    //         new Bees.Views.HiveGroupEdit({
    //             $container: $('.main-container'),
    //             model: group
    //         });
    //     })
    // },

    // hiveGroupsUser: function() {
    //     console.log('hiveGroupsUser');
    // },

    // addHiveGroup: function() {
    //     console.log("Add Hive Group");
    //     new Bees.Views.AddHiveGroup({
    //         $container: $('.main-container'),
    //     });
    // },

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