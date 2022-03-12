import { DataTypes } from 'sequelize';
import sequelize from '../configs/db.config';

const Player = sequelize.define('Player', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TeamId: {
    type: DataTypes.INTEGER,
  },
});

export default Player;
