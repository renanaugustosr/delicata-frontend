import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class DataProdutoService {
  private produto: Produto;
  constructor() { }

  setProduto(produto: Produto) {
    this.produto = produto;
  }
  getProduto(): Produto {
    return this.produto;
  }
}
