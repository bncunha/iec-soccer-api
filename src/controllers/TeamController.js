import TeamService from '../services/TeamService';

const get = async ({ res }) => {
  res.send(await TeamService.create());
};

const find = async ({ res }) => {
  res.send(await TeamService.create());
};

const create = async ({ res }) => {
  res.send(await TeamService.create());
};

const update = async ({ res }) => {
  res.send(await TeamService.create());
};
const remove = async ({ res }) => {
  res.send(await TeamService.create());
};

export default {
  get,
  create,
  update,
  remove,
  find,
};
