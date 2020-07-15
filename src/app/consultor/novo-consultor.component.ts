import { Component, OnInit } from '@angular/core';
import { ConsultorService } from 'app/server/consultor.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-consultor',
  templateUrl: './novo-consultor.component.html',
  styleUrls: ['./novo-consultor.component.css']
})
export class NovoConsultorComponent implements OnInit {

  checkoutForm: FormGroup;
  error: string;
  constructor(private consultorService: ConsultorService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      nome: [''],
      telefone: ['']
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('nome', this.checkoutForm.get('nome').value);
    formData.append('telefone', this.checkoutForm.get('telefone').value);

    this.consultorService.setConsultor(formData).subscribe(
      (err) => this.error = err);
  }

}
