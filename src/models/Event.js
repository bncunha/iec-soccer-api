import { DataTypes } from 'sequelize';
import sequelize from '../configs/db.config';

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  FixtureId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Event;
