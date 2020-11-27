import DespesaItem from '../models/DespesaItem';

interface CreateDespesaItemDTO {
  dtvencimento: Date;
  dtpagamento: Date;
  valor: number;
  juros: number;
  desconto: number;
}

class DespesaItensRepository {
  private despesaItens: DespesaItem[];

  constructor() {
    this.despesaItens = [];
  }

  public all(): DespesaItem[] {
    return this.despesaItens;
  }

  public create({
    dtvencimento,
    dtpagamento,
    valor,
    juros,
    desconto,
  }: CreateDespesaItemDTO): DespesaItem {
    const despesaItem = new DespesaItem({
      dtvencimento,
      dtpagamento,
      valor,
      juros,
      desconto,
    });

    this.despesaItens.push(despesaItem);
    return despesaItem;
  }
}

export default DespesaItensRepository;
