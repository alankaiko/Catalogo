import { Linha } from './../../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { LinhaService } from './../../zservicos/linha.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-linhas',
  templateUrl: './cadastro-linhas.component.html',
  styleUrls: ['./cadastro-linhas.component.css']
})
export class CadastroLinhasComponent implements OnInit {
  formulario: FormGroup;

  constructor(private service: LinhaService,
              private rota: ActivatedRoute,
              private formbuilder: FormBuilder,
              private route: Router) {
  }

  ngOnInit() {
    this.CriarFormulario(new Linha());
    const codlinha = this.rota.snapshot.params.cod;

    if (codlinha) {
      this.CarregarLinha(codlinha);
    }
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

  CarregarLinha(id: number) {
    this.service.BuscarPorId(id).then(linha => this.formulario.patchValue(linha));
  }

  Salvar() {
    if (this.editando) {
      this.AtualizarLinha();
    } else {
      this.formulario.patchValue(this.AdicionarLinha());
    }
    this.CriarFormulario(new Linha());
  }

  AdicionarLinha() {
    return this.service.Adicionar(this.formulario.value)
      .then(response => {
        this.route.navigate(['/linhas']);
        response = response;
      });
  }

  AtualizarLinha() {
    this.service.Atualizar(this.formulario.value)
      .then(linha => {
        this.formulario.patchValue(linha);
        this.route.navigate(['/linhas']);
      });
  }

}
