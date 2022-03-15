import Fixture from '../models/Fixture';
import Tournament from '../models/Tournament';
import BaseRepository from './BaseRepository';

export default {
  ...BaseRepository(Tournament),
  findTournamentByIdAndFixture: (id, fixtureId) => Tournament.findOne({
    where: {
      id,
    },
    include: [{
      model: Fixture,
      where: { id: fixtureId },
    }],
  }),
};
