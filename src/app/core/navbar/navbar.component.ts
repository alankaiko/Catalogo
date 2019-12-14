import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

    ngOnInit() {
      this.items = [
        {
          label: 'Catálogo', routerLink: ['produtos']
        },
        {
          label: 'Novo Produto', routerLink: ['produtos/novo']
        },
        {
          label: 'Grupo', routerLink: ['grupos']
        },
        {
          label: 'Linha', routerLink: ['linhas']
        }
      ];
    }



}
