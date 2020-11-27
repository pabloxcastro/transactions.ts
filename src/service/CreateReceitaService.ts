import Receita from '../models/Receita';
import ReceitasRepository from '../repositories/Receitas.repository';

interface Request {
  descricao: string;
  frequencia: string;
  mesDia: string;
}

class CreateReceitaService {
  private receitasRepository: ReceitasRepository;

  constructor(receitasRepository: ReceitasRepository) {
    this.receitasRepository = receitasRepository;
  }

  public execute({ descricao, frequencia, mesDia }: Request): Receita {
    const receita = this.receitasRepository.create({
      descricao,
      frequencia,
      mesDia,
    });

    return receita;
  }
}

export default CreateReceitaService;
