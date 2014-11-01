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
        geoCenter: new Parse.GeoPoint([0, 0]),
        geoRangeRadius: '',
        userType: '',
        hiveGroups: [],
        bids: [],
        rating: 0,
        crop: '',
        farmAcerage: ''
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
    className: "Bid",
    defaults:{
        beekeeper: '',
        farmer: '',
        hiveGroup: '',
        timestamp: new Date(),
        bidAmount: 0,
        status: ''
    }
});

    
Bees.Models.HiveGroup = Parse.Object.extend({
    className: "Hive_Group",
    defaults:{
        beekeeper: '',
        hiveCount: '',
        availableBegin: '',
        availableEnd: ''
    }
});