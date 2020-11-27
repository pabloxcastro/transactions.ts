import Receita from '../models/Receita';

interface CreateReceitaDTO {
  descricao: string;
  frequencia: string;
  mesDia: string;
}

class ReceitasRepository {
  private receitas: Receita[];

  constructor() {
    this.receitas = [];
  }

  public all(): Receita[] {
    return this.receitas;
  }

  public create({ descricao, frequencia, mesDia }: CreateReceitaDTO): Receita {
    const receita = new Receita({
      descricao,
      frequencia,
      mesDia,
    });

    this.receitas.push(receita);
    return receita;
  }
}

export default ReceitasRepository;
