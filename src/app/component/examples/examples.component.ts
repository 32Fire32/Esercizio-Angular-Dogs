import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServizioProvaService } from '../../services/servizio-prova.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit, AfterViewInit {

  constructor(public servizioProva: ServizioProvaService){
  }

  colore = ''

  title = 'test';

  today = Date.now()

  @ViewChild('inputInfo') valoreInput!: ElementRef<HTMLInputElement>

  preferito:string[] = []

  numero = 4

  color = 'green'

  onClick(e: Event){
    this.title = "Ciao a tutti"
  }
  // onInput(e: Event){
  //   console.log(this.title)
  //  this.title = ((<HTMLInputElement>e.target).value)
  // }

  isVisible(){
    if(this.title == "test"){
      return true
    } else {
      return false
    }
  }

  riceviDati(value: string){
      this.preferito.push(value)
  }

  riceviPref(value2: string)
  {
      console.log(value2)
      this.preferito.forEach((e, i) => {
        if(e == value2)
        this.preferito.splice(i, 1)
      });
  }

  ngOnInit(): void {
    // console.log(this.servizioProva)
    // console.log('ngOnInit')
    // console.log(this.valoreInput)

  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit')
    // console.log(this.valoreInput)
  }

  sulClick(){
    // console.log(this.valoreInput.nativeElement.value)
  }

  cambiaColoreEvidenziatore(e: string){
    this.colore = e
  }
}

