import Periodo from '../models/Periodo';
import PeriodosRepository from '../repositories/Periodos.repository';

interface Request {
  anocomp: string;
  mescomp: string;
}

class CreatePeriodoService {
  private periodosRepository: PeriodosRepository;

  constructor(periodosRepository: PeriodosRepository) {
    this.periodosRepository = periodosRepository;
  }

  public execute({ anocomp, mescomp }: Request): Periodo {
    const periodo = this.periodosRepository.create({
      anocomp,
      mescomp,
    });

    return periodo;
  }
}

export default CreatePeriodoService;
