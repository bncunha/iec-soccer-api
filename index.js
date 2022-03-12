import express from 'express';
import bodyParser from 'body-parser';
import database from './src/configs/db.config';
import routes from './src/routes';
import models from './src/models';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// app.get('/', (req, res) => {
//   res.json({ message: 'ok' });
// });

app.use('/v1', routes);

// routes.initRoutes();

app.listen(port, '0.0.0.0', async () => {
  try {
    await models.relations();
    await database.sync({ force: true });
  } catch (err) {
    console.log(err);
  }
  console.log(`Soccer app listening at http://localhost:${port}`);
});
