(function(){

    'use strict';

    Bees.Models.Session = Parse.Object.extend({
        className: "Session",
        defaults:{
            user: null,
            timestamp: new Date()
        }
    });

    Bees.Models.User = Parse.User.extend({
        className: "User",
        defaults:{
            businessName: '',
            username: '', //
            firstName: '', //
            lastName: '',
            address: '',
            city: '',
            state: '',
            image: '',
        },

    });

    Bees.Models.Profile = Parse.Object.extend({
        className: 'Profile',
        defaults: {
            images: '',
            text: '',
        }
    })

    Bees.Models.Bid = Parse.Object.extend({
        className: "Bids",
        defaults:{
            beekeeper: '',
            farmer: '',
            hiveGroup: '',
            bidAmount: 0,
            accepted: false
        }
    });

        
    Bees.Models.HiveGroup = Parse.Object.extend({
        className: "Hive_Group",
        defaults:{
            beekeeper: '',
            hiveCount: '',
            availableBegin: '',
            availableEnd: '',
            bid: ''
        }
    });

    Bees.Models.Review = Parse.Object.extend({
        className: 'Reviews',
        defaults: {
            review: '',
        }
    });

    Bees.Models.Request = Parse.Object.extend({
        className: 'Requests',
        defaults: {
            accepted: false,
        }
    });

    Bees.Models.Message = Parse.Object.extend({
        className: 'Messages'
    });

})();