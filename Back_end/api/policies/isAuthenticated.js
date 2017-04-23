/**
 * isAuthenticated
 *
 */
var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer('DTYw5AbIE_fGdKWWHMja_TuXXo9KUq3QG5S-nfiWle9-hbstUkjl03sEKiwrhKxD', 'base64'),
  audience: 'nHEkwn2CYfFQwthdHNqyDnd6EkNf29Eh'
});

module.exports = authCheck;
