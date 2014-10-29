Bees.Models.Session = Parse.Object.extend({
    className: "Session",
    defaults:{
        user: null,
        timestamp: new Date()
    }
});

Bees.Models.User = Parse.Object.extend({
    className: "User",
    defaults:{
        username: '',
        firstName: '',
        lastName: '',
        streetAddress: '',
        city: '',
        zip: '',
        state: '',
        profileText: '',
        image: '',
        geoData: {lat: 0, lng: 0},
        geoRangeRadius: 0,
        userType: '',
        hiveGroups: [],
        bids: '',
        rating: '',
        crop: '',
        farmAcerage: ''
    }
});

Bees.Models.Bid = Parse.Object.extend({
    className: "Bid",
    defaults:{
        beekeeper: '',
        farmer: '',
        timestamp: new Date(),
        bidAmount: 0,
        status: ''
    }
});

    
Bees.Models.HiveGroup = Parse.Object.extend({
    className: "Session",
    defaults:{
        beekeeper: '',
        hiveCount: '',
        availableBegin: '',
        availableEnd: ''
    }
});