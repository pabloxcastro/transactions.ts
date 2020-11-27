import { uuid } from 'uuidv4';

class Fornecedor {
  id: string;

  nome: string;

  constructor({ nome }: Omit<Fornecedor, 'id'>) {
    this.id = uuid();
    this.nome = nome;
  }
}

export default Fornecedor;
