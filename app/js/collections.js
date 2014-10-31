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

// Bees.Collections.UserSearch = Parse.Collection.extend({
// 	initialize: function(opts){
//         var options = _.defaults({}, opts, {
//             user:opts.user,
//             distance: opts.distance 
//         });
//         this.distance = options.distance;
//         this.user = options.user.get('geoCenter');
//         console.log(options);
// 	},
//     model: Bees.Models.User,
//     query: (new Parse.Query(Bees.Models.User).withinMiles('geoCenter', this.user, this.distance))
// });
