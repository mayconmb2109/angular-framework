import { Injectable } from '@angular/core';
import { Livro } from './livro'; // Importa a classe Livro

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 2'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 3'] }
  ];

  constructor() { }

  // Método para retornar todos os livros
  obterLivros(): Livro[] {
    return this.livros;
  }

  // Método para incluir um novo livro
  incluir(novoLivro: Livro): void {
    // Encontra o maior código atualmente usado e incrementa em 1
    const novoCodigo = Math.max(...this.livros.map(livro => livro.codigo)) + 1;
    novoLivro.codigo = novoCodigo;
    this.livros.push(novoLivro);
  }

  // Método para excluir um livro com base no código
  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}