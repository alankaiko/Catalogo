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
import {InputSwitchModule} from 'primeng/components/inputswitch/inputswitch';
import {ToolbarModule} from 'primeng/components/toolbar/toolbar';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {CardModule} from 'primeng/components/card/card';
import { AppRoutingModule } from './../app-routing.module';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import {DataViewModule} from 'primeng/components/dataview/dataview';
import {PanelModule} from 'primeng/components/panel/panel';
import {LightboxModule} from 'primeng/components/lightbox/lightbox';



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
    RouterModule,
    InputSwitchModule,
    ToolbarModule,
    CalendarModule,
    CommonModule,
    CardModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    FormsModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    DataViewModule,
    PanelModule,
    LightboxModule
  ],
  exports: [
    CadastroProdutoComponent
  ]
})
export class CadastroModule { }
