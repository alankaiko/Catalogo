import { CadastroGruposComponent } from './grupos/cadastro-grupos/cadastro-grupos.component';
import { CadastroLinhasComponent } from './linhas/cadastro-linhas/cadastro-linhas.component';
import { LinhasModule } from './linhas/linhas.module';
import { DetalheProdutoComponent } from './cadastro/detalhe-produto/detalhe-produto.component';
import { GruposModule } from './grupos/grupos.module';
import { PesquisarGruposComponent } from './grupos/pesquisar-grupos/pesquisar-grupos.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { CoreModule } from './core/core.module';
import { ProdutosTelaComponent } from './catalogo/produtos-tela/produtos-tela.component';
import { CadastroProdutoComponent } from './cadastro/cadastro-produto/cadastro-produto.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/components/table/table';
import { PesquisarLinhasComponent } from './linhas/pesquisar-linhas/pesquisar-linhas.component';



const rotas: Routes = [
  { path: 'produtos', component: ProdutosTelaComponent },
  { path: 'produtos/novo', component: CadastroProdutoComponent },
  { path: 'produtos/:cod', component: CadastroProdutoComponent },
  { path: 'grupos', component: PesquisarGruposComponent },
  { path: 'grupo/novo', component: CadastroGruposComponent },
  { path: 'grupo/:cod', component: CadastroGruposComponent },
  { path: 'detalhes/:cod', component: DetalheProdutoComponent },
  { path: 'linhas', component: PesquisarLinhasComponent },
  { path: 'linha/novo', component: CadastroLinhasComponent },
  { path: 'linha/:cod', component: CadastroLinhasComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    CoreModule,
    FormsModule,
    CatalogoModule,
    CadastroModule,
    GruposModule,
    RouterModule.forRoot(rotas),
    LinhasModule
  ],
  exports: [
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
