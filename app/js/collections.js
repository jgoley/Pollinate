// All pictures

Bees.Collections.HiveGroups = Parse.Collection.extend({
    model: Bees.Models.HiveGroup
});

// All Users (Photogs)

Bees.Collections.User = Parse.Collection.extend({
    model: Bees.Models.User
});


Bees.Collections.UserHiveGroups = Parse.Collection.extend({
	initialize: function(opts){
        this.query = new Parse.Query('Hive_Group').equalTo('user', Parse.User.current())
	},
    model: Bees.Models.HiveGroup,
});

Bees.Collections.UserSearchGeo = Parse.Collection.extend({
	initialize: function(opts){
        var options = _.defaults({}, opts, {
            distance: opts.distance,
            userType: opts.userType
        });
        this.query = new Parse.Query('User')
                        .equalTo('userType', options.userType)
                        .withinMiles('geoCenter', Parse.User.current().get('geoCenter'), options.distance);
	},
    model: Bees.Models.User,
});

Bees.Collections.UserSearch = Parse.Collection.extend({
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            userId: opts.userId
        });
        this.query = new Parse.Query('User')
                        .equalTo('objectId', options.userId)
    },
    model: Bees.Models.User,
});


Bees.Collections.UserReviews = Parse.Collection.extend({
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            user: opts.user
        });
        this.query = new Parse.Query('Reviews')
            .equalTo('reviewee', options.user)
    },
    model: Bees.Models.Review,
});

Bees.Collections.UserBids = Parse.Collection.extend({
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            user: opts.user
        });
        this.query = new Parse.Query('Bids')
            .equalTo('farmer', options.user);
    },
    model: Bees.Models.Bid
})