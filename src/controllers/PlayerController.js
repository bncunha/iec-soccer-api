import HttpStatus from 'http-status';
import PlayerService from '../services/PlayerService';

const get = async (req, res, next) => {
  try {
    res.send(await PlayerService.findAll());
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    res.send(await PlayerService.getById(req.params.id));
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    res.status(HttpStatus.CREATED).send(await PlayerService.create(req.body));
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    res.send(await PlayerService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
};
const remove = async (req, res, next) => {
  try {
    res.send(await PlayerService.destroy(req.params.id));
  } catch (err) {
    next(err);
  }
};

export default {
  get,
  create,
  update,
  remove,
  findById,
};
