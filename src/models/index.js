import Player from './Player';
import Team from './Team';
import Transfer from './Transfer';

const relations = () => {
  Player.belongsTo(Team);

  Team.hasMany(Player);

  Transfer.belongsTo(Team, { as: 'OriginTeam', foreignKey: 'originTeam' });
  Transfer.belongsTo(Team, { as: 'DestinyTeam', foreignKey: 'destinyTeam' });
};

export default {
  relations,
};
