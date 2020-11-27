import Cliente from '../models/Cliente';

interface CreatePeriodoDTO {
  nome: string;
}

class ClientesRepository {
  private clientes: Cliente[];

  constructor() {
    this.clientes = [];
  }

  public all(): Cliente[] {
    return this.clientes;
  }

  public create({ nome }: CreatePeriodoDTO): Cliente {
    const cliente = new Cliente({ nome });

    this.clientes.push(cliente);
    return cliente;
  }
}

export default ClientesRepository;
