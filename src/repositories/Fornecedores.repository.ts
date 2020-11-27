import Fornecedor from '../models/Fornecedor';

interface CreateFornecedorDTO {
  nome: string;
}

class FornecedoresRepository {
  private fornecedores: Fornecedor[];

  constructor() {
    this.fornecedores = [];
  }

  public all(): Fornecedor[] {
    return this.fornecedores;
  }

  public create({ nome }: CreateFornecedorDTO): Fornecedor {
    const fornecedor = new Fornecedor({ nome });

    this.fornecedores.push(fornecedor);
    return fornecedor;
  }
}

export default FornecedoresRepository;
