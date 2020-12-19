import express from 'express';

const routes = express.Router();

routes.post('/certification', async (req, res) => {
  //Chamar micro serviço
  return res.json({ ok: true })
})

export default routes;