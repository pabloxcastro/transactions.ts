import { Router } from 'express';
import ClientesRepository from '../repositories/Clientes.repository';
import CreateClienteService from '../service/CreateClienteService';

const clientesRouter = Router();
const clientesRepository = new ClientesRepository();

clientesRouter.post('/', (request, response) => {
  try {
    const { nome } = request.body;

    const createCliente = new CreateClienteService(clientesRepository);

    const cliente = createCliente.execute({
      nome,
    });

    return response.json(cliente);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default clientesRouter;
