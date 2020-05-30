const key = 'private.key';
const { GoogleToken } = require('gtoken');
const gtoken = new GoogleToken({
  email: 'your_email',
  scope: ['https://www.googleapis.com/auth/devstorage.read_write'], // or space-delimited string of scopes
  key: key
});

function getAccessToken(req, res, next) {	

	gtoken.getToken((err, token) => {
	  console.log(err || token);	  
	  res.access_token = gtoken.rawToken.access_token
	  next();
	});
}

module.exports = {
  getAccessToken,
};
