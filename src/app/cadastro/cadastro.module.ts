import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/components/fileupload/fileupload';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import { ProgressSpinnerModule } from 'primeng/components/progressspinner/progressspinner';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import {FieldsetModule} from 'primeng/components/fieldset/fieldset';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CadastroProdutoComponent, DetalheProdutoComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    FileUploadModule,
    BrowserModule,
    HttpClientModule,
    DropdownModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    FieldsetModule,
    RouterModule
  ],
  exports: [
    CadastroProdutoComponent
  ]
})
export class CadastroModule { }
