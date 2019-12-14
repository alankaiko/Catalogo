import { LinhaService } from './../../zservicos/linha.service';
import { GrupoService } from './../../zservicos/grupo.service';
import { Imagem, Produto, Grupo, Linha } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/zservicos/produtos.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  linhas = [{label: 'Selecione', value: null}];
  grupos = [{label: 'Selecione', value: null}];
  formulario: FormGroup;
  imagem: Imagem;
  formularioarray: FormArray;
  uploadEmAndamento = false;
  listaCaminhoImagem = [];
  public arquivoselecionado;


  constructor(private service: ProdutosService,
              private formbuilder: FormBuilder,
              private rota: ActivatedRoute,
              private servicegrupo: GrupoService,
              private servicelinha: LinhaService,
              private route: Router) {
  }


  ngOnInit() {
    this.CriarFormulario(new Produto());
    const codigoproduto = this.rota.snapshot.params.cod;

    if (codigoproduto) {
      this.CarregarProdutos(codigoproduto);
    }

    this.BuscarGrupos();
    this.BuscarLinhas();
  }

  BuscarGrupos() {
    return this.servicegrupo.Listar()
    .then(grupos => {
      this.grupos = grupos
        .map(g => ({ label: g.abreviacao, value: g.id }));
    });
  }

  BuscarLinhas() {
    return this.servicelinha.Listar()
    .then(linhas => {
      this.linhas = linhas
        .map(a => ({ label: a.nomelinha, value: a.id }));
    });
  }


  caractereespecial(event) {
    let k;
    k = event.charCode;
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || (k >= 48 && k <= 57) || k === 45 || k === 47);
  }

  CaracterPeso(event) {
    let k;
    k = event.charCode;
    return (( k === 46) ||  (k >= 48 && k <= 57));
  }

  get editando() {
    return Boolean(this.formulario.get('id').value);
  }

  CriarFormulario(produto: Produto) {
    this.formulario = this.formbuilder.group({
      id: [produto.id],
      codigo: [null, produto.codigo],
      descricao: [null, produto.descricao],
      descricaocomplementar: [null, produto.descricaocomplementar],
      imagem: [],
      grupo: this.formbuilder.group({
        id: [Validators.required]
      }),
      linha: this.formbuilder.group({
        id: [Validators.required],
      }),
      peso: [null, produto.peso]
    });
  }


  CarregarProdutos(id: number) {
   // this.service.BuscarPorId(id).then(produto => this.formulario.patchValue(produto));
    this.service.BuscarPorId(id).then(response => {
      const produto = response as Produto;
      if (produto.grupo === null) {
        delete produto.grupo;
      }

      if (produto.linha === null) {
        delete produto.linha;
      }
      this.formulario.patchValue(produto);
      produto.grupo = new Grupo();
      produto.linha = new Linha();
     // return produto;
    });
  }

  ValidaCamposNulos() {
    this.formulario.get('grupo').dirty ? ' ' : this.formulario.removeControl('grupo');
    this.formulario.get('linha').dirty ? ' ' : this.formulario.removeControl('linha');
  }

  Salvar() {
    this.ValidaCamposNulos();

    if (this.editando) {
      this.AtualizarProduto();
      this.route.navigate(['/produtos']);
    } else {
      this.formulario.patchValue(this.AdicionarProduto());
      this.route.navigate(['/produtos/novo']);
    }
    this.GravarImagem();

    this.CriarFormulario(new Produto());
  }

  AdicionarProduto() {
    return this.service.Adicionar(this.formulario.value);
  }

  AtualizarProduto() {
    this.service.Atualizar(this.formulario.value)
      .then(produto => {this.formulario.patchValue(produto); });
  }

  inputFileChange(event) {
    this.arquivoselecionado = event.target.files[0];
  }

  GravarImagem() {
    const uploadedFiles = new FormData();
    uploadedFiles.append('foto', this.arquivoselecionado, this.formulario.value[ 'codigo' ] + '.jpeg');
    const img = {
      nome: this.formulario.value['codigo'] + '.jpeg'
    };

   // copyFile(uploadedFiles, teste);
   // this.formulario.controls[ 'imagem' ].patchValue(img);
    this.service.urlUploadAnexo(uploadedFiles);
  }

}
