import { uuid } from 'uuidv4';

class DespesaItem {
  id: string;

  dtvencimento: Date;

  dtpagamento: Date;

  valor: number;

  juros: number;

  desconto: number;

  constructor({
    dtvencimento,
    dtpagamento,
    valor,
    juros,
    desconto,
  }: Omit<DespesaItem, 'id'>) {
    this.id = uuid();
    this.dtvencimento = dtvencimento;
    this.dtpagamento = dtpagamento;
    this.valor = valor;
    this.juros = juros;
    this.desconto = desconto;
  }
}

export default DespesaItem;
