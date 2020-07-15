import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService } from '../server/produto.service';
import { Meta } from '@angular/platform-browser';
import { DataProdutoService } from 'app/server/data-produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Produto[];
  urlFoto= 'https://delicata-backend.herokuapp.com';

  constructor(private produtoService: ProdutoService, private produtoSelecionado: DataProdutoService, private router: Router) {
  }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService.getProdutos().subscribe(produto => this.produtos = produto);
    
  }

  verDetalhesProduto(produto: Produto){
    //this.produtoSelecionado.setProduto(produto);
    this.router.navigateByUrl("/verProduto/" + produto._id);
  }

}
