import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/components/card/card';
import { CardProdutosComponent } from './card-produtos/card-produtos.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { FormsModule } from '@angular/forms';
import { ProdutosTelaComponent } from './produtos-tela/produtos-tela.component';
import {DataViewModule} from 'primeng/components/dataview/dataview';
import {PanelModule} from 'primeng/components/panel/panel';
import {LightboxModule} from 'primeng/components/lightbox/lightbox';



@NgModule({
  declarations: [CardProdutosComponent, ProdutosTelaComponent],
  imports: [
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
    CardProdutosComponent,
    ProdutosTelaComponent
  ]
})
export class CatalogoModule { }
