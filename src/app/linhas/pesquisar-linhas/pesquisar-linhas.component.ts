import { LazyLoadEvent } from 'primeng/api';
import { Linha } from './../../core/model';
import { Router } from '@angular/router';
import { LinhaFiltro, LinhaService } from './../../zservicos/linha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar-linhas',
  templateUrl: './pesquisar-linhas.component.html',
  styleUrls: ['./pesquisar-linhas.component.css']
})
export class PesquisarLinhasComponent implements OnInit {
  linhas = [];
  totalRegistros = 0;
  filtro = new LinhaFiltro();

  constructor(private service: LinhaService, private route: Router) { }

  ngOnInit() {}

  Consultar(pagina = 0): Promise<any> {
    this.filtro.pagina = pagina;

    return this.service.Consultar(this.filtro)
      .then(response => {
        this.totalRegistros = response.total;
        this.linhas = response.linhas.content;
      }).catch(erro => console.log(erro));
  }

  Excluir(linha: Linha) {
    try {
      this.service.Remover(linha.id)
        .then(() => {
          this.route.navigate(['/produtos']);
          alert(linha.nomelinha + ' foi excluído');
        });

    } catch (error) {
      console.log('erro ao excluir');
    }
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.Consultar(pagina);
  }
}











