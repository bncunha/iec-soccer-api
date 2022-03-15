import { Kafka } from 'kafkajs';

const topic = 'fixture-events';
const kafka = new Kafka({ brokers: ['localhost:9092'] });
const producer = kafka.producer();

const sendEvent = async (message) => {
  console.log(`Send message: ${message}`);
  await producer.connect();
  await producer.send({
    topic,
    messages: [
      { value: message },
    ],
  });
};

export default {
  sendEvent,
};
