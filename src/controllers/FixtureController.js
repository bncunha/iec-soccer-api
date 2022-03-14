import HttpStatus from 'http-status';
import FixtureService from '../services/FixtureService';

const get = async (req, res, next) => {
  try {
    res.send(await FixtureService.findAll());
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    res.send(await FixtureService.getById(req.params.id));
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    res.status(HttpStatus.CREATED).send(await FixtureService.create(req.body));
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    res.send(await FixtureService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
};
const remove = async (req, res, next) => {
  try {
    res.send(await FixtureService.destroy(req.params.id));
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
