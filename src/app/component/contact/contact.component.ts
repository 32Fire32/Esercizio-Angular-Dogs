import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MySqlService } from 'src/app/services/my-sql.service';
import { ServizioProvaService } from 'src/app/services/servizio-prova.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private servizioProva: ServizioProvaService, private mySql: MySqlService){

  }

  cani: any

ngOnInit():void {
  this.mySql.getDogs('https://esericizioangularcani-default-rtdb.europe-west1.firebasedatabase.app/dogs.json').subscribe((data: any)=>{
      this.cani = Object.keys(data).map((key)=>{return data[key]})
      // console.log(this.cani)
    })
}

}
