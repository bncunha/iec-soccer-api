import EventRepository from '../repositories/EventRepository';
import events from '../configs/events.config';

const VALID_EVENTS = [
  'inicio',
  'gol',
  'intervalo',
  'acrescimo',
  'substituicao',
  'advertencia',
  'fim',
];

const isValidEvent = (evento) => VALID_EVENTS.indexOf(evento) >= 0;

const create = async (eventName, fixtureId) => {
  if (!isValidEvent(eventName)) throw new Error('Evento inválido');
  const evento = {
    name: eventName,
    FixtureId: fixtureId,
  };
  const saved = EventRepository.create(evento);
  await events.sendEvent(`Partida ${fixtureId}: ${eventName}`);
  return saved;
};

export default {
  create,
};
