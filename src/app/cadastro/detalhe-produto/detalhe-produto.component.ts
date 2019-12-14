import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../../zservicos/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  produto = new Produto();
  imagemToShow: any;
  imagelightbox: any;

  constructor(private service: ProdutosService, private rota: ActivatedRoute) { }

  ngOnInit() {
    const codigoproduto = this.rota.snapshot.params.cod;
    this.CarregarProdutos(codigoproduto);
  }

  CarregarProdutos(id: number) {
    this.service.BuscarPorId(id).then(
      response => {
        this.produto = response as Produto;
        this.getImageFromService(this.produto.codigo);
    } );
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

  getImageFromService(codigo: string) {
    this.service.DetalheImagem(codigo).subscribe(data => {
      this.createImageFromBlob(data);
    }, error => {
      console.log(error);
    });
  }
}
