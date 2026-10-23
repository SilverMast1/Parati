// ══════════════════════════════════════════════════════════════
//  DATOS Y CONFIGURACIÓN — 6TO MES: LA MISIÓN DE NUESTROS 6 MESES 🎮💖
//  Gabriel & Alexa · Medio Año Juntos (23 de Abril - 23 de Octubre)
// ══════════════════════════════════════════════════════════════

const CONFIG = {
  startDate: '2026-04-23T00:00:00',
  currentMilestone: '2026-10-23T00:00:00',
  names: 'Gabriel & Alexa',
  title: 'La Misión de los 6 Meses: El Viaje a Medio Año',
  musicFile: 'musica.mp3',
  coupleNicknames: 'Mi niña hermosa & Mi persona favorita'
};

// Capítulos de los 6 Meses (Las 6 Gemas de la Historia)
const GEMAS_HISTORIA = [
  {
    id: 1,
    mes: '1er Mes · Abril',
    titulo: 'La Chispa del Comienzo ✨',
    subtitulo: '23 de Abril: El día que todo empezó',
    color: '#ff6b8b',
    icono: '💎',
    foto: 'mes1.jpg',
    categoria: 'El Origen',
    resumen: 'El inicio de nuestra gran historia',
    texto: `Aquel 23 de abril dimos el paso que lo cambió todo. Los nervios de los primeros días, la emoción de saber que empezaba algo único y ese primer "sí" que hoy se ha convertido en mi mayor tesoro.

Desde ese primer momento supe que contigo todo sería diferente: más brillante, más divertido y con un sentido especial que solo tú eres capaz de darle a mis días.`,
    fraseClave: '«Tomé la mejor decisión de mi vida al elegirte.»',
    stats: 'Día 1 · Comienza la aventura'
  },
  {
    id: 2,
    mes: '2do Mes · Mayo / Junio',
    titulo: 'Descubriendo Nuestro Ritmo 👣',
    subtitulo: 'Las primeras salidas, risas y complicidad',
    color: '#ff9248',
    icono: '🧡',
    foto: 'mes2.jpg',
    categoria: 'Crecimiento',
    resumen: 'Aprender a caminar juntos de la mano',
    texto: `Dos meses y ya no había vuelta atrás. Empezamos a llenar la galería de fotos, a compartir miradas que lo decían todo sin necesidad de hablar y a construir nuestros propios códigos.

Aprendí lo que significa querer de verdad: con detalles, con silencios cómodos y con la certeza de que tu compañía calma cualquier día pesado. Cada salida contigo se convertía en un recuerdo para guardar por siempre.`,
    fraseClave: '«El amor no grita, simplemente existe y llena todos los espacios contigo.»',
    stats: '60 Días · Nuestras primeras fotos y salidas'
  },
  {
    id: 3,
    mes: '3er Mes · Junio / Julio',
    titulo: 'Las 30 Razones Para Amarte 🌸',
    subtitulo: 'Por tu voz, tus abrazos y tu manera única de ser',
    color: '#e559b3',
    icono: '💖',
    foto: 'mes3.jpg',
    categoria: 'Complicidad',
    resumen: 'Cada detalle tuyo es un motivo más',
    texto: `Tres meses y la lista de razones por las que me vuelves loco no paraba de crecer. Por tu sonrisa que ilumina mi día, por tus ojos hermosos con los que me miras, y por esa paciencia infinita con la que me sabes aguantar cuando más mal me porto.

Por ser mi confidente, la guardiana de mis secretos y quien con un solo abrazo tiene el poder mágico de arreglarlo todo y darme paz. Eres mi hogar solo con escuchar tu voz.`,
    fraseClave: '«Por ser tan auténtica y por tu forma tan única de ver la vida con tu locura sin igual.»',
    stats: '90 Días · 30 razones y miles de motivos más'
  },
  {
    id: 4,
    mes: '4to Mes · Julio / Agosto',
    titulo: 'Noches de Roblox, Michis & Risas 🎮🪐',
    subtitulo: 'Desvelos en llamada, memes y bullying cariñoso',
    color: '#9d4edd',
    icono: '🐱',
    foto: 'mes4.jpg',
    categoria: 'Aventuras',
    resumen: 'Nuestras madrugadas jugando y riéndonos',
    texto: `Llegó el cuarto mes y con él nuestras mejores noches: "¿Si vamos a jugar Roblox o qué?". Horas y horas en llamada riéndonos de cualquier tontería hasta quedarnos dormidos, entre memes de gatitos y stickers chistosos.

Tu clásico "¿por qué te awitas mijo?", tus preguntas de "- ¿No me quieres?" para hacerme sonreír, y ese "✌️ ahí queda mijo" que me mata de risa. Nuestra relación tiene esa chispa divertida y traviesa que no cambiaría por nada.`,
    fraseClave: '«Una constelación de risas donde nunca faltan las ganas de jugar juntos.»',
    stats: '120 Días · Incontables horas en llamada y Roblox'
  },
  {
    id: 5,
    mes: '5to Mes · Agosto / Septiembre',
    titulo: 'El Scrapbook de Momentos Cotidianos 📓✂️',
    subtitulo: 'Electrolits, "Buenos días" y apoyo incondicional',
    color: '#00b4d8',
    icono: '📎',
    foto: 'mes5.jpg',
    categoria: 'Amor Diario',
    resumen: 'Estar presente en cada pequeño detalle',
    texto: `Cinco meses recortando recuerdos. El "Buenos días ✨❤️" que nunca falta y me alegra desde temprano, ir contigo entre salones aunque sea cinco minutos, llevarte un electrolit para el calor o esperarte a la salida. Cinco minutos contigo valen por mil horas con cualquiera.

Y sobre todo: saber que eres mi compañera fiel, la que me sigue y apoya en proyectos y locuras. Ser tu bailador, quien te pise, se equivoque y aprenda junto a ti.`,
    fraseClave: '«Cinco meses recortando recuerdos... y apenas estamos empezando.»',
    stats: '150 Días · Detalles reales que marcan la diferencia'
  },
  {
    id: 6,
    mes: '6to Mes · Octubre (¡HOY!)',
    titulo: 'Medio Año: La Cima de Nuestra Historia 🏆👑',
    subtitulo: '23 de Octubre: 6 Meses construyendo un futuro juntos',
    color: '#ffd166',
    icono: '⭐',
    foto: 'mes6.jpg',
    categoria: 'El Gran Hito',
    resumen: 'Medio año de amor incondicional',
    texto: `¡Llegamos a los 6 meses, mi niña hermosa! Medio año compartiendo la vida, superando cualquier reto y demostrando que lo nuestro es real, fuerte y sincero.

182 días en los que me has hecho la persona más afortunada del mundo. Gracias por elegirme cada día, por tu amor, por tus abrazos y por soñar a mi lado. Este medio año es solo la primera parada de una vida entera juntos.`,
    fraseClave: '«Medio año a tu lado... ¡y ya quiero vivir todos los años que vienen contigo!»',
    stats: '182 Días · ¡Medio año oficial juntos!'
  }
];

