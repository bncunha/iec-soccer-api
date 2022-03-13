import { DataTypes } from 'sequelize';
import sequelize from '../configs/db.config';

const Team = sequelize.define('Team', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  locality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Team;
