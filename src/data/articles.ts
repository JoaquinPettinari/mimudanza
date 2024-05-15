export interface Article {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
}

export const ARTICLES = [
  {
    id: "bicicleta_moove",
    title: "Bicicleta Moove R29",
    category: "Bicicleta",
    price: 300000,
    description: "Comprada nueva hace 2 años con muy poco uso.",
  },
  {
    id: "bicicleta_playera",
    title: "Bicicleta playera R26",
    category: "Bicicleta",
    price: 150000,
    description: "Comprada nueva hace 8 meses actualmente sin uso.",
  },
];
