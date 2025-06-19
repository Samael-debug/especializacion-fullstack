export const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).send('Unauthorized');
  next();
};