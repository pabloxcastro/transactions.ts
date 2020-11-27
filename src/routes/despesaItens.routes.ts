import { Router } from 'express';
import DespesaItensRepository from '../repositories/DespesaItens.repository';
import CreateDespesaItemService from '../service/CreateDespesaItemService';

const despesaItensRouter = Router();
const despesaItensRepository = new DespesaItensRepository();

despesaItensRouter.post('/', (request, response) => {
  try {
    const { dtvencimento, dtpagamento, valor, juros, desconto } = request.body;

    const createDespesaItem = new CreateDespesaItemService(
      despesaItensRepository,
    );

    const despesaItem = createDespesaItem.execute({
      dtvencimento,
      dtpagamento,
      valor,
      juros,
      desconto,
    });

    return response.json(despesaItem);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default despesaItensRouter;
