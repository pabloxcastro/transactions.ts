import Formapgto from '../models/Formapgto';

interface CreateFormapgtoDTO {
  descricao: string;
  tipo: string;
  diaVencimento: string;
  diaFatura: string;
  saldo: number;
}

class FormapgtosRepository {
  private formapgtos: Formapgto[];

  constructor() {
    this.formapgtos = [];
  }

  public all(): Formapgto[] {
    return this.formapgtos;
  }

  public create({
    descricao,
    tipo,
    diaVencimento,
    diaFatura,
    saldo,
  }: CreateFormapgtoDTO): Formapgto {
    const formapgto = new Formapgto({
      descricao,
      tipo,
      diaVencimento,
      diaFatura,
      saldo,
    });

    this.formapgtos.push(formapgto);
    return formapgto;
  }
}

export default FormapgtosRepository;
