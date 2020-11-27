import Cliente from '../models/Cliente';
import ClientesRepository from '../repositories/Clientes.repository';

interface Request {
  nome: string;
}

class CreateClienteService {
  private clientesRepository: ClientesRepository;

  constructor(clientesRepository: ClientesRepository) {
    this.clientesRepository = clientesRepository;
  }

  public execute({ nome }: Request): Cliente {
    const cliente = this.clientesRepository.create({
      nome,
    });

    return cliente;
  }
}

export default CreateClienteService;
