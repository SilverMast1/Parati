// ══════════════════════════════════════════════════════════════
//  DATOS Y CONFIGURACIÓN — 5TO MES: NUESTRO SCRAPBOOK DE RECUERDOS 📓✂️
//  Gabriel & Alexa · 5 Meses Juntos
// ══════════════════════════════════════════════════════════════

const CONFIG = {
  startDate: '2026-04-23T00:00:00',
  nextMilestone: '2026-10-23T00:00:00',
  musicFile: 'musica.mp3',
  names: 'Gabriel & Alexa',
  albumTitle: 'Nuestro Scrapbook de 5 Meses'
};

// Notas adhesivas / Post-its con frases reales de su chat
const POST_ITS = [
  {
    color: '#ffea79', // Amarillo clásico
    rot: '-2deg',
    tape: 'tape-stripes',
    sticker: '☀️',
    titulo: 'Cada Mañana',
    frase: '"Buenos días ✨❤️"',
    detalle: 'El mensaje que nunca falta. 400 días juntos y todavía despertar y ver tu mensaje me alegra todo el día.'
  },
  {
    color: '#ffb3ba', // Rosa pastel
    rot: '3deg',
    tape: 'tape-hearts',
    sticker: '🎀',
    titulo: 'Visto Bueno Oficial',
    frase: '"Decirte lo hermosa que te vez"',
    detalle: 'Para cada outfit, cada foto de perfil y cada día que tengas dudas. Siempre tienes mis ojos viendote ya dmirando tu hermosura.'
  },
  {
    color: '#bae1ff', // Azul cielo
    rot: '-3deg',
    tape: 'tape-dots',
    sticker: '🎮',
    titulo: 'Noches de Desvelo',
    frase: '"¿Si vamos a jugar Roblox o qué?"',
    detalle: 'Horas y horas en llamada jugando juntos, riéndonos de cualquier tontería hasta que nos da sueño o nos quedamos dormidos.'
  },
  {
    color: '#ffdfba', // Melocotón / Naranja
    rot: '2deg',
    tape: 'tape-grid',
    sticker: '😝',
    titulo: 'Bullying de Cariño',
    frase: '"- ¿No me quieres?"',
    detalle: 'Tu clásico "¿por qué te awitas mijo?", tus stickers chistosos y el "✌️ ahí queda mijo" que tanto me hace reír.'
  },
  {
    color: '#baffc9', // Verde menta
    rot: '-1deg',
    tape: 'tape-pink',
    sticker: '🫂',
    titulo: 'Entre Salones',
    frase: '"Aunque sea 5 minutos "',
    detalle: 'Ir contigo, llevarte un electrolit pal calor o esperarte a la salida. el tiempo que sea auqnue sean pocos minutos contigo valen por mil horas.'
  }
];

// Fotos inéditas con recortes polaroid, cintas y pie de foto
const POLAROIDS = [
  {
    file: 'foto1.jpg',
    cap: 'un gran dia',
    nota: 'La paz más bonita el saber que tengo a mi lado a alguien que me ama ',
    rot: '-3deg',
    sticker: '🧸'
  },
  {
    file: 'foto2.jpg',
    cap: 'mi compañera fiel',
    nota: 'saber que me sigues y me apoyas a proyectos y locuras.',
    rot: '2.5deg',
    sticker: '✨'
  },
  {
    file: 'foto3.jpg',
    cap: 'ya 5/♾️',
    nota: 'Nuestro futuro es mejor si estamos juntos.',
    rot: '-2deg',
    sticker: '🌸'
  },
  {
    file: 'foto4.jpg',
    cap: 'ser tu bailador',
    nota: 'Gracias por permitirme ser quien te pise me equivoque y aprenda junto a ti❤️.',
    rot: '3deg',
    sticker: '🍿'
  },
  {
    file: 'foto5.jpg',
    cap: 'Cinco meses recortando recuerdos ✂️',
    nota: 'Y apenas estamos empezando.',
    rot: '-1.5deg',
    sticker: '💖'
  }
];

// Lista de pendientes / To-Do del Scrapbook para el futuro
const PENDIENTES = [
  { texto: 'Ir a ver otra película al cine con palomitas extra', hecha: true },
  { texto: 'Quedarnos jugando Roblox hasta la madrugada en llamada', hecha: true },
  { texto: 'Comprar electrolit y caminar juntos entre clases', hecha: true },
  { texto: 'Tomarnos mil fotos más donde salgas haciendo caras chistosas', hecha: false },
  { texto: 'Hacer un picnic con snacks y escuchar nuestra música', hecha: false },
  { texto: 'Seguir eligiéndote cada día, hoy, mañana y siempre', hecha: true }
];
