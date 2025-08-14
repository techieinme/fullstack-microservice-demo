const axios = require("axios");

module.exports = async (req, res, next) => {
  const token = req.headers.Authorization;

  console.log("token",token)
  try {
    const { data } = await axios.get(`${process.env.AUTH_SERVICE_URL}/verify-token`, {
      headers: { Authorization: token },
    });
    if (!data.valid) return res.status(403).json({ message: "Unauthorized" });
    req.user = data.user;
    next();
  } catch {
    res.status(401).json({ message: "Invalid Token" });
  }
};
