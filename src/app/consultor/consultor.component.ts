import { Component, OnInit } from '@angular/core';
import { ConsultorService } from 'app/server/consultor.service';
import { Consultor } from 'app/models/consultor';

@Component({
  selector: 'app-consultor',
  templateUrl: './consultor.component.html',
  styleUrls: ['./consultor.component.css']
})
export class ConsultorComponent implements OnInit {

  consultores: Consultor[];

  constructor(private consultorService: ConsultorService) { }

  ngOnInit(): void {
    this.getConsultores();
  }

  getConsultores(): void{
    this.consultorService.getConsultores().subscribe(
      consultores => this.consultores = consultores
    )
  }

}
