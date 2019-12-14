import { ProdutoFiltro, ProdutosService } from './../../zservicos/produtos.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-produtos-tela',
  templateUrl: './produtos-tela.component.html',
  styleUrls: ['./produtos-tela.component.css']
})
export class ProdutosTelaComponent implements OnInit {
  totalRegistros = 0;
  filtro = new ProdutoFiltro();
  produtos = [];
  image: any;
  teste: any;
  imagems = new Image();
  imageToShow: any;

  constructor(private service: ProdutosService) { }

  ngOnInit() {
  }

  Consultar(pagina = 0) {
    this.filtro.pagina = pagina;

    return this.service.Consultar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.produtos = resultado.produtos.content;
      }).catch(erro => console.log(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.Consultar(pagina);
  }

 // createImageFromBlob(image: Blob) {
 //   const reader = new FileReader();
 //   reader.addEventListener('load', () => {
 //       this.imageToShow = reader.result;
 //   }, false);

 //   if (image) {
 //     reader.readAsDataURL(image);
 //   }
 // }

//  getImageFromService() {
//    this.service.PegarImagem('azureus.jpeg').subscribe(data => {
//      this.createImageFromBlob(data);
//    }, error => {
//      console.log(error);
//    });
//  }

}
