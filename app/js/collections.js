Bees.Collections.HiveGroups = Parse.Collection.extend({
    model: Bees.Models.HiveGroup
});

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

Bees.Collections.NameSearch = Parse.Collection.extend({
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            userType: opts.userType,
            business: opts.business
        });
        this.query = new Parse.Query('User')
                            .equalTo('userType', options.userType)
                            .contains('businessNameLowercase', options.business);
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

Bees.Collections.Requests = Parse.Collection.extend({
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            user: opts.user
        });
        this.query = new Parse.Query('Requests')
            .equalTo(options.user.get('userType'), options.user);
    },
    model: Bees.Models.Request,
});

Bees.Collections.RequestsAccepted = Parse.Collection.extend({
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            user: opts.user
        });
        this.query = new Parse.Query('Requests')
            .equalTo(options.user.get('userType'), options.user)
            .equalTo('accepted', true);
    },
    model: Bees.Models.Request,
});

Bees.Collections.RequestsNotAccepted = Parse.Collection.extend({
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            user: opts.user
        });
        this.query = new Parse.Query('Requests')
            .equalTo(options.user.get('userType'), options.user)
            .equalTo('accepted', false);
    },
    model: Bees.Models.Request,
});

Bees.Collections.HivesOut = Parse.Collection.extend({
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            user: opts.user
        });
        this.query = new Parse.Query('Requests')
                            .equalTo(options.user.get('userType'), options.user)
                            .equalTo('accepted', true)
                            .greaterThanOrEqualTo('endDate', moment().format('YYYY-MM-DD'))
                            .lessThanOrEqualTo('startDate', moment().format('YYYY-MM-DD'))
    },
    model: Bees.Models.Request
});



