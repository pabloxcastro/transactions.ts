import { uuid } from 'uuidv4';

class Despesa {
  id: string;

  descricao: string;

  frequencia: string;

  mesDia: string;

  tipoDia: string;

  constructor({ descricao, frequencia, mesDia, tipoDia }: Omit<Despesa, 'id'>) {
    this.id = uuid();
    this.descricao = descricao;
    this.frequencia = frequencia;
    this.mesDia = mesDia;
    this.tipoDia = tipoDia;
  }
}

export default Despesa;
