import Sequelize from 'sequelize';

const db = new Sequelize(
  'iec_soccer',
  'root',
  '123456',
  {
    host: 'localhost',
    dialect: 'mysql',
  },
);

export default db;
