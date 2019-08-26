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
import { ogg } from './user-objects';
@Component({
  selector: 'app-user-objects',
  templateUrl: './user-objects.component.html',
  styleUrls: ['./user-objects.component.css']
})
export class UserObjectsComponent implements OnInit {
@Input() vOgg: Oggetto[];
@Input() uLog: bacheca;
  vettOggUtente: ogg[];
  constructor() { }

  ngOnInit() {
  }
  visuaUO(){
    this.vettOggUtente = new Array();
    for(let i = 0; i < this.vOgg.length; i++){
      if(this.uLog.nome == this.vOgg[i].nome){
        if(this.uLog.cognome == this.vOgg[i].cognome){
          this.vettOggUtente.push(new ogg(this.vOgg[i].nome, this.vOgg[i].cognome, this.vOgg[i].oggetto));

        }
      }
      console.log(this.vettOggUtente);
    }

  }

}
