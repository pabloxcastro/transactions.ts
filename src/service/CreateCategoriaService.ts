import Categoria from '../models/Categoria';
import CategoriasRepository from '../repositories/Categorias.repository';

interface Request {
  descricao: string;
}

class CreateCategoriaService {
  private categoriasRepository: CategoriasRepository;

  constructor(categoriasRepository: CategoriasRepository) {
    this.categoriasRepository = categoriasRepository;
  }

  public execute({ descricao }: Request): Categoria {
    const categoria = this.categoriasRepository.create({
      descricao,
    });

    return categoria;
  }
}

export default CreateCategoriaService;
