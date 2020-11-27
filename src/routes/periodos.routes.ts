import { Router } from 'express';
import PeriodosRepository from '../repositories/Periodos.repository';
import CreatePeriodoService from '../service/CreatePeriodoService';

const periodosRouter = Router();
const periodosRepository = new PeriodosRepository();

periodosRouter.post('/', (request, response) => {
  try {
    const { anocomp, mescomp } = request.body;

    const createPeriodo = new CreatePeriodoService(periodosRepository);

    const periodo = createPeriodo.execute({
      anocomp,
      mescomp,
    });

    return response.json(periodo);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default periodosRouter;
