import express from 'express';

const routes = express.Router();

routes.post('/certification', async (req, res) => {
  const message = {
    user: { id: 1, name: 'Josimar Martins' },
    course: 'Kafka com node.js',
    grade: 5
  }
  //Chamar micro serviço
  await req.producer.send({
    topic: 'issue-certificate',
    messages: [
      { value: JSON.stringify(message) }
    ]
  });
  return res.json({ ok: true });
})

export default routes;