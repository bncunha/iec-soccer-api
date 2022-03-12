import { DataTypes } from 'sequelize';
import sequelize from '../configs/db.config';

const Transfer = sequelize.define('Transfer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  originTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  destinyTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Transfer;
