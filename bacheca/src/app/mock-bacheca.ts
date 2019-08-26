import { bacheca } from './bacheca';
import {loginDati} from './bacheca';
import {commenti} from './bacheca';

export const Utenti: bacheca[] = [
  { nome: 'Filippo',cognome: 'Maldifassi',  email: 'maldifassi.filippo.maria@iisgalvanimi.edu.it', password: 'qwerty12345**', numeri: '3334860741'},
  { nome: 'Riccardo',cognome: 'Piarriello',  email: 'piarriello.riccardo@gmlai.it', password: 'asdfgh98765', numeri: '3317690009'}

];
export const Dati: loginDati[] = [
  { nomeLogin: 'Filippo',cognomeLogin: 'Maldifassi'},
  { nomeLogin: 'Riccardo',cognomeLogin: 'Piarriello'}
];
export const CommentoUtente: commenti[] = [
  { commento: 'Vedo occhiali da sole di marca', nome: 'Filippo', cognome: 'Maldifassi',
  vettRisposte:[
    {risposta: "li compro io", nome: "Riccardo", cognome: "Piarriello"}
  ]},
  { commento: 'Cerco macchina Ferrari', nome: 'Riccardo', cognome: 'Piarriello', vettRisposte:[
    {risposta: "te la posso vendere io", nome: "Filippo", cognome: "Maldifassi"}
  ]}
];
