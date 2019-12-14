import { ResumoProduto } from './../../core/model';
import { Component, OnInit, Input } from '@angular/core';
import { ProdutosService } from 'src/app/zservicos/produtos.service';

@Component({
  selector: 'app-card-produtos',
  templateUrl: './card-produtos.component.html',
  styleUrls: ['./card-produtos.component.css']
})
export class CardProdutosComponent implements OnInit {
  imagemToShow: any;
  imagelightbox: any;

  // tslint:disable-next-line: no-input-rename
  @Input('prod') produto: ResumoProduto;

  constructor(private service: ProdutosService) { }

  ngOnInit() {
    this.getIconeFromService();
  }

  createIconeFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imagemToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getIconeFromService() {
    this.service.PegarIcone(this.produto.codigo).subscribe(data => {
      this.createIconeFromBlob(data);
    }, error => {
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imagelightbox = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.service.PegarImagem(this.produto.codigo).subscribe(data => {
      this.createImageFromBlob(data);
    }, error => {
      console.log(error);
    });
  }
}
