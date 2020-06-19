import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProdutoService } from '../server/produto.service'

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  checkoutForm: FormGroup;
  error: string;
  uploadResponse = { status: '', message: '', filePath: '' };
  constructor(private produtoService: ProdutoService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      nome: [''],
      quantidade: [''],
      valorUnitario: [''],
      dataCompra: [''],
      foto: [''],
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('nome', this.checkoutForm.get('nome').value);
    formData.append('quantidade', this.checkoutForm.get('quantidade').value);
    formData.append('valorUnitario', this.checkoutForm.get('valorUnitario').value);
    formData.append('dataCompra', this.checkoutForm.get('dataCompra').value);
    formData.append('foto', this.checkoutForm.get('foto').value);

    this.produtoService.setProduto(formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err);
  }

  uploadFile(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.checkoutForm.get('foto').setValue(file);
    }
  }

}
