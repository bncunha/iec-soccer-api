import express from 'express';
import TournamentController from '../controllers/TournamentController';

const router = express.Router();
router.get('/', TournamentController.get);
router.post('/', TournamentController.create);
router.get('/:id', TournamentController.findById);
router.put('/:id', TournamentController.update);
router.delete('/:id', TournamentController.remove);
router.post('/:id/partidas/:idPartida/eventos/:tipoEvento', TournamentController.updateEvent);

export default router;
