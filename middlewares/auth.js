const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500; // Check if the token is custom or from OAuth

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, 'NVaE7HxD!9kg4d!'); // Replace 'yourSecretKey' with your actual secret key
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub; // 'sub' is used for identifying Google OAuth tokens
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
