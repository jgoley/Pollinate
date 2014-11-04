var Mandrill = require('mandrill');
Mandrill.initialize('_U-Rcirs9KnY-ZUFR2FBdQ');
// Send an email for requests
Parse.Cloud.define("sendEmail", function(request, response) {

    Mandrill.sendEmail({
        message: {
            text: "Test email",
            subject: "Testing out the cloud code function",
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
