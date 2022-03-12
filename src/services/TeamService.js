import TeamRepository from '../repositories/TeamRepository';

const get = async () => {
  const a = 1 + 1;
  return {
    teste: `Criado com sucesso: ${a}`,
  };
};

const create = async (team) => TeamRepository.create(team);

const find = async () => {
  const a = 1 + 1;
  return {
    teste: `Criado com sucesso: ${a}`,
  };
};

const update = async () => {
  const a = 1 + 1;
  return {
    teste: `Criado com sucesso: ${a}`,
  };
};

const remove = async () => {
  const a = 1 + 1;
  return {
    teste: `Criado com sucesso: ${a}`,
  };
};

export default {
  get,
  create,
  find,
  update,
  remove,
};
