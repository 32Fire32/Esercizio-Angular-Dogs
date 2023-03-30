import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from 'src/app/services/servizio-prova.service';

@Component({
  selector: 'app-contact-child',
  templateUrl: './contact-child.component.html',
  styleUrls: ['./contact-child.component.scss']
})
export class ContactChildComponent implements OnInit{
  cane : any;
  id: number;

  constructor(private servizioProva: ServizioProvaService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id = +params.get('id')!
      this.cane = this.servizioProva.getCane(this.id)}
    )
  }


}
