const fbTestUser = require('./lib/FacebookTestUsers');

// ------------------------------------------------------------
// Retrieve Facebook posts by appId, appToken and testUserId
// ------------------------------------------------------------
fbTestUser.getPosts('1174269126029446', '1174269126029446|5ul4NnVVbhWdj1G0SC5Cm5gO8JM', '101120990479527')
    .then(function (res){
        console.log(res);
    });
