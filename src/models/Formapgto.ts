import { uuid } from 'uuidv4';

class Formapgto {
  id: string;

  descricao: string;

  tipo: string;

  diaVencimento: string;

  diaFatura: string;

  saldo: number;

  constructor({
    descricao,
    tipo,
    diaVencimento,
    diaFatura,
    saldo,
  }: Omit<Formapgto, 'id'>) {
    this.id = uuid();
    this.descricao = descricao;
    this.tipo = tipo;
    this.diaVencimento = diaVencimento;
    this.diaFatura = diaFatura;
    this.saldo = saldo;
  }
}

export default Formapgto;
