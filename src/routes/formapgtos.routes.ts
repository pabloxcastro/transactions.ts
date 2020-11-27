import { Router } from 'express';
import FormapgtosRepository from '../repositories/Formapgtos.repository';
import CreateFormapgtoService from '../service/CreateFormapgtoService';

const formapgtosRouter = Router();
const formapgtosRepository = new FormapgtosRepository();

formapgtosRouter.post('/', (request, response) => {
  try {
    const { descricao, tipo, diaVencimento, diaFatura, saldo } = request.body;

    const createFormapgto = new CreateFormapgtoService(formapgtosRepository);

    const formapgto = createFormapgto.execute({
      descricao,
      tipo,
      diaVencimento,
      diaFatura,
      saldo,
    });

    return response.json(formapgto);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default formapgtosRouter;
