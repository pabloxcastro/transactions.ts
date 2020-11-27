import Categoria from '../models/Categoria';

interface CreateCategoriaDTO {
  descricao: string;
}

class CategoriasRepository {
  private categorias: Categoria[];

  constructor() {
    this.categorias = [];
  }

  public all(): Categoria[] {
    return this.categorias;
  }

  public create({ descricao }: CreateCategoriaDTO): Categoria {
    const categoria = new Categoria({ descricao });

    this.categorias.push(categoria);
    return categoria;
  }
}

export default CategoriasRepository;
