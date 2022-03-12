import Team from '../models/Team';

const create = (team) => Team.create(team);

export default {
  create,
};
