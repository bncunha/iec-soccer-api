import express from 'express';
import TeamController from '../controllers/TeamController';

const router = express.Router();
router.get('/', TeamController.get);
router.post('/', TeamController.create);
router.get('/:id', TeamController.findById);
router.put('/:id', TeamController.update);
router.delete('/:id', TeamController.remove);

export default router;
