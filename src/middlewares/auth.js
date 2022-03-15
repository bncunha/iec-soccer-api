import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer' && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(403).send('Token é obrigatorio');
  }
  try {
    const decoded = jwt.verify(token, 'TOKEN_KEY');
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Token inválido');
  }
  return next();
};

export default verifyToken;
