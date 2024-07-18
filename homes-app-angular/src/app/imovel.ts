interface propriedades {
    chave: String;
    valor: number|String;
}

interface DetalhesAluguel {
    chave: String;
    valor: number;
}

interface DetalhesFinanciamento {
    chave: String;
    valor: number
}

export interface Imovel {
    id: number;
    url_foto: string;
    nome: string;
    cidade: string;
    estado: string;
    favorito: boolean;
    tipo: string;
    latitude: string;
    longitude: string;
    adicionais: propriedades[];
    aluguel: DetalhesAluguel[];
    financiamento: DetalhesFinanciamento[];
}