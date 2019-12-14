export class Produto {
  id: number;
  codigo: string;
  descricao: string;
  descricaocomplementar: string;
  peso: string;
  imagem = new Imagem();
  grupo = new Grupo();
  linha = new Linha();
  datainclusao: Date;
}

export class ResumoProduto {
  id: number;
  codigo: string;
  descricao: string;
  peso: string;
  imagem: any;
}


export class Grupo {
  id: number;
  abreviacao: string;
  nomegrupo: string;
}

export class Linha {
  id: number;
  nomelinha: string;
  descricao: string;
  cor: string;

}

export class Imagem {
  id: number;
  nome: string;
  caminho: string;
}
