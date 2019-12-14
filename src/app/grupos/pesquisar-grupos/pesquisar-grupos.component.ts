import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  grupo = new Grupo();
  formulario: FormGroup;
  totalRegistros = 0;
  filtro = new GrupoFiltro();

  constructor(private service: GrupoService, private formbuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.CriarFormulario(new Grupo());
  }

  Consultar(pagina = 0): Promise<any> {
    this.filtro.pagina = pagina;

    return this.service.Consultar(this.filtro)
      .then(response => {
        this.totalRegistros = response.total;
        this.grupos = response.grupos.content;
      }).catch(erro => console.log(erro));
  }

  get editando() {
    return Boolean(this.formulario.get('id').value);
  }

  CriarFormulario(grupo: Grupo) {
    this.formulario = this.formbuilder.group({
      id: [null, grupo.id],
      abreviacao: [null, grupo.abreviacao],
      nomegrupo: [null, grupo.nomegrupo]
    });
  }

  Salvar() {

    try {
      if (this.editando) {
        this.AtualizarGrupo();
      } else {
        this.formulario.patchValue(this.AdicionarGrupo());
      }
    } catch (error) {
      console.log('erro ao salvar');
    }

    this.CriarFormulario(new Grupo());

  }

  AdicionarGrupo() {
    return this.service.Adicionar(this.formulario.value);
  }

  AtualizarGrupo() {
    this.service.Atualizar(this.formulario.value)
      .then(grupo => grupo);
  }

  BuscarPeloId(grupo: Grupo) {
    this.service.BuscarPorId(grupo.id).then(response => { this.formulario.patchValue(response); });
    this.Consultar();
  }

  Excluir(grupo: Grupo) {
    try {
      this.service.Remover(grupo.id);
      alert(grupo.abreviacao + ' foi excluído');
      this.route.navigate(['/produtos']);
    } catch (error) {
      console.log('erro ao excluir');
    }

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.Consultar(pagina);
  }
}











