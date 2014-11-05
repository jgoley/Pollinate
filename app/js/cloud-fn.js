function sendMail(params) {

    Parse.Cloud.run('sendEmail', {
        message: 'A farmer is requesting some of your hives',
        subject: 'New Request for bees'
    }, {
        success: function(result) {
            console.log(result)
        },
        error: function(error) {
            console.log(error);
        }
    });

}

function queryBeekeepers(){
    return Parse.Cloud.run('queryBeekeepers', {}, {
        success: function(result) {
    		return result;
        },
        error: function(error) {
            console.log(error)
        }
    });

}