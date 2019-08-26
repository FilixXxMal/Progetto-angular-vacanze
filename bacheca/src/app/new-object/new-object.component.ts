import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bacheca, loginDati } from '../bacheca';
import { bacheca2 } from '../bacheca';
import { commenti } from '../bacheca';
import { risposte } from '../bacheca';
import { Utenti } from '../mock-bacheca';
import { Dati } from '../mock-bacheca';
import { CommentoUtente } from '../mock-bacheca';
import { Oggetto, oggetto1 } from './new-object';
import { VettoreDiOggetti } from './mock-new-object';
@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {
@Input() login: commenti[];
@Input() utenteLog: bacheca;
vettObject: Oggetto[] = VettoreDiOggetti;
myForm4: FormGroup;
inputOggetti: oggetto1;
  constructor(fb: FormBuilder) {
    this.myForm4 = fb.group({
      'oggetto': ['',Validators.required],
      'descrizione': ['',Validators.required],
      'prezzo': ['',Validators.required],
      'link': ['',Validators.required]
    })
   }

  ngOnInit() {
  }
  onSubmitOggetti(){
    this.inputOggetti = new oggetto1();
    this.inputOggetti.oggetto = this.myForm4.controls['oggetto'].value;
    this.inputOggetti.descrizione = this.myForm4.controls['descrizione'].value;
    this.inputOggetti.prezzo = this.myForm4.controls['prezzo'].value;
    this.inputOggetti.link = this.myForm4.controls['link'].value;
    this.vettObject.push(new Oggetto(this.utenteLog.nome,this.utenteLog.cognome,this.inputOggetti.oggetto,this.inputOggetti.descrizione,this.inputOggetti.prezzo,this.inputOggetti.link));
    console.log(this.vettObject);
  }

}
