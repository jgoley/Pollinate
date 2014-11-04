Parse.Cloud.define("sendEmail", function(request, response) {
    Mandrill.initialize('_U-Rcirs9KnY-ZUFR2FBdQ');
    var Mandrill = require('mandrill');
    
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

Parse.Cloud.beforeSave("User", function(request, response) {
  if (request.object.get("businessName")) {
    request.object.set("businessNameLowercase", request.object.get("businessName").toLowerCase());
  }
  if (request.object.get("firstName")) {
    request.object.set("firstNameLowercase", request.object.get("firstName").toLowerCase());
  }
  if (request.object.get("lastName")) {
    request.object.set("lastNameLowercase", request.object.get("lastName").toLowerCase());
  }  
  response.success();
});

Parse.Cloud.define("queryBeekeepers", function(request, response) {
    var _ = require('underscore');
    var user = request.user;
    var query = new Parse.Query("User");
    query.equalTo('userType', 'beekeeper');
    query.find(function(beekeepers){
        if (user){
            response.success(_.filter(beekeepers, function(beekeeper){
                return user.get('geoCenter').milesTo(beekeeper.get('geoCenter')) < beekeeper.get('geoRangeRadius');
            }));
        }
        else{
            response.success({message:"User is not defined", user: user});
        }
    });
});