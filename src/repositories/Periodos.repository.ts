import Periodo from '../models/Periodo';

interface CreatePeriodoDTO {
  anocomp: string;
  mescomp: string;
}

class PeriodosRepository {
  private periodos: Periodo[];

  constructor() {
    this.periodos = [];
  }

  public all(): Periodo[] {
    return this.periodos;
  }

  public create({ anocomp, mescomp }: CreatePeriodoDTO): Periodo {
    const periodo = new Periodo({ anocomp, mescomp });

    this.periodos.push(periodo);
    return periodo;
  }
}

export default PeriodosRepository;
