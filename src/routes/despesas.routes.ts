import { Router } from 'express';
import DespesasRepository from '../repositories/Depesas.repository';
import CreateDespesaService from '../service/CreateDespesaService';

const depesasRouter = Router();
const despesasRepository = new DespesasRepository();

depesasRouter.post('/', (request, response) => {
  try {
    const { descricao, frequencia, mesDia, tipoDia } = request.body;

    const createDespesa = new CreateDespesaService(despesasRepository);

    const despesa = createDespesa.execute({
      descricao,
      frequencia,
      mesDia,
      tipoDia,
    });

    return response.json(despesa);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default depesasRouter;
