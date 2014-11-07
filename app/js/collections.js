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
            .equalTo('reviewee', options.user).
            ascending('createdAt');
    },
    model: Bees.Models.Review,
});

// var query = new Parse.Query(Bees.Models.Request).equalTo(Parse.User.current().get('userType'), Parse.User.current());
// var requests = query.collection();

Bees.Collections.Requests = Parse.Collection.extend({
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            user: opts.user
        });
        this.query = new Parse.Query('Requests')
            .equalTo(options.user.get('userType'), options.user);
        console.log("User!!!!",options.user);
    },
    model: Bees.Models.Request,
});

Bees.Collections.NameSearch = Parse.Collection.extend({
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            userType: opts.userType,
            business: opts.business
        });
        console.log("Colection:",options.userType, options.business)
        this.query = new Parse.Query(Bees.Models.User)
                            .equalTo('userType', options.userType)
                            .contains('businessNameLowercase', options.business);
    },
    model: Bees.Models.User,
});


