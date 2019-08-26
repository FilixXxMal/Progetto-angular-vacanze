export class oggetto1{
  oggetto: string;
  descrizione: string;
  prezzo: number;
  link: string;
}
export class Oggetto{
  nome: string;
  cognome: string;
  oggetto: string;
  descrizione : string;
  prezzo: number;
  link: string;
  constructor(n: string, c: string,o: string,d: string, p: number, l: string ){
    this.nome = n;
    this.cognome = c;
    this.oggetto = o;
    this.descrizione = d;
    this.prezzo = p;
    this.link = l;
  }

}
