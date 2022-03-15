import { DataTypes } from 'sequelize';
import sequelize from '../configs/db.config';

const Fixture = sequelize.define('Fixture', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  TournamentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Fixture;
