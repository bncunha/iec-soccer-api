import AuthService from '../services/AuthService';

const login = async (req, res, next) => {
  try {
    const token = await AuthService.login(req.body.user, req.body.password);
    if (token) {
      res.send(token);
    } else {
      res.status(400).send('Credenciais invalidas, use admin/admin');
    }
  } catch (err) {
    next(err);
  }
};

export default {
  login,
};
