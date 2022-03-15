import TournamentRepository from '../repositories/TournamentRepository';
import BaseService from './BaseService';
import EventService from './EventService';

const updateEvent = async (id, fixtureId, event) => {
  const torneio = await TournamentRepository.findTournamentByIdAndFixture(id, fixtureId);
  if (!torneio) throw new Error('Torneio não encontrado');
  return EventService.create(event, fixtureId);
};

export default {
  ...BaseService(TournamentRepository),
  updateEvent,
};
