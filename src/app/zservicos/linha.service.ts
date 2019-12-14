import { Linha } from 'src/app/core/model';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

export class LinhaFiltro {
  id: number;
  nomelinha: string;
  descricao: string;
  cor: string;
  pagina = 0;
  itensPorPagina = 7;
}

@Injectable({
  providedIn: 'root'
})
export class LinhaService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/linhas`;
  }

  Listar(): Promise<any> {
    return this.http.get(`${this.url}`).toPromise().then(response => response);
  }

  Consultar(filtro: LinhaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nomelinha) {
      params = params.append('nomelinha', filtro.nomelinha);
    }

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    if (filtro.cor) {
      params = params.append('cor', filtro.cor);
    }

    return this.http.get<any>(`${this.url}?resumo`, { params })
      .toPromise()
      .then(response => {
        const linhas = response;

        const resultado = {
          linhas,
          total: response.totalElements
        };

        return resultado;
      });
  }


  Adicionar(linha) {
    return this.http.post(`${this.url}`, linha).subscribe(response => response);
  }

  BuscarPorId(id: number): Promise<any> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => {
        const linha = response as Linha;
        return linha;
      });
  }


  Atualizar(linha: Linha): Promise<any> {
    return this.http.put(`${this.url}/${linha.id}`, linha)
      .toPromise()
      .then(response => {
        console.log(stringify(response));
        const linhaalterada = response as Linha;
        return linhaalterada;
      });
  }

  Remover(id: number) {
    this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }


}
