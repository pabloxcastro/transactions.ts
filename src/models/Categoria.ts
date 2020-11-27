import { uuid } from 'uuidv4';

class Categoria {
  id: string;

  descricao: string;

  constructor({ descricao }: Omit<Categoria, 'id'>) {
    this.id = uuid();
    this.descricao = descricao;
  }
}

export default Categoria;
