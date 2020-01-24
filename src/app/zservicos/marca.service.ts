import { Marca } from './../core/model';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class MarcaFiltro {
  id: number;
  marca: string;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/marcas`;
  }

  Listar(): Promise<any> {
    return this.http.get(`${this.url}`).toPromise().then(response => response);
  }

  Consultar(filtro: MarcaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.marca) {
      params = params.append('marca', filtro.marca);
    }

    return this.http.get<any>(`${this.url}?resumo`, { params })
      .toPromise()
      .then(response => {
        const marcas = response;

        const resultado = {
          marcas,
          total: response.totalElements
        };

        return resultado;
      });
  }


  Adicionar(marca): Promise<any> {
    return this.http.post(`${this.url}`, marca).toPromise().then(response => response);
  }

  BuscarPorId(id: number): Promise<any> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => {
        const marca = response as Marca;
        return marca;
      });
  }

  Atualizar(marca: Marca): Promise<any> {
    return this.http.put(`${this.url}/${marca.id}`, marca)
      .toPromise()
      .then(response => {
        const marcaalterado = response as Marca;
        return marcaalterado;
      });
  }

  Remover(id: number) {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }

}
