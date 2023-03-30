import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ServizioProvaService } from '../../services/servizio-prova.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
// export class CardComponent implements OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked, AfterContentInit, DoCheck,OnDestroy {
export class CardComponent implements OnInit {

@Input() data : any;
@Input() style : any;
@Input() index : any;
@Output() sendData = new EventEmitter<string>();
@Output() sendPref = new EventEmitter<string>();


dogname = {}

preferiti:string[] = []

clicked = false

clear = 'svuota'

longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
originally bred for hunting.`;

cani = [
  { nome: "roger", razza: 'golden', descrizione:"Cane da passeggio", img:"https://www.ilverdemondo.it/public/blog/thumbs/shiba-inu-carattere-e-alimentazione-del-cane-giapponese-it-000.jpg" },
  { nome: "rogerSecondo", razza: 'golden', descrizione:"Cane da passeggio di seconda generazione", img:"https://material.angular.io/assets/img/examples/shiba2.jpg" }
]

isDisabled = false
img = ""
img1 = "https://www.ilverdemondo.it/public/blog/thumbs/shiba-inu-carattere-e-alimentazione-del-cane-giapponese-it-000.jpg"
img2 = "https://material.angular.io/assets/img/examples/shiba2.jpg"

constructor(){
}
  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit");
  // }
  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked");
  // }
  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked");
  // }
  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit");
  // }
  // ngDoCheck(): void {
  //   console.log("ngDoCheck");
  // }
  // ngOnDestroy(): void {
  //   console.log("ngOnDestroy");
  // }

ngOnInit(): void {
  // console.log("ngOnInit")
  // let counter = 0
  // setInterval(()=>{
  //   this.isDisabled = !this.isDisabled
  //   if(counter % 2 == 0){
  //     this.img = this.img1
  //   } else {
  //     this.img = this.img2
  //   }
  //   counter ++
  // },2000)
}
send(obj: string){
  this.preferiti.push(obj)
  this.sendData.emit(obj)
  this.clicked = true
}

notInterested(obj2: string){
  this.clicked = false
  this.sendPref.emit(obj2)
}

}
