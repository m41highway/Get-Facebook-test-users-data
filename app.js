const fbTestUser = require('./lib/FacebookTestUsers');

// ------------------------------------------------------------
// Retrieve Facebook posts by appId, appToken and testUserId
// Replace xxxxxxxxxxxxxxxxxxxx with your appToken
// ------------------------------------------------------------
fbTestUser.getPosts('1174269126029446', 'xxxxxxxxxxxxxxxxxxxx', '101120990479527')
    .then(function (res){
        console.log(res);
    });
