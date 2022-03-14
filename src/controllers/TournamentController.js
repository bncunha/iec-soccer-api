import HttpStatus from 'http-status';
import TournamentService from '../services/TournamentService';

const get = async (req, res, next) => {
  try {
    res.send(await TournamentService.findAll());
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    res.send(await TournamentService.getById(req.params.id));
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    res.status(HttpStatus.CREATED).send(await TournamentService.create(req.body));
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    res.send(await TournamentService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
};
const remove = async (req, res, next) => {
  try {
    res.send(await TournamentService.destroy(req.params.id));
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
