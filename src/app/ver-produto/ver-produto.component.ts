import { Component, OnInit } from '@angular/core';
import { DataProdutoService } from 'app/server/data-produto.service';
import { Produto } from 'app/models/produto';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {

  produtoSelecionado: Produto;
  urlFoto = 'https://delicata-backend.herokuapp.com';

  constructor(private dataProduto: DataProdutoService, private meta: Meta) {

  }

  ngOnInit(): void {
    this.produtoSelecionado = this.dataProduto.getProduto();

    this.meta.addTags([
      { property: 'og:site_name', content: 'Delicata' },
      { property: 'og:title', content: 'Delicata Pijamas' },
      { property: 'og:description', content: 'Os melhores pijamos do Brasil' },
      { property: 'og:image', content: this.produtoSelecionado.pathFoto },
      { property: 'og:type', content: 'website' }
    ]);
  }

}


