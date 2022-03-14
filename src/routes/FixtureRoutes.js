import express from 'express';
import FixtureController from '../controllers/FixtureController';

const router = express.Router();
router.get('/', FixtureController.get);
router.post('/', FixtureController.create);
router.get('/:id', FixtureController.findById);
router.put('/:id', FixtureController.update);
router.delete('/:id', FixtureController.remove);

export default router;
