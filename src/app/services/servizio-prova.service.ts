import { Injectable } from '@angular/core';
import { MySqlService } from './my-sql.service';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  constructor(private mySql: MySqlService) { }

  // cani = [
  //   { nome: "Roger", razza: 'golden', descrizione:"Cane da passeggio", img:"https://www.ilverdemondo.it/public/blog/thumbs/shiba-inu-carattere-e-alimentazione-del-cane-giapponese-it-000.jpg" , isAvaiable: true, isRare: false},
  //   { nome: "RogerSecondo", razza: 'golden', descrizione:"Cane da passeggio di seconda generazione", img:"https://material.angular.io/assets/img/examples/shiba2.jpg",  isAvaiable: false, isRare: true },
  //   { nome: "Lucky", razza: 'bastardino', descrizione:"Cane da compagnia molto apprezzato", img:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Cane.jpg" , isAvaiable: true, isRare: false},
  //   { nome: "Lessie", razza: 'collie', descrizione:"Cane attore", img:"https://static.independent.co.uk/2023/02/26/12/ed17b0e7b58c4349888cb3b64fff5471Y29udGVudHNlYXJjaGFwaSwxNjc3NTAwMTU1-2.71149382.jpg",  isAvaiable: false, isRare: true },
  //   { nome: "Chicco", razza: 'bull terrie', descrizione:"Cane da amare e da compagnia", img:"https://cdn11.bigcommerce.com/s-4sdjwgussa/images/stencil/original/y/bullterrier__97028.original.jpg" , isAvaiable: true, isRare: false},
  //   { nome: "Chewie", razza: 'chiwawa', descrizione:"Cane mignon", img:"https://www.shutterstock.com/image-photo/close-up-young-dog-portrait-260nw-136126985.jpg",  isAvaiable: true, isRare: false }
  // ]

  cani: any

  getCane(index: number){
    return this.cani[index]
  }

  getCani(){
    this.mySql.getDogs('https://esericizioangularcani-default-rtdb.europe-west1.firebasedatabase.app/dogs.json').subscribe((data: any)=>{
      this.cani = Object.keys(data).map((key)=>{return data[key]})
      // console.log(this.cani)
    })
  }

  ngOnInit():void {

}

}
