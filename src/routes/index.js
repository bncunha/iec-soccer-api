import express from 'express';
import TeamsRoutes from './TeamRoutes';
import PlayerRoutes from './PlayerRoutes';

const router = express.Router();
router.use('/times', TeamsRoutes);
router.use('/jogadores', PlayerRoutes);

export default router;
