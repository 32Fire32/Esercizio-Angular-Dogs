import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MySqlService } from 'src/app/services/my-sql.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

homeform: FormGroup

cani: any

constructor(private mySql: MySqlService){}

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nomeCane: new FormControl('nome di default', Validators.required),
      emailCane: new FormControl('email@default.com',[Validators.required, Validators.email]),
      tipoCane: new FormControl(),
      descrCane: new FormControl('descrizione di default')
    })
  }

  onSubmit(){
    console.log(this.homeform)
  }



}
