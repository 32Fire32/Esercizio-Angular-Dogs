import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ServizioProvaService } from './services/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

constructor(private servizioProva: ServizioProvaService){}

cani: any

  ngOnInit(): void {
    // interval(2000).subscribe(numero =>{
    //   console.log(numero)
    // })

    //rifatto l'observable ma a mano
  //   new Observable(observer => {
  //     let count = 0
  //     setInterval(()=>{
  //       observer.next(count);
  //       count++
  //     },2000)
  //   }).subscribe(numero =>{
  //     console.log(numero)
  //   })
  // }

this.servizioProva.getCani();
console.log(this.cani)

}
}
