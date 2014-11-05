Parse.Cloud.define("sendEmail", function(request, response) {
    var Mandrill = require('mandrill');
    Mandrill.initialize('_U-Rcirs9KnY-ZUFR2FBdQ');

    Mandrill.sendEmail({
        message: {
            text: request.params.message,
            subject: request.params.subject,
            from_email: "jgoley.etc@gmail.com",
            from_name: "JGo",
            to: [{
                email: "jgoley@gmail.com",
                name: "Jonathan"
            }]
        },
        async: true
    }, {
        success: function(httpResponse) {
            console.log(httpResponse);
            response.success("Email sent!");
        },
        error: function(httpResponse) {
            console.error(httpResponse);
            response.error("Uh oh, something went wrong");
        }
    });
});

Parse.Cloud.define("queryBeekeepers", function(request, response) {
    var _ = require('underscore');
    var user = request.user;
    var query = new Parse.Query("User");
    query.equalTo('userType', 'beekeeper');
    query.find(function(beekeepers) {
        if (user) {
            response.success(_.filter(beekeepers, function(beekeeper) {
                return user.get('geoCenter').milesTo(beekeeper.get('geoCenter')) < beekeeper.get('geoRangeRadius');
            }));
        } else {
            response.success({
                message: "User is not defined",
                user: user
            });
        }
    });
});

Parse.Cloud.define("getLocation", function(request, response) {
    var googleToken = 'AIzaSyDIWzTq_5JQgHCLIvfNuU-CeLFYmdYiQ5U';
    var geoRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=2433+lower+richland+blvd+hopkins+SC&key=' + googleToken;

    Parse.Cloud.httpRequest({
        url: geoRequest,
        success: function (geoData) {
            response.success(geoData);
        },
        error: function (httpResponse) {
            console.error('Request failed with response code ' + httpResponse.status);
        }
    });

});


// beforeSave
Parse.Cloud.beforeSave(Parse.User, function(request, response) {

    if (request.object.dirty("address") || request.object.dirty("city") || request.object.dirty("state")){

        var googleToken = 'AIzaSyDIWzTq_5JQgHCLIvfNuU-CeLFYmdYiQ5U';
        var address = (request.object.get('address') + ',' + request.object.get('city') + ',' + request.object.get('state')).replace(/\s+/g, '+');
        var geoRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + googleToken;

        // check to see if the user's location has changed
        // request.object.dirty
        // httpRequest

        Parse.Cloud.httpRequest({
            method: "GET",
            url: geoRequest,
            success: function (geoData) {
                //console.log(httpResponse.text);
                request.object.set('geoCenter', new Parse.GeoPoint([geoData.results[0].geometry.location.lat, geoData.results[0].geometry.location.lng]));
            },
            error: function (httpResponse) {
                console.error('Request failed with response code ' + httpResponse.status);
            }
        });

    }

    if (request.object.dirty("businessName") || request.object.dirty("firstName") || request.object.dirty("lastName")){
    
        if (request.object.get("businessName")) {
            request.object.set("businessNameLowercase", request.object.get("businessName").toLowerCase());
        }
        if (request.object.get("firstName")) {
            request.object.set("firstNameLowercase", request.object.get("firstName").toLowerCase());
        }
        if (request.object.get("lastName")) {
            request.object.set("lastNameLowercase", request.object.get("lastName").toLowerCase());
        }
    }

    response.success(geoRequest);
    //response.error();

})