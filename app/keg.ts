export class Keg {
  public empty: boolean = false;
  public pints: number = 124;
  constructor(public type: string, public price: number, public id: number) {

  }
}
