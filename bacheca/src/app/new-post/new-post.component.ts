import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bacheca, loginDati } from '../bacheca';
import { bacheca2 } from '../bacheca';
import { commenti } from '../bacheca';
import { risposte } from '../bacheca';
import { Utenti } from '../mock-bacheca';
import { Dati } from '../mock-bacheca';
import { CommentoUtente } from '../mock-bacheca';
import { Oggetto, oggetto1 } from '../new-object/new-object';
import { VettoreDiOggetti } from '../new-object/mock-new-object';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
@Input() ogg: Oggetto[];
@Input() uLog1: bacheca;
  objects = VettoreDiOggetti;
  selectedOgg: Oggetto;
  vettVisua: Oggetto[];
  y: number;
  constructor() { }

  ngOnInit() {
  }
  visuaOggetti(oggetto: Oggetto){
    this.y = 0;
    this.vettVisua = new Array();
    this.selectedOgg = oggetto;
    for(let i = 0; i < this.ogg.length; i++){
      if(this.selectedOgg.descrizione == this.ogg[i].descrizione){
        this.vettVisua.push(new Oggetto(this.ogg[i].nome, this.ogg[i].cognome,this.ogg[i].oggetto, this.ogg[i].descrizione, this.ogg[i].prezzo, this.ogg[i].link));
        console.log(this.vettVisua);
      }
    }
  }

}
