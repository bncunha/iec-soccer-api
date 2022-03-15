import jwt from 'jsonwebtoken';

const login = (user, pass) => {
  if (user === 'admin' && pass === 'admin') {
    const token = jwt.sign(
      { user: 'admin' },
      'TOKEN_KEY',
      {
        expiresIn: '2h',
      },
    );
    return token;
  }
  return null;
};

export default {
  login,
};
