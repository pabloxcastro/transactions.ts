import { uuid } from 'uuidv4';

class Periodo {
  id: string;

  anocomp: string;

  mescomp: string;

  constructor({ anocomp, mescomp }: Omit<Periodo, 'id'>) {
    this.id = uuid();
    this.anocomp = anocomp;
    this.mescomp = mescomp;
  }
}

export default Periodo;
