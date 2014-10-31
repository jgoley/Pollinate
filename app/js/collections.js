// All pictures

Bees.Collections.HiveGroups = Parse.Collection.extend({
    model: Bees.Models.HiveGroup
});

// All Users (Photogs)

Bees.Collections.User = Parse.Collection.extend({
    model: Bees.Models.User
});


Bees.Collections.UserHiveGroups = Parse.Collection.extend({
	initialize: function(){
		this.user =  Parse.User.current();
		console.log("User in collection",this.user);
	},
    model: Bees.Models.HiveGroup,
    query: (new Parse.Query(Bees.Models.HiveGroup)).equalTo('user', this.user)
});

Bees.Collections.UserSearch = Parse.Collection.extend({
	initialize: function(opts){
        var options = _.defaults({}, opts, {
            user:opts.user,
            distance: opts.distance 
        });
        this.query = new Parse.Query(Bees.Models.User).withinMiles('geoCenter', options.user.get('geoCenter'), options.distance))
	},
    model: Bees.Models.User,
});
