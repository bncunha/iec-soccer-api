import express from 'express';
import TeamsRoutes from './TeamRoutes';

const router = express.Router();
router.use('/times', TeamsRoutes);

export default router;
