import Formapgto from '../models/Formapgto';
import FormapgtosRepository from '../repositories/Formapgtos.repository';

interface Request {
  descricao: string;
  tipo: string;
  diaVencimento: string;
  diaFatura: string;
  saldo: number;
}

class CreateFormapgtoService {
  private formapgtosRepository: FormapgtosRepository;

  constructor(formapgtosRepository: FormapgtosRepository) {
    this.formapgtosRepository = formapgtosRepository;
  }

  public execute({
    descricao,
    tipo,
    diaVencimento,
    diaFatura,
    saldo,
  }: Request): Formapgto {
    const formapgto = this.formapgtosRepository.create({
      descricao,
      tipo,
      diaVencimento,
      diaFatura,
      saldo,
    });

    return formapgto;
  }
}

export default CreateFormapgtoService;