// Estadísticas Románticas
const STATS = {
  dias: 182,
  horas: 4368,
  minutos: 262080,
  partidasRoblox: 'Incontables 🎮',
  electrolitsEntregados: 'Varios pal calor 🥤',
  abrazosQueCuranTodo: 'Infinitos 🫂',
  amorTotal: '100% y aumentando ❤️'
};

// Carta Final de Gabriel para Alexa
const CARTA_FINAL = {
  saludo: 'Para mi niña hermosa, Alexa 💕',
  parrafos: [
    'Hoy cumplimos 6 meses juntos... medio año entero desde aquel 23 de abril en el que empezó esta aventura tan bonita.',
    'Parece que fue ayer cuando hablábamos con nervios, y al mismo tiempo siento que te conozco de toda la vida. En estos 182 días me has demostrado lo que es tener a una verdadera compañera: alguien que me apoya en mis locuras y proyectos, que me hace reír con sus stickers y su bullying cariñoso, y que me da una paz inmensa con solo escuchar su voz.',
    'Me encanta todo de ti: desde ese "Buenos días ✨❤️" infaltable de cada mañana, las noches enteras de Roblox y desvelo en llamada, hasta esos 5 minutos entre salones para verte y llevarte un electrolit pal calor. Cada segundo a tu lado vale oro.',
    'Gracias por permitirme ser quien aprenda contigo, quien baile contigo aunque me equivoque y te pise, y quien te admire cada día recordándote lo hermosa que eres por dentro y por fuera.',
    'Hoy celebramos medio año, pero nuestra historia apenas está en su prólogo. Estoy listo para los próximos 6 meses, para el primer año y para todo lo que el futuro tenga preparado para los dos.',
    'Te amo con todo mi corazón, hoy, mañana y siempre. Feliz Medio Año, mi amor. ❤️'
  ],
  firma: 'Siempre tuyo,\nGabriel ✨'
};
