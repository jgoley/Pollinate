
"users": {
    simplelogin:1: {
        "rating": 3,
        "reviews": [review_id_1, review_id_2]
        'image': '',
        'profileText': '',
        "geoPosition": '3, 3' // center
        "userTypeID": beekeeper_id_1,  // <----
    }
},

"beekeepers": {
    "beekeeper_id_1": {
        'yearsPollinating': '',
        "hiveGroups": [hiveGroup_id_1, hiveGroup_id_8], // <----
        "geoPosition": '3, 3', // center
        'geoRangeRadius': 300,
        'image': '',
        'profileText': '',        
    }
},

"farmers": {
    "farmer_id_1": {
        "crop": "strawberries",
        "farmAcerage": 30,
        "geoPosition": '3, 3',
        'image': '',
        'profileText': '',
        "rating": 0,
        "bids": [bid_id_1, bid_id_8], // <----
    }
},

"ratedBeekeepers": {
	"_id": {
    	"user": beekeeper_id_1, // <-----
    	"rating": 0,
	}
},

"ratedFarmers": {
	"_id": {
    	"user": farmer_id_1, // <-----
    	"rating": 0,
    }
},

"reviews": {
    review_id_1: {
        "comment": "",
        "timestamp": new Date(),
        "submittedBy": beekeeper_id_1  // <-----
    },
},

"hiveGroups": {
	hiveGroup_id_1:{
	    "numOfHives": 0,
	    "beekeeper": beekeeper_id_1, // <-----
	    "startDate": "",
	    "endDate": "",
	}
},

"bids":{
    bid_id_1: {
        "beekeeper": beekeeper_id_1, // <-----
        "timestamp": 'Tue Oct 28 2014 10:35:43 GMT-0400 (EDT)',
        'bidAmount': 200,
        'status': 'accepted',
    }
};


Pollinate.User = DS.Model.extend({
	userID: DS.attr('string'),
	username: DS.attr('string'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	streetAddress: DS.attr('string'),
	city: DS.attr('string'),
	zip: DS.attr('string'),
	state: DS.attr('string'),
	userType: DS.attr('string'),
	geoData: DS.attr('string')
});