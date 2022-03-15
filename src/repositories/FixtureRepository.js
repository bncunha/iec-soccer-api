import Fixture from '../models/Fixture';
import Team from '../models/Team';
import BaseRepository from './BaseRepository';

export default {
  ...BaseRepository(Fixture),
  findAll: () => Fixture.findAll({ include: [{ model: Team, as: 'AwayTeam' }, { model: Team, as: 'HomeTeam' }] }),
  getById: (id) => Fixture.findByPk(id, { include: [{ model: Team, as: 'AwayTeam' }, { model: Team, as: 'HomeTeam' }] }),
};
