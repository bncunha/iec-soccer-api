import TeamRepository from '../repositories/TeamRepository';
import TournamentRepository from '../repositories/TournamentRepository';
import BaseService from './BaseService';

const TeamService = () => {
  const baseService = BaseService(TeamRepository);

  const getTournament = async (idTournament) => {
    if (!idTournament) return null;
    const tournament = await TournamentRepository.getById(idTournament);
    if (!tournament) {
      throw new Error('Torneio não existe');
    }
    return tournament;
  };

  const create = async (newModel) => {
    const team = await baseService.create(newModel);
    if (newModel.tournament) {
      await team.addTournament(await getTournament(newModel.tournament));
    }
    return team;
  };

  const update = async (id, newModel) => {
    if (newModel.tournament) {
      const team = await TeamRepository.getById(id);
      await team.addTournament(await getTournament(newModel.tournament));
    }
    return baseService.update(id, newModel);
  };

  return {
    ...baseService,
    create,
    update,
  };
};

export default TeamService();
