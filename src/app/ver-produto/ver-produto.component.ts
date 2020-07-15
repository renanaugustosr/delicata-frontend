import { Component, OnInit } from '@angular/core';
import { Produto } from 'app/models/produto';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'app/server/produto.service';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {

  produtoSelecionado: Produto;
  _id = this.activatedRoute.snapshot.params._id;
  urlFoto = 'https://delicata-backend.herokuapp.com';

  constructor(private produtoService: ProdutoService, private meta: Meta, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    
   // this.produtoSelecionado = this.produtoService.getProduto(this._id);
    this.produtoService.getProduto(this._id).subscribe(produto => {
      this.produtoSelecionado = produto;
      this.configuracoes();
    });
    
  }

  configuracoes(){
    console.log(this.produtoSelecionado);

    this.meta.addTags([
      { property: 'og:site_name', content: 'Delicata' },
      { property: 'og:title', content: 'Delicata Pijamas' },
      { property: 'og:description', content: 'Os melhores pijamos do Brasil' },
      { property: 'og:image', content: this.produtoSelecionado.pathFoto },
      { property: 'og:type', content: 'website' }
    ]);
  }
}