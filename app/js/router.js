Bees.Router = Parse.Router.extend({

    routes: {
        '': 'index',
        'login': 'login',
        'newuser': 'newUser',

        'account': 'account',
        'user/:user_id': 'user',
        'user/:user_id/reviews': 'reviews',

        'search/:type': 'search',

        'hivegroups': 'hiveGroups',
        'hivegroups/view/all': 'hiveGroupsAll',
        'hivegroups/user/:user_id': 'hiveGroupsUser',
        'hivegroup/:hiveGroup_id/view': 'viewHiveGroup',
        'hivegroup/:hiveGroup_id/edit': 'editHiveGroup',
        'hivegroup/add': 'addHiveGroup',

        'bids': 'bidsIndex',
        'bids/:bid_id': 'showBid',

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
        if (!user) {
            this.navigate('/login', {
                trigger: true
            });
        } else {

            if(Parse.User.current().get('userType') == 'beekeeper'){
                var query = new Parse.Query(Bees.Models.HiveGroup);
                query.equalTo('user', Parse.User.current());
                var collection = query.collection();
                console.log(collection);
                collection.fetch().then(function(){
                    new Bees.Views.HiveGroupList({
                        $container: $('.main-container'),
                        collection: collection
                    });
                })
            }
            else{
                
            }

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

    account: function() {
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
    },

    user: function(user_id){
        console.log(user_id);
    },

    reviews: function(){

    },

    search: function(type){
        new Bees.Views.Search({
            userType: type,
            $container: $('.main-container'),
        })

            // var distance = 100;
            // var query = new Parse.Query(Bees.Models.User);
            // query.equalTo('userType', 'beekeeper');
            // query.withinMiles('geoCenter', Parse.User.current().get('geoCenter'), distance);
            // var collection = query.collection();
            // collection.fetch().then(function(){
            //     console.log(collection);
            //     new Bees.Views.Map({
            //         $container: $('.main-container'),
            //         collection: collection,
            //     })    
            // })
        // }
        // else{
        //     var distance = 200;
        //     var query = new Parse.Query(Bees.Models.User);
        //     query.equalTo('userType', 'farmer');
        //     query.withinMiles('geoCenter', Parse.User.current().get('geoCenter'), distance);
        //     var collection = query.collection();
        //     collection.fetch().then(function(){
        //         console.log(collection);
        //         new Bees.Views.Map({
        //             $container: $('.main-container'),
        //             collection: collection,
        //         })    
        //     })
        // }
    },

    hiveGroups: function(){
        if(!this.checkUserType()){
            BeesApp.navigate('/', {trigger:true});
        }
        else{
            var query = new Parse.Query(Bees.Models.HiveGroup);
            query.equalTo('user', Parse.User.current());
            var collection = query.collection();
            console.log(collection);
            collection.fetch().then(function(){
                new Bees.Views.HiveGroupList({
                    $container: $('.main-container'),
                    collection: collection
                });
            })
        }
    },

    hiveGroupsAll: function(){
        var collection = new Bees.Collections.HiveGroups();
        collection.fetch().then(function(){
            new Bees.Views.HiveGroupList({
                $container: $('.main-container'),
                collection: collection
            });
        })
    },

    viewHiveGroup: function(hiveGroup_id){
        console.log("Viewing ", hiveGroup_id)
        var query = new Parse.Query(Bees.Models.HiveGroup);
        query.equalTo('objectId', hiveGroup_id);
        query.first().then(function(group){
            console.log("The group",group);
            new Bees.Views.HiveGroup({
                $container: $('.main-container'),
                model: group
            });
        })
    },

    editHiveGroup: function(hiveGroup_id){
        var query = new Parse.Query(Bees.Models.HiveGroup);
        query.equalTo('objectId', hiveGroup_id);
        query.first().then(function(group){
            console.log(group);
            new Bees.Views.HiveGroupEdit({
                $container: $('.main-container'),
                model: group
            });
        })
    },

    hiveGroupsUser: function(){
        console.log('hiveGroupsUser');
    },

    addHiveGroup: function(){
        console.log("Add Hive Group");
        new Bees.Views.AddHiveGroup({
            $container: $('.main-container'),
        });
    },

    bidsIndex: function(){

    },

    showBid: function(bid_id){

    },


    map: function(){
        var collection = new Bees.Collections.User();
        collection.fetch().then(function(){
            new Bees.Views.Map({
                $container: $('.main-container'),
                collection: collection,
            })    
        })
    },

    checkUserType: function(){
        if (Parse.User.current().get('userType') == 'beekeeper')
            return true;
        else return false
    },
});