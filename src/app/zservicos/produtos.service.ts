import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Produto } from '../core/model';

export class ProdutoFiltro {
  codigo: string;
  referencia: string;
  descricao: string;
  descricacomplementar: string;
  pagina = 0;
  itensPorPagina = 16;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/produtos`;
  }

  Consultar(filtro: ProdutoFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.codigo) {
      params = params.append('codigo', filtro.codigo);
    }

    if (filtro.referencia) {
      params = params.append('referencia', filtro.referencia);
    }

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    if (filtro.descricacomplementar) {
      params = params.append('descricaocomplementar', filtro.descricacomplementar);
    }

    return this.http.get<any>(`${this.url}?resumo`, { params })
      .toPromise()
      .then(response => {
        const produtos = response;

        const resultado = {
          produtos,
          total: response.totalElements
        };

        return resultado;
      });
  }


  Adicionar(produto) {
    return this.http.post(`${this.url}`, produto).subscribe(response => response);
  }

  BuscarPorId(id: number): Promise<any> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => {
        const produto = response as Produto;
        return produto;
      });
  }

  Atualizar(produto: Produto): Promise<any> {
    return this.http.put(`${this.url}/${produto.id}`, produto)
      .toPromise()
      .then(response => {
        const produtoalterado = response as Produto;
        this.ConverterStringParaData([produto]);
        return produtoalterado;
      });
  }

  private ConverterStringParaData(produtos: Produto[]) {
    for (const produto of produtos) {
      produto.datainclusao = moment(produto.datainclusao, 'YYYY-MM-DD').toDate();
    }
  }

  urlUploadAnexo(formData) {
    return this.http.post(`${this.url}/anexo`, formData)
        .subscribe(resposta => console.log('Upload ok.'));
  }


  BuscarPorFoto(): Promise<any> {
    return this.http.get(`${this.url}/get-file`).toPromise().then(response => response);
  }

  PegarImagem(codigo: string): Observable<Blob> {
    codigo = codigo.replace('/', '-');
    return this.http.get(`${this.url}/imagem/${codigo}`, { responseType: 'blob' });
  }

  DetalheImagem(codigo: string): Observable<Blob> {
    codigo = codigo.replace('/', '-');
    return this.http.get(`${this.url}/imagem/${codigo}`, { responseType: 'blob' });
  }

  PegarIcone(codigo: string): Observable<Blob> {
    codigo = codigo.replace('/', '-');
    return this.http.get(`${this.url}/icone/${codigo}`, { responseType: 'blob' });
  }

}
