import { Router } from 'express';
import ReceitasRepository from '../repositories/Receitas.repository';
import CreateReceitaService from '../service/CreateReceitaService';

const receitasRouter = Router();
const receitasRepository = new ReceitasRepository();

receitasRouter.post('/', (request, response) => {
  try {
    const { descricao, frequencia, mesDia } = request.body;

    const createReceita = new CreateReceitaService(receitasRepository);

    const receita = createReceita.execute({
      descricao,
      frequencia,
      mesDia,
    });

    return response.json(receita);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default receitasRouter;
