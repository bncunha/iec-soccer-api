import sequelize from '../configs/db.config';

const Team = sequelize.define('Team', {
  id: {
    type: 'number',
    primaryKey: true,
  },
  name: {
    type: 'string',
    allowNull: false,
  },
  locality: {
    type: 'string',
    allowNull: false,
  },
});

Team.hasMany('Player');
Team.belongsToMany('Transfer', { through: 'TeamTransfers' });

export default Team;
