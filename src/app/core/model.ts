

export class Produto {
  id: number;
  codigo: string;
  referencia: string;
  descricao: string;
  descricaocomplementar: string;
  imagem = new Imagem();
  grupo = new Grupo();
  linha = new Linha();
  datainclusao: Date;
  status: boolean;
  propriedades = new PropriedadesProduto();
  departamento = new Departamento();
  categoria = new Categoria();
  cor = new Cor();
}

export class Marca {
  id: number;
  marca: string;
}

export class PropriedadesProduto {
  custo: string;
  preco: string;
  unidade: string;
  peso: string;
  tamanho: string;
  estoque: boolean;
}

export class Departamento {
  id: number;
  departamento: string;
  descricao: string;
}

export class Categoria {
  id: number;
  cod: string;
  nome: string;
  descricao: string;
  natureza: string;
}

export class Cor {
  cor: string;
  cordescricao: string;
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

export class ResumoProduto {
  id: number;
  codigo: string;
  descricao: string;
  peso: string;
  imagem: any;
}
