// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

const auth = () => (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attaches { id, role } to request
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Invalid or expired token' });
  }
};

export default auth;
