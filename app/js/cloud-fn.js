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

// function queryBeekeepers(distance) {
//     console.log("!!!!!!!!!",distance);
//     return Parse.Cloud.run('queryBeekeepers', {distance: distance}, {
//         success: function(result) {
//             if (result.length === 0){
//                 queryBeekeepers(distance + 500);
//             } else
//                 console.log(result);
//                 return result;
//         },
//         error: function(error) {
//             console.log(error)
//         }
//     });
// }

function saveLocation() {
    return Parse.Cloud.run('saveLocation', {}, {
        success: function(response) {
            Parse.User.current().fetch();
            return response;
        },
        error: function(response) {
            console.log(response)
        }
    });
}