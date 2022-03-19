import TransferRepository from '../repositories/TransferRepository';
import BaseService from './BaseService';
import events from '../configs/events.config';

export default {
  ...BaseService(TransferRepository),
  create: async (transfer) => {
    await events.sendEvent(`Transferencia: ${transfer.originTeam} => ${transfer.destinyTeam}`);
    TransferRepository.create(transfer);
  },
};
