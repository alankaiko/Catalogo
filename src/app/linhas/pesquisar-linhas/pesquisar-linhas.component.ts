import { Linha } from './../../core/model';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LinhaFiltro, LinhaService } from 'src/app/zservicos/linha.service';

@Component({
  selector: 'app-pesquisar-linhas',
  templateUrl: './pesquisar-linhas.component.html',
  styleUrls: ['./pesquisar-linhas.component.css']
})
export class PesquisarLinhasComponent implements OnInit {
  linhas = [];
  linha = new Linha();
  formulario: FormGroup;
  totalRegistros = 0;
  filtro = new LinhaFiltro();

  constructor(private service: LinhaService, private formbuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.CriarFormulario(new Linha());
  }

  Consultar(pagina = 0): Promise<any> {
    this.filtro.pagina = pagina;

    return this.service.Consultar(this.filtro)
      .then(response => {
        this.totalRegistros = response.total;
        this.linhas = response.linhas.content;
      }).catch(erro => console.log(erro));
  }

  get editando() {
    return Boolean(this.formulario.get('id').value);
  }

  CriarFormulario(linha: Linha) {
    this.formulario = this.formbuilder.group({
      id: [null, linha.id],
      nomelinha: [null, linha.nomelinha],
      descricao: [null, linha.descricao],
      cor: [null, linha.cor]
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

    this.CriarFormulario(new Linha());

  }

  AdicionarGrupo() {
    return this.service.Adicionar(this.formulario.value);
  }

  AtualizarGrupo() {
    this.service.Atualizar(this.formulario.value).then(linha => linha);
  }

  BuscarPeloId(linha: Linha) {
    this.service.BuscarPorId(linha.id).then(response => { this.formulario.patchValue(response); });
    this.Consultar();
  }

  Excluir(linha: Linha) {
    try {
      this.service.Remover(linha.id);
      alert(linha.nomelinha + ' foi excluído');
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











