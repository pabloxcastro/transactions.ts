import Despesa from '../models/Despesa';

interface CreateDespesaDTO {
  descricao: string;
  frequencia: string;
  mesDia: string;
  tipoDia: string;
}

class DespesasRepository {
  private despesas: Despesa[];

  constructor() {
    this.despesas = [];
  }

  public all(): Despesa[] {
    return this.despesas;
  }

  public create({
    descricao,
    frequencia,
    mesDia,
    tipoDia,
  }: CreateDespesaDTO): Despesa {
    const despesa = new Despesa({
      descricao,
      frequencia,
      mesDia,
      tipoDia,
    });

    this.despesas.push(despesa);
    return despesa;
  }
}

export default DespesasRepository;
