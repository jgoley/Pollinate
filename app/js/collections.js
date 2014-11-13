(function(){
    'use strict';

    Bees.Collections.HiveGroups = Parse.Collection.extend({
        model: Bees.Models.HiveGroup
    });

    Bees.Collections.User = Parse.Collection.extend({
        model: Bees.Models.User
    });

    Bees.Collections.UserSearchGeo = Parse.Collection.extend({
    	initialize: function(opts){
            var options = _.defaults({}, opts, {
                distance: opts.distance,
                userType: opts.userType,
                limit: opts.limit
            });
            this.query = new Parse.Query('User')
                            .equalTo('userType', options.userType)
                            .withinMiles('geoCenter', Parse.User.current().get('geoCenter'), options.distance)
                            .limit(options.limit);
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
                user: opts.user,
                limit: opts.limit,
                skip: opts.skip
            });
            this.user = options.user;
            this.query = new Parse.Query('Reviews')
                .equalTo('reviewee', options.user)
                .ascending('createdAt')
                .limit(options.limit)
                .skip(options.skip);
        },
        model: Bees.Models.Review,
        getAll: function(){
            var relation = this.user.relation('reviews');
            return relation.query().equalTo('reviewee', this.user)
                                    .ascending('createdAt')
                                    .limit(this.limit)
                                    .skip(this.skip)
                                    .find();
        },
        count: function(){
            return new Parse.Query('Reviews')
                .equalTo('reviewee', this.user).count(function(c){
                    return c;
                });
        }
    });


    Bees.Collections.Requests = Parse.Collection.extend({
        comparator: function(request) {
            return request.get('startDate');
        },
        initialize: function(opts){
            var options = _.defaults({}, opts, {
                user: opts.user
            });
            this.user = options.user;
        },
        model: Bees.Models.Request,
        getAll: function(){
            var relation = this.user.relation('requests');
            return relation.query().find();
        },
        getArchived: function(){
            var archiveType;
            if(this.user.get('userType') === 'beekeeper'){
                var archiveType = 'archivedBeekeeper';
            } else{
                archiveType = 'archivedFarmer';
            }
            // this.query = new Parse.Query('Requests')
            //     .equalTo(options.user.get('userType'), options.user)
            //     .equalTo(archiveType, true);


            var relation = this.user.relation('requests');
            return relation.query()
                            .equalTo(this.user.get('userType'), this.user)
                            .equalTo(archiveType, true)
                            .find();
        }
    });

    Bees.Collections.HivesOut = Parse.Collection.extend({
        initialize: function(opts){
            var options = _.defaults({}, opts, {
                user: opts.user
            });
            this.user = options.user;
        },
        getAll: function(){
            var relation = this.user.relation('requests');
            return relation.query()
                            .equalTo(this.user.get('userType'), this.user)
                            .equalTo('accepted', true)
                            .greaterThanOrEqualTo('endDate', moment().format('YYYY-MM-DD'))
                            .lessThanOrEqualTo('startDate', moment().format('YYYY-MM-DD')).find();
        },
        model: Bees.Models.Request
    });

    Bees.Collections.UserMessages = Parse.Collection.extend({
        // comparator: function(message) {
        //     return message.createdAt;
        // },
        initialize: function(opts){
            var options = _.defaults({}, opts, {
                user: opts.user
            });
            this.user = options.user;
            var q1 = new Parse.Query('Messages').equalTo('sender', options.user);
            var q2 = new Parse.Query('Messages').equalTo('recipient', options.user);
            this.query = new Parse.Query.or(q1,q2).descending('createdAt');
                // .equalTo('sender_deleted', false);
        },
        getReceived: function(){
            var relation = this.user.relation('messages');
            return relation.query()
                        .equalTo('recipient', this.user)
                        .descending('createdAt')
                        .find();

        },
        getSent: function(){
            var relation = this.user.relation('messages');
            return relation.query()
                        .equalTo('sender', this.user)
                        .descending('createdAt')
                        .find();
        },
        model: Bees.Models.Request,
    });

    Bees.Collections.UserMessagesSent = Parse.Collection.extend({
        comparator: function(message) {
            return message.get('createdAt');
        },
        initialize: function(opts){
            var options = _.defaults({}, opts, {
                user: opts.user
            });
            this.query = new Parse.Query('Messages')
                .equalTo('sender', options.user);
                // .equalTo('sender_deleted', false);
        },
        model: Bees.Models.Request,
    });

    Bees.Collections.UserMessagesRecieved = Parse.Collection.extend({
        comparator: function(message) {
            return message.get('createdAt');
        },
        initialize: function(opts){
            var options = _.defaults({}, opts, {
                user: opts.user
            });
            this.query = new Parse.Query('Messages')
                .equalTo('recipient', options.user);
                // .equalTo('reciever_deleted', false);
        },
        model: Bees.Models.Request,
    });

})();

