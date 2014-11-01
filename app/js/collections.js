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
        this.query = new Parse.Query(Bees.Models.HiveGroup).equalTo('user', Parse.User.current())
	},
    model: Bees.Models.HiveGroup,
});

Bees.Collections.UserSearch = Parse.Collection.extend({
	initialize: function(opts){
        var options = _.defaults({}, opts, {
            distance: opts.distance,
            userType: opts.userType
        });
        this.query = new Parse.Query(Bees.Models.User)
                        .equalTo('userType', options.userType)
                        .withinMiles('geoCenter', Parse.User.current().get('geoCenter'), options.distance);
	},
    model: Bees.Models.User,
});