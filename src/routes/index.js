import express from 'express';
import TeamsRoutes from './TeamRoutes';
import PlayerRoutes from './PlayerRoutes';
import TransferRoutes from './TransferRoutes';
import TournamentRoutes from './TournamentRoutes';
import FixtureRoutes from './FixtureRoutes';

const router = express.Router();
router.use('/times', TeamsRoutes);
router.use('/jogadores', PlayerRoutes);
router.use('/transferencias', TransferRoutes);
router.use('/torneios', TournamentRoutes);
router.use('/partidas', FixtureRoutes);

export default router;
