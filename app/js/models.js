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
        zip: '',
        state: '',
        image: '',
        // geoCenter: new Parse.GeoPoint([0, 0]),
        // geoRangeRadius: 0,
        // userType: '',
        // hiveGroups: [],
        // totalHives: 0,
        // hivesTotal: 0,
        // hivesAvailable: 0,
        // maxDistFree: 0,
        // costPerMile: 0,
        // bids: [],
        // rating: 0,
        // crop: '',
        // farmAcerage: 0
    },

});

// Bees.Models.SelectedUser = Parse.Object.extend({
//     className: 'SelectedUser',
//     initialize: function(opts){
//         var options = _.defaults({}, opts, {
//             userId: opts.userId
//         });
//         console.log(options.userId);
//         this.query = new Parse.Query(Bees.Models.User).equalTo('objectId', options.userId);
//     }
// })

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
})
