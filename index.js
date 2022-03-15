import express from 'express';
import bodyParser from 'body-parser';
import database from './src/configs/db.config';
import routes from './src/routes';
import models from './src/models';
import AuthRoutes from './src/routes/AuthRoutes';
import authMiddleware from './src/middlewares/auth';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use('/v1/auth', AuthRoutes);
app.use('/v1', authMiddleware, routes);

app.use((err, req, res) => {
  const statusCode = err.statusCode || 500;
  console.error('---- ERRO:', err.message, err.stack);
  res.status(statusCode).send({ message: err.message });
  return null;
});

app.listen(port, '0.0.0.0', async () => {
  try {
    await models.relations();
    await database.sync();
    console.log(`Soccer app listening at http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
});
