import express from 'express';
import TeamsRoutes from './TeamRoutes';
import PlayerRoutes from './PlayerRoutes';
import TransferRoutes from './TransferRoutes';

const router = express.Router();
router.use('/times', TeamsRoutes);
router.use('/jogadores', PlayerRoutes);
router.use('/transferencias', TransferRoutes);

export default router;
