import Event from './Event';
import Fixture from './Fixture';
import Player from './Player';
import Team from './Team';
import Tournament from './Tournament';
import Transfer from './Transfer';

const relations = () => {
  Player.belongsTo(Team);
  Fixture.belongsTo(Team, { as: 'HomeTeam', foreignKey: 'homeTeam', through: 'homeTeam' });
  Fixture.belongsTo(Team, { as: 'AwayTeam', foreignKey: 'awayTeam', throw: 'awayTeam' });

  Team.hasMany(Player);

  Transfer.belongsTo(Team, { as: 'OriginTeam', foreignKey: 'originTeam' });
  Transfer.belongsTo(Team, { as: 'DestinyTeam', foreignKey: 'destinyTeam' });

  Tournament.belongsToMany(Team, { through: 'TournamentTeam' });
  Team.belongsToMany(Tournament, { through: 'TournamentTeam' });

  Tournament.hasMany(Fixture);
  Fixture.belongsTo(Tournament);

  Fixture.hasMany(Event);
  Event.belongsTo(Fixture);
};

export default {
  relations,
};
