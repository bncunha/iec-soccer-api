import express from 'express';
import TransferController from '../controllers/TransferController';

const router = express.Router();
router.get('/', TransferController.get);
router.post('/', TransferController.create);
router.get('/:id', TransferController.findById);
router.put('/:id', TransferController.update);
router.delete('/:id', TransferController.remove);

export default router;
