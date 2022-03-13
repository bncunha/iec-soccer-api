import HttpStatus from 'http-status';
import TransferService from '../services/TransferService';

const get = async (req, res, next) => {
  try {
    res.send(await TransferService.findAll());
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    res.send(await TransferService.getById(req.params.id));
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    res.status(HttpStatus.CREATED).send(await TransferService.create(req.body));
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    res.send(await TransferService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
};
const remove = async (req, res, next) => {
  try {
    res.send(await TransferService.destroy(req.params.id));
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
