import { Router } from 'express';
import CategoriasRepository from '../repositories/Categorias.repository';
import CreateCategoriaService from '../service/CreateCategoriaService';

const categoriasRouter = Router();
const categoriasRepository = new CategoriasRepository();

categoriasRouter.post('/', (request, response) => {
  try {
    const { descricao } = request.body;

    const createCategoria = new CreateCategoriaService(categoriasRepository);

    const categoria = createCategoria.execute({
      descricao,
    });

    return response.json(categoria);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default categoriasRouter;
