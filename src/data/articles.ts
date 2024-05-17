export interface Article {
  id: string;
  title: string;
  category: string;
  price: number;
  ask?: boolean;
  description: string;
  photos: number;
}

enum CATEGORIAS {
  Fitness = "Fitness",
  JuegoDeMesa = "Juegos de Mesa",
  Tecnologia = "Tecnología",
  Cocina = "Cocina",
  Exterior = "Exterior",
  Muebles = "Muebles",
  Otro = "Otro",
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
    description:
      "Marca BladeRunner, modelo Pro 80 ajustables con frenos. Nuevos sin uso, talle 40, en caja.",
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
  {
    id: "microfono",
    title: "Micrófono HyperX QuadCast Condensador Bidireccional color negro",
    category: CATEGORIAS.Tecnologia,
    price: 120000,
    description:
      "Al ser condensador, permite un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el más elegido por los profesionales.",
    photos: 2,
  },
  {
    id: "monitor",
    title: "Monitor Curvo Samsung Odyssey G5 27' 2K 144hz",
    category: CATEGORIAS.Tecnologia,
    price: 350000,
    description:
      "Monitor con poco uso, tiene 2 años de uso. Perfecto para trabajar, estudiar o jugar.",
    photos: 1,
  },
  {
    id: "camara_compu",
    title: "Camara Web Webcam Logitech C922 Pro Stream Full Hd Pce",
    category: CATEGORIAS.Tecnologia,
    price: 40000,
    description:
      "Transmití y grabá videos vibrantes y realistas. La lente de vidrio y la resolución Full HD 1080p capturan los detalles más emocionantes, los colores brillantes y naturales en video fluido a 30 fps, mientras que el campo de visión de 78 grados tiene capacidad para dos personas. Utilizá la aplicación para hacer zoom y desplazar la cámara.",
    photos: 1,
  },
  {
    id: "parlantes",
    title: "Parlantes Edifier R1100",
    category: CATEGORIAS.Tecnologia,
    price: 150000,
    description: `
      Potencia de salida: 42 Watts (RMS) - L/R: 21 W + 21 W.
      Respuesta de frecuencia: 65 Hz ~ 20 kHz
      Tipos de entrada: Line-in PC - Line-in AUX
      Tweeter: 13 mm
      Woofer: 4" (116 mm)
      Dimensiones: 140 × 226 × 197 mm (anch. x alt. x prof.)
      Peso: 4.9 kg`,
    photos: 1,
  },
  {
    id: "computadora_escritorio",
    title: "Computadora De Escritorio *imagen ilustrativa*",
    category: CATEGORIAS.Tecnologia,
    ask: true,
    price: 9999999,
    description:
      "Especificaciones: Procesador AMD Ryzen 5 2600 Six-Core. 24GB RAM. SSD 240GB y SSD 512GB. Placa de video Radeon RX 570 Series",
    photos: 1,
  },
  {
    id: "heladera",
    title: "Heladera Vostok 360L Blanca",
    category: CATEGORIAS.Cocina,
    price: 350000,
    description: "Nueva!! Tiene 8 meses nada mas!",
    photos: 2,
  },
  {
    id: "carpa",
    title: "Carpa Coleman 2 personas 3000mm",
    category: CATEGORIAS.Otro,
    price: 200000,
    description:
      "Tiene solamente 4 usos, está nueva. Tamaño empaque: 46 cm x 16 cm. Peso: 2,8 kg.",
    photos: 1,
  },
  {
    id: "auto",
    title: "Stepway 2022 36.000k Intense (tope de gama)",
    category: CATEGORIAS.Otro,
    ask: true,
    price: 9999999,
    description:
      "Stepway 2022 Intense manual 36.000 kilómetros, services oficiales. Mas de 20.000 kilómetros son de ruta.",
    photos: 4,
  },
  {
    id: "mesa_desayunadora",
    title: "Mesa desayunadora negra",
    category: CATEGORIAS.Muebles,
    price: 10000,
    description:
      "Mesa de cama portátil plegable para la cama, escritorio, sillón la llevas donde quieres.",
    photos: 1,
  },
  {
    id: "mesa_de_luz",
    title: "Mesa de luz moderna",
    category: CATEGORIAS.Muebles,
    price: 30000,
    description:
      "Mesita de Luz 1 Cajón Moderna 'ACHERY' en Melamina de Primera Calidad Marca 'MASISA'. Medidas: 0.45 x 0.50 x 0.35 Mts.",
    photos: 1,
  },
];
