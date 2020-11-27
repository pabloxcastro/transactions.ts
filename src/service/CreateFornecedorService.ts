import Fornecedor from '../models/Fornecedor';
import FornecedoresRepository from '../repositories/Fornecedores.repository';

interface Request {
  nome: string;
}

class CreateFornecedorService {
  private fornecedoresRepository: FornecedoresRepository;

  constructor(fornecedoresRepository: FornecedoresRepository) {
    this.fornecedoresRepository = fornecedoresRepository;
  }

  public execute({ nome }: Request): Fornecedor {
    const fornecedor = this.fornecedoresRepository.create({
      nome,
    });

    return fornecedor;
  }
}

export default CreateFornecedorService;
