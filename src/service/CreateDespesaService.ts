import Despesa from '../models/Despesa';
import DespesasRepository from '../repositories/Depesas.repository';

interface Request {
  descricao: string;
  frequencia: string;
  mesDia: string;
  tipoDia: string;
}

class CreateDespesaService {
  private despesasRepository: DespesasRepository;

  constructor(despesasRepository: DespesasRepository) {
    this.despesasRepository = despesasRepository;
  }

  public execute({ descricao, frequencia, mesDia, tipoDia }: Request): Despesa {
    const despesa = this.despesasRepository.create({
      descricao,
      frequencia,
      mesDia,
      tipoDia,
    });

    return despesa;
  }
}

export default CreateDespesaService;
