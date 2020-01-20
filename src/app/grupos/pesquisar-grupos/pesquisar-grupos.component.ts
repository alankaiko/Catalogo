import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { GrupoService, GrupoFiltro } from './../../zservicos/grupo.service';
import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/core/model';

@Component({
  selector: 'app-pesquisar-grupos',
  templateUrl: './pesquisar-grupos.component.html',
  styleUrls: ['./pesquisar-grupos.component.css']
})
export class PesquisarGruposComponent implements OnInit {
  grupos = [];
  totalRegistros = 0;
  filtro = new GrupoFiltro();

  constructor(private service: GrupoService, private route: Router) { }

  ngOnInit() {}

  Consultar(pagina = 0): Promise<any> {
    this.filtro.pagina = pagina;

    return this.service.Consultar(this.filtro)
      .then(response => {
        this.totalRegistros = response.total;
        this.grupos = response.grupos.content;
      }).catch(erro => console.log(erro));
  }

  Excluir(grupo: Grupo) {
    try {
      this.service.Remover(grupo.id)
        .then(() => {
          this.route.navigate(['/produtos']);
          alert(grupo.nomegrupo + ' foi excluído');
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











