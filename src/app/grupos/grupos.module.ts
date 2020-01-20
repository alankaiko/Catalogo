import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarGruposComponent } from './pesquisar-grupos/pesquisar-grupos.component';
import {TableModule} from 'primeng/components/table/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastroGruposComponent } from './cadastro-grupos/cadastro-grupos.component';
import {FieldsetModule} from 'primeng/components/fieldset/fieldset';


@NgModule({
  declarations: [PesquisarGruposComponent, CadastroGruposComponent],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TooltipModule,
    RouterModule,
    FieldsetModule
  ],
  exports: [
    PesquisarGruposComponent
  ]
})
export class GruposModule { }
