import HttpStatus from 'http-status';
import TeamService from '../services/TeamService';

const get = async (req, res, next) => {
  try {
    res.send(await TeamService.findAll());
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    res.send(await TeamService.getById(req.params.id));
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    res.status(HttpStatus.CREATED).send(await TeamService.create(req.body));
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    res.send(await TeamService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
};
const remove = async (req, res, next) => {
  try {
    res.send(await TeamService.destroy(req.params.id));
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
