const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */
  // check for session cookie
  const { session } = req.cookies;
  // verify using jwt
  const payload = jwt.verify(session, process.env.JWT_SECRET);
  // payload
  res.send(payload);
};
