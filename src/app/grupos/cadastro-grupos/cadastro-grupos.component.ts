import { Router, ActivatedRoute } from '@angular/router';
import { GrupoService } from './../../zservicos/grupo.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Grupo } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-grupos',
  templateUrl: './cadastro-grupos.component.html',
  styleUrls: ['./cadastro-grupos.component.css']
})
export class CadastroGruposComponent implements OnInit {
  formulario: FormGroup;

  constructor(private service: GrupoService,
              private rota: ActivatedRoute,
              private formbuilder: FormBuilder,
              private route: Router) {
  }

  ngOnInit() {
    this.CriarFormulario(new Grupo());
    const codgrupo = this.rota.snapshot.params.cod;

    if (codgrupo) {
      this.CarregarGrupo(codgrupo);
    }
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

  CarregarGrupo(id: number) {
    this.service.BuscarPorId(id).then(grupo => this.formulario.patchValue(grupo));
  }

  Salvar() {
    if (this.editando) {
      this.AtualizarGrupo();
      this.route.navigate(['/grupos']);
    } else {
      this.formulario.patchValue(this.AdicionarGrupo());
      this.route.navigate(['/grupo/novo']);
    }
    this.CriarFormulario(new Grupo());
  }

  AdicionarGrupo() {
    return this.service.Adicionar(this.formulario.value)
      .then(response => {
        this.route.navigate(['/grupos']);
        response = response;
      });
  }

  AtualizarGrupo() {
    this.service.Atualizar(this.formulario.value)
      .then(grupo => {
        this.formulario.patchValue(grupo);
        this.route.navigate(['/grupos']);
      });
  }

}
