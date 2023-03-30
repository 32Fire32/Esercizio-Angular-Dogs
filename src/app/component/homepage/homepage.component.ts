import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval, Observable } from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import { MySqlService } from 'src/app/services/my-sql.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy{

homeForm: NgForm

sottoscrizione : any

constructor(private mySql: MySqlService){}


ngOnInit(): void {
  this.sottoscrizione = interval(2000).subscribe(numero =>{
    console.log(numero)
  })
}

ngOnDestroy(): void {
  this.sottoscrizione.unsubscribe()
}

onSubmit(form: NgForm){
  console.log(form)
  this.mySql.insertDog('https://esericizioangularcani-default-rtdb.europe-west1.firebasedatabase.app/dogs.json', { //manca username e password
    nome: form.value.nome,
    razza: form.value.razza,
    descrizione: form.value.descrizione,
    img: form.value.pic,
    isAvaiable: form.value.disponibile,
    isRare: form.value.rarità
  }).subscribe(data =>{
    console.log(data)
  })
}

}
