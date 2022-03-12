import sequelize from '../configs/db.config';
import Team from './Team';

const Player = sequelize.define('Player', {
  id: {
    type: 'number',
    primaryKey: true,
  },
  name: {
    type: 'string',
    allowNull: false,
  },
  birthDate: {
    type: 'date',
    allowNull: false,
  },
  country: {
    type: 'string',
    allowNull: false,
  },
  team: {
    type: 'string',
    allowNull: false,
  },
});

Player.belongsTo(Team);

export default Player;
