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
