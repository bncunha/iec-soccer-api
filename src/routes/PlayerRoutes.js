import express from 'express';
import PlayerController from '../controllers/PlayerController';

const router = express.Router();
router.get('/', PlayerController.get);
router.post('/', PlayerController.create);
router.get('/:id', PlayerController.findById);
router.put('/:id', PlayerController.update);
router.delete('/:id', PlayerController.remove);

export default router;
