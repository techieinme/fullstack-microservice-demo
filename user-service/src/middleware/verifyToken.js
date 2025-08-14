const axios = require("axios");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
    console.log("token",req.headers.authorization)
  try {
    const { data } = await axios.get(`${process.env.AUTH_SERVICE_URL}/api/auth/verify-token`, {
      headers: { Authorization: token },
    });

    console.log("data",data)
    if (!data.valid) return res.status(403).json({ message: "Unauthorized" });
    req.user = data.user;
    next();
  } catch (err) {
    console.log(err.message)
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = verifyToken;
