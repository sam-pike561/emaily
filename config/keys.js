// figure out whether in dev or prod environment
if (process.env.NODE_ENV === 'production') {
  // we are in production - return prod set of keys
  module.exports = require('./dev');
} else {
  //we in development - return the dev keys!!
  module.exports = require('./dev');
}
