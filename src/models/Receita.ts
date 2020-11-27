import { uuid } from 'uuidv4';

class Receita {
  id: string;

  descricao: string;

  frequencia: string;

  mesDia: string;

  constructor({ descricao, frequencia, mesDia }: Omit<Receita, 'id'>) {
    this.id = uuid();
    this.descricao = descricao;
    this.frequencia = frequencia;
    this.mesDia = mesDia;
  }
}

export default Receita;
