import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroLinhasComponent } from './cadastro-linhas/cadastro-linhas.component';
import { PesquisarLinhasComponent } from './pesquisar-linhas/pesquisar-linhas.component';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/components/table/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {FieldsetModule} from 'primeng/components/fieldset/fieldset';



@NgModule({
  declarations: [CadastroLinhasComponent, PesquisarLinhasComponent],
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
    PesquisarLinhasComponent
  ]
})
export class LinhasModule { }
