function sendMail(params) {
    Parse.Cloud.run('sendEmail', params, {
        success: function(result) {
            console.log(result)
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function queryBeekeepers(distance) {
    return Parse.Cloud.run('queryBeekeepers', {distance: distance}, {
        success: function(result) {
            return result;
        },
        error: function(error) {
            console.log(error)
        }
    });
}

function saveLocation() {
    return Parse.Cloud.run('saveLocation', {}, {
        success: function(response) {
            Bees.Session.get('user').fetch();
            return response;
        },
        error: function(response) {
            console.log(response)
        }
    });
}