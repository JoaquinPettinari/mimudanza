export interface Article {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  photos: number;
}

enum CATEGORIAS {
  Fitness = "Bibicleta",
  JuegoDeMesa = "Juegos de Mesa",
}

export const ARTICLES = [
  {
    id: "bicicleta_moove",
    title: "Bicicleta Moove R29",
    category: CATEGORIAS.Fitness,
    price: 300000,
    description: "Comprada nueva hace 2 años con muy poco uso.",
    photos: 3,
  },
  {
    id: "bicicleta_playera",
    title: "Bicicleta playera R26",
    category: CATEGORIAS.Fitness,
    price: 150000,
    description: "Comprada nueva hace 8 meses actualmente sin uso.",
    photos: 3,
  },
  {
    id: "just_one",
    title: "Just One",
    category: CATEGORIAS.JuegoDeMesa,
    price: 35000,
    description: `Es un entretenido Party game colaborativo, todos jugamos juntos para ganarle al juego. Un jugador debe adivinar una palabra por turno, los demás deben darle una pista que elige sin ponerse de acuerdo con el resto, lo mas original posible, para que en la suma de todas las pistas, el jugador que adivina pueda saber que palabra es. Pero ¡ojo!, las pistas idénticas quedarán anuladas, ¡por eso es fundamental que las pistas sean originales!`,
    photos: 3,
  },
  {
    id: "monopoly",
    title: "Monopoly",
    category: CATEGORIAS.JuegoDeMesa,
    price: 45000,
    description:
      "Monopoly es un juego de mesa basado en el intercambio y la compraventa de bienes raíces, reconocido mundialmente.",
    photos: 3,
  },
  {
    id: "erudito",
    title: "Erudito",
    category: CATEGORIAS.JuegoDeMesa,
    price: 30000,
    description:
      "El Erudito es un juego de mesa de preguntas de cultura general que desafía a los jugadores a utilizar su ingenio y capacidad de razonamiento más que su conocimiento.",
    photos: 3,
  },
  {
    id: "rollers",
    title: "Rollers",
    category: CATEGORIAS.Fitness,
    price: 180000,
    description: "Sin uso.",
    photos: 8,
  },
  {
    id: "melomano",
    title: "Melómano *EXPANSIÓN*",
    category: CATEGORIAS.JuegoDeMesa,
    price: 15000,
    description:
      "Juego de mesa de trivia de la marca Maldón, diseñado especialmente para los amantes de la música en Argentina. En este juego en español, podrás demostrar tus conocimientos y habilidades musicales mientras te diviertes con tus amigos y familiares.",
    photos: 8,
  },
];
