import DespesaItem from '../models/DespesaItem';
import DespesaItensRepository from '../repositories/DespesaItens.repository';

interface Request {
  dtvencimento: Date;
  dtpagamento: Date;
  valor: number;
  juros: number;
  desconto: number;
}

class CreateDespesaItemService {
  private despesaItensRepository: DespesaItensRepository;

  constructor(despesaItensRepository: DespesaItensRepository) {
    this.despesaItensRepository = despesaItensRepository;
  }

  public execute({
    dtvencimento,
    dtpagamento,
    valor,
    juros,
    desconto,
  }: Request): DespesaItem {
    const despesaItem = this.despesaItensRepository.create({
      dtvencimento,
      dtpagamento,
      valor,
      juros,
      desconto,
    });

    return despesaItem;
  }
}

export default CreateDespesaItemService;
