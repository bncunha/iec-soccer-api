import sequelize from '../configs/db.config';
import Team from './Team';

const Transfer = sequelize.define('Transfer', {
  id: {
    type: 'number',
    primaryKey: true,
  },
  originTeam: {
    type: 'number',
    allowNull: false,
  },
  destinyTeam: {
    type: 'number',
    allowNull: false,
  },
  date: {
    type: 'date',
    allowNull: false,
  },
  price: {
    type: 'number',
    allowNull: false,
  },
});

Transfer.belongsToMany(Team, { as: 'OriginTeam', foreignKey: 'originTeam', through: 'TeamTransfers' });
Transfer.belongsToMany(Team, { as: 'DestinyTeam', foreignKey: 'destinyTeam', through: 'TeamTransfers' });

export default Transfer;
