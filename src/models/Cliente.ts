import { uuid } from 'uuidv4';

class Cliente {
  id: string;

  nome: string;

  constructor({ nome }: Omit<Cliente, 'id'>) {
    this.id = uuid();
    this.nome = nome;
  }
}

export default Cliente;
