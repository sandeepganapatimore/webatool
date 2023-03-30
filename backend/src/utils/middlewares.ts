import jwt from "jsonwebtoken";

export function verifyToken(req: any, res: any, next) {
  console.log('req.headers?.authorization',req.headers?.authorization)
  const token = req.headers?.authorization
    ? req.headers?.authorization.replace("Bearer ", "")
    : undefined;

  console.log("token", token);
  if (!token) {
    return res.status(401).send({ code: "401", error: "Unauthorized User" });
  }
  try {
    const decoded = jwt.verify(token, "top_secret");
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({ code: "401", error: "Unauthorized User" });
  }
  return next();
}
