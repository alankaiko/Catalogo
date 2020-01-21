import { Grupo } from './../core/model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

export class GrupoFiltro {
  id: number;
  abreviacao: string;
  nomegrupo: string;
  pagina = 0;
  itensPorPagina = 2;
}

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/grupos`;
  }

  Listar(): Promise<any> {
    return this.http.get(`${this.url}`).toPromise().then(response => response);
  }

  Consultar(filtro: GrupoFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.abreviacao) {
      params = params.append('abreviacao', filtro.abreviacao);
    }

    if (filtro.nomegrupo) {
      params = params.append('nomegrupo', filtro.nomegrupo);
    }

    return this.http.get<any>(`${this.url}?resumo`, { params })
      .toPromise()
      .then(response => {
        const grupos = response;

        const resultado = {
          grupos,
          total: response.totalElements
        };

        return resultado;
      });
  }


  Adicionar(grupo): Promise<any> {
    return this.http.post(`${this.url}`, grupo).toPromise().then(response => response);
  }

  BuscarPorId(id: number): Promise<any> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => {
        const produto = response as Grupo;
        return produto;
      });
  }

  Atualizar(grupo: Grupo): Promise<any> {
    return this.http.put(`${this.url}/${grupo.id}`, grupo)
      .toPromise()
      .then(response => {
        const grupoalterado = response as Grupo;
        return grupoalterado;
      });
  }

  Remover(id: number) {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }

}
