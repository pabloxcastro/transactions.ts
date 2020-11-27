import { Router } from 'express';
import FornecedoresRepository from '../repositories/Fornecedores.repository';
import CreateFornecedorService from '../service/CreateFornecedorService';

const fornecedoresRouter = Router();
const fornecedoresRepository = new FornecedoresRepository();

fornecedoresRouter.post('/', (request, response) => {
  try {
    const { nome } = request.body;

    const createFornecedor = new CreateFornecedorService(
      fornecedoresRepository,
    );

    const fornecedor = createFornecedor.execute({
      nome,
    });

    return response.json(fornecedor);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default fornecedoresRouter;
