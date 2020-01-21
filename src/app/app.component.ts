import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teste Catalogo';

  constructor(private rota: Router) {}

  exibindoNavbar() {
    return this.rota.url !== '/inicial';
  }
}
