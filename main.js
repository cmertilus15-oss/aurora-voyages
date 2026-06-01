/* ═══════════════════════════════════════════════════════
   AURORA VOYAGES v2 — main.js  (Complete)
   Cursor · Loader · Nav · Search · Carousel · Counters
   Filters · Experiences · Articles · Modals · Footer
═══════════════════════════════════════════════════════ */

// ════════════════ DESTINATION DATABASE ════════════════
const DESTINATIONS = [
  { name:"París",        country:"Francia",         emoji:"🗼", region:"Europa",   days:7,  price:"$1,299", temp:"18°C", desc:"La ciudad del amor con la Torre Eiffel, el Louvre y Versalles." },
  { name:"Roma",         country:"Italia",           emoji:"🏛️", region:"Europa",   days:6,  price:"$1,199", temp:"22°C", desc:"La ciudad eterna de arte, historia y gastronomía incomparable." },
  { name:"Barcelona",    country:"España",           emoji:"🏙️", region:"Europa",   days:7,  price:"$1,399", temp:"23°C", desc:"Gaudí, Sagrada Familia, playa y vibrantísima vida nocturna." },
  { name:"Ámsterdam",    country:"Países Bajos",     emoji:"🌷", region:"Europa",   days:5,  price:"$1,099", temp:"15°C", desc:"Canales, museos y la ciudad más bohemia de Europa." },
  { name:"Londres",      country:"Reino Unido",      emoji:"🎡", region:"Europa",   days:7,  price:"$1,499", temp:"16°C", desc:"Big Ben, Buckingham y una escena cultural sin igual." },
  { name:"Santorini",    country:"Grecia",           emoji:"🌅", region:"Europa",   days:6,  price:"$1,899", temp:"26°C", desc:"Cúpulas azules, atardeceres espectaculares y vinos locales." },
  { name:"Praga",        country:"República Checa",  emoji:"🏰", region:"Europa",   days:5,  price:"$899",  temp:"14°C", desc:"La ciudad de oro con castillos medievales y cerveza artesanal." },
  { name:"Tokio",        country:"Japón",            emoji:"⛩️", region:"Asia",     days:10, price:"$2,499", temp:"20°C", desc:"Tradición y tecnología en la capital más innovadora del mundo." },
  { name:"Kioto",        country:"Japón",            emoji:"🌸", region:"Asia",     days:7,  price:"$2,199", temp:"18°C", desc:"Templos milenarios, geishas y jardines zen de incomparable belleza." },
  { name:"Bali",         country:"Indonesia",        emoji:"🏖️", region:"Asia",     days:9,  price:"$1,899", temp:"29°C", desc:"Paraíso tropical de templos, arrozales y playas de ensueño." },
  { name:"Tailandia",    country:"Tailandia",        emoji:"🐘", region:"Asia",     days:10, price:"$1,699", temp:"31°C", desc:"Palacios dorados, playas paradisíacas y cocina extraordinaria." },
  { name:"Dubái",        country:"Emiratos Árabes",  emoji:"🏙", region:"Asia",     days:6,  price:"$2,099", temp:"35°C", desc:"El lujo más extremo del mundo con el Burj Khalifa y playas doradas." },
  { name:"Taj Mahal",    country:"India",            emoji:"🕌", region:"Asia",     days:10, price:"$1,999", temp:"28°C", desc:"La maravilla más romántica del mundo en Agra, India." },
  { name:"Nueva York",   country:"USA",              emoji:"🗽", region:"América",  days:7,  price:"$1,599", temp:"18°C", desc:"La ciudad que nunca duerme: Broadway, Central Park y Manhattan." },
  { name:"Machu Picchu", country:"Perú",             emoji:"🏔️", region:"América",  days:8,  price:"$1,799", temp:"17°C", desc:"La ciudad sagrada de los Incas entre las nubes andinas." },
  { name:"Río de Janeiro",country:"Brasil",          emoji:"🌊", region:"América",  days:7,  price:"$1,499", temp:"30°C", desc:"El Cristo Redentor, Copacabana y el carnaval más famoso del mundo." },
  { name:"Patagonia",    country:"Chile/Argentina",  emoji:"🏔", region:"América",  days:15, price:"$4,599", temp:"10°C", desc:"Torres del Paine, glaciares azules y la naturaleza más extrema." },
  { name:"Punta Cana",   country:"Rep. Dominicana",  emoji:"🌺", region:"Caribe",   days:5,  price:"$899",  temp:"30°C", desc:"Playas de arena blanca infinita y resorts all-inclusive de lujo." },
  { name:"Maldivas",     country:"Maldivas",         emoji:"🏝️", region:"Caribe",   days:7,  price:"$3,499", temp:"30°C", desc:"Bungalows sobre el agua turquesa más cristalina del planeta." },
  { name:"Habana",       country:"Cuba",             emoji:"🚗", region:"Caribe",   days:6,  price:"$999",  temp:"28°C", desc:"Ciudad de historia, música y la mejor salsa del mundo." },
  { name:"Masái Mara",   country:"Kenya",            emoji:"🦁", region:"África",   days:8,  price:"$3,299", temp:"25°C", desc:"Safari definitivo con los Big Five en su hábitat natural." },
  { name:"Zanzíbar",     country:"Tanzania",         emoji:"🌴", region:"África",   days:7,  price:"$2,499", temp:"28°C", desc:"Playas de arena blanca, especias y cultura swahili única." },
  { name:"Marrakech",    country:"Marruecos",        emoji:"🕌", region:"África",   days:5,  price:"$999",  temp:"26°C", desc:"Zocos, palacios y la Koutoubia bajo el cielo africano." },
  { name:"Sídney",       country:"Australia",        emoji:"🦘", region:"Oceanía",  days:12, price:"$2,999", temp:"22°C", desc:"Opera House, Bondi Beach y la Gran Barrera de Coral." },
];

// ════════════════ EXPERIENCE DATA ════════════════
const EXPERIENCES = {
  gastronomia: {
    icon:"🍽️", title:"Turismo Gastronómico",
    price:"Desde $899", pricepp:"/ persona",
    desc:"Una travesía culinaria por los sabores más extraordinarios del mundo. Desde mercados locales hasta estrellas Michelin.",
    includes:["Visitas a 10 restaurantes gourmet","Clases de cocina local con chefs certificados","Maridajes de vino y gastronomía","Tours a mercados y productores locales","Guía gastronómica especializada","Transporte entre restaurantes"],
    not_includes:["Vuelos internacionales","Alojamiento (opcional)","Gastos personales"],
    days:[
      {n:1, title:"Llegada & Mercados", desc:"Orientación gastronómica, tour de mercados locales al amanecer."},
      {n:2, title:"Clase de Cocina Magistral", desc:"Aprende técnicas con un chef con estrella Michelin."},
      {n:3, title:"Tour de Viñedos", desc:"Visita a bodegas con catas de vino premium."},
      {n:4, title:"Cena de Alta Cocina", desc:"Mesa en el mejor restaurante de la ciudad."},
      {n:5, title:"Mercado de Productores", desc:"Desayuno en el mercado y compras de especialidades."},
    ],
    destinations:["San Sebastián 🇪🇸","Lyon 🇫🇷","Tokio 🇯🇵","Lima 🇵🇪","Bangkok 🇹🇭"],
    color:"linear-gradient(135deg,#1a3a1e,#2d6e3a)"
  },
  aventura: {
    icon:"🏔️", title:"Aventura Extrema",
    price:"Desde $1,299", pricepp:"/ persona",
    desc:"Para los valientes que buscan límites. Trekkings, buceo, paracaidismo y experiencias que desafían la gravedad.",
    includes:["Trekking de alta montaña guiado","Buceo certificado en arrecifes vírgenes","Paracaidismo tandem","Rafting en aguas bravas","Todo el equipamiento","Seguro de aventura especializado"],
    not_includes:["Vuelos internacionales","Alojamiento","Entrenamiento físico previo"],
    days:[
      {n:1, title:"Orientación & Preparación", desc:"Briefing de seguridad, equipamiento y aclimatación."},
      {n:2, title:"Trekking Amanecer", desc:"Ascenso al pico principal con vistas panorámicas."},
      {n:3, title:"Buceo en Arrecife", desc:"Inmersiones guiadas en arrecifes protegidos."},
      {n:4, title:"Paracaidismo", desc:"Salto en tándem sobre paisajes de infarto."},
      {n:5, title:"Rafting & Cierre", desc:"Descenso en aguas bravas y celebración final."},
    ],
    destinations:["Patagonia 🇨🇱","Nepal 🇳🇵","Maldivas 🌊","Costa Rica 🇨🇷","Nueva Zelanda 🇳🇿"],
    color:"linear-gradient(135deg,#1a0a3e,#3a1a6e)"
  },
  wellness: {
    icon:"🧘", title:"Wellness & Retiros",
    price:"Desde $1,499", pricepp:"/ persona",
    desc:"Reconecta contigo mismo en los destinos más serenos del planeta. Yoga, meditación y tratamientos ancestrales.",
    includes:["Retiro de yoga diario","Sesiones de meditación guiada","Tratamientos de spa ancestrales","Alimentación plant-based premium","Talleres de mindfulness","Consulta con experto en bienestar"],
    not_includes:["Vuelos internacionales","Tratamientos adicionales","Suplementos personales"],
    days:[
      {n:1, title:"Llegada & Desintoxicación", desc:"Llegada tranquila, baño de aromas y primera meditación."},
      {n:2, title:"Yoga al Amanecer", desc:"Práctica en plataforma sobre el río al amanecer."},
      {n:3, title:"Spa Ancestral", desc:"Tratamientos basados en tradiciones milenarias locales."},
      {n:4, title:"Meditación & Naturaleza", desc:"Caminata meditativa en entornos naturales sagrados."},
      {n:5, title:"Retiro de Silencio", desc:"Día de silencio, reflexión y integración."},
    ],
    destinations:["Bali 🇮🇩","Himalaya 🏔️","Sedona 🇺🇸","Algarve 🇵🇹","Tulum 🇲🇽"],
    color:"linear-gradient(135deg,#0a2e3e,#1a5e6e)"
  },
  fotografia: {
    icon:"📷", title:"Fotografía & Arte",
    price:"Desde $799", pricepp:"/ persona",
    desc:"Captura el mundo con los ojos de un artista. Tours fotográficos exclusivos con profesionales en escenarios únicos.",
    includes:["10 sesiones fotográficas guiadas","Post-procesado con Lightroom","Visitas a galerías de arte locales","Acceso a locaciones exclusivas","Portafolio digital profesional","Mentoring personalizado"],
    not_includes:["Cámara fotográfica","Vuelos","Alojamiento"],
    days:[
      {n:1, title:"Golden Hour Urbana", desc:"Fotografía de calle al atardecer con el fotógrafo experto."},
      {n:2, title:"Arquitectura & Texturas", desc:"Exploración de barrios históricos y detalles únicos."},
      {n:3, title:"Retratos Culturales", desc:"Fotografía de personas y tradiciones locales."},
      {n:4, title:"Paisaje & Naturaleza", desc:"Excursión a locaciones naturales de ensueño."},
      {n:5, title:"Edición & Galería", desc:"Taller de edición y presentación de tu portafolio."},
    ],
    destinations:["Marrakech 🇲🇦","Kioto 🇯🇵","La Habana 🇨🇺","Praga 🇨🇿","Cartagena 🇨🇴"],
    color:"linear-gradient(135deg,#2e1a00,#6e4a10)"
  },
  luna_miel: {
    icon:"💑", title:"Luna de Miel Perfecta",
    price:"Desde $2,499", pricepp:"/ pareja",
    desc:"El viaje más romántico de su vida, diseñado especialmente para ustedes. Cada detalle pensado para el amor.",
    includes:["Transferes privados en limusina","Villa o bungalow privado","Cena romántica bajo las estrellas","Decoración romántica en habitación","Masaje en pareja","Bottle de champagne de bienvenida","Fotografía de pareja profesional"],
    not_includes:["Vuelos (cotizables separado)","Gastos personales"],
    days:[
      {n:1, title:"Llegada Mágica", desc:"Recepción VIP, pétalos de rosas y champagne de bienvenida."},
      {n:2, title:"Día de Spa", desc:"Masaje en pareja y tratamientos de lujo para dos."},
      {n:3, title:"Aventura Romántica", desc:"Paseo en barco privado al atardecer o excursión exclusiva."},
      {n:4, title:"Cena Estrella", desc:"Mesa privada en restaurante con vista panorámica."},
      {n:5, title:"Día Libre en Paraíso", desc:"Tiempo libre para explorar o simplemente relajarse."},
    ],
    destinations:["Maldivas 🏝️","Santorini 🌅","Bora Bora 🌊","Venecia 🇮🇹","Seychelles 🌴"],
    color:"linear-gradient(135deg,#3e0a1a,#7e1a3a)"
  },
  familia: {
    icon:"👨‍👩‍👧‍👦", title:"Aventura Familiar",
    price:"Desde $3,299", pricepp:"/ familia 4",
    desc:"Experiencias que crearán recuerdos para toda la vida. Actividades pensadas para que todos disfruten por igual.",
    includes:["Habitaciones familiares en hoteles 4★","Actividades para niños y adultos","Guía especializado en turismo familiar","Entradas a parques y atracciones","Transporte seguro y cómodo","Kit de bienvenida para los niños","Seguro familiar completo"],
    not_includes:["Vuelos","Comidas (excl. desayunos)","Gastos personales"],
    days:[
      {n:1, title:"Llegada & Orientación", desc:"Check-in familiar, piscina y cena de bienvenida para todos."},
      {n:2, title:"Aventura Histórica", desc:"Tour cultural adaptado para niños con actividades lúdicas."},
      {n:3, title:"Parque y Diversión", desc:"Parque temático o acuático para toda la familia."},
      {n:4, title:"Naturaleza & Wildlife", desc:"Avistamiento de animales y actividades en la naturaleza."},
      {n:5, title:"Playa & Libre", desc:"Día de playa y tiempo libre para explorar en familia."},
    ],
    destinations:["Orlando 🇺🇸","Cancún 🇲🇽","Punta Cana 🌴","Costa Rica 🌿","España 🇪🇸"],
    color:"linear-gradient(135deg,#0a2a5e,#1a5a9e)"
  }
};

// ════════════════ ARTICLE DATA ════════════════
const ARTICLES = {
  paris: {
    cat:"Destinos", title:"Los 10 secretos de París que solo los locales conocen",
    date:"15 Mayo 2025", read:"8 min", emoji:"🗼",
    bg:"linear-gradient(135deg,#1a2a6e,#3a5a9e)",
    body:`<p>París es mucho más que la Torre Eiffel. La Ciudad Luz tiene capas y capas de secretos que solo los parisinos de toda la vida conocen, y hoy te los revelamos todos.</p>
    <h4>1. Le Marais: el barrio más auténtico</h4>
    <p>Mientras los turistas se agolpan en los Campos Elíseos, los locales pasean por Le Marais. Galerías de arte independientes, concept stores únicos y los mejores falafels de la ciudad en la Rue des Rosiers.</p>
    <h4>2. La librería Shakespeare & Company</h4>
    <p>Ubicada frente a Notre-Dame, esta librería legendaria tiene una historia literaria extraordinaria. Hemingway, Fitzgerald y Joyce compraron aquí. Hoy todavía puedes quedarte a dormir gratis si lees y trabajas en la tienda.</p>
    <h4>3. El Palais-Royal: jardín secreto</h4>
    <p>A solo metros del Louvre, este jardín arcaded casi nunca aparece en las guías turísticas. Los parisinos vienen aquí a tomar el sol y leer mientras los turistas hacen fila para entrar al museo.</p>
    <h4>4. La rue Crémieux: el callejón de colores</h4>
    <p>Una calle mágica pintada de colores pastel que parece sacada de un cuento. El mejor momento para ir es al amanecer, antes de que lleguen los fotógrafos con sus influencers.</p>
    <h4>5. Beber vino en el Canal Saint-Martin</h4>
    <p>Los jóvenes parisinos se reúnen aquí al atardecer con una botella de Bordeaux. Es uno de los rituales sociales más auténticos de la ciudad, completamente gratuito.</p>`,
    tips:["Evita el Louvre los fines de semana","La mayoría de museos son gratis el primer domingo de cada mes","El metro es siempre más rápido que el taxi","Aprende 3 palabras en francés: bonjour, merci, s'il vous plaît"]
  },
  japon: {
    cat:"Cultura", title:"Guía completa del festival Hanami en Japón",
    date:"10 Abril 2025", read:"6 min", emoji:"🌸",
    bg:"linear-gradient(135deg,#1e4020,#3e7050)",
    body:`<p>El Hanami —la costumbre de observar los cerezos en flor— es mucho más que ver árboles bonitos. Es una filosofía de vida japonesa que celebra la belleza efímera y la renovación.</p>
    <h4>¿Cuándo sucede el Hanami?</h4>
    <p>La floración de los cerezos dura solo 1-2 semanas, generalmente entre finales de marzo y principios de abril. El JMA (Meteorological Agency) publica predicciones cada año desde enero.</p>
    <h4>Los mejores parques para verlos</h4>
    <p>En Tokio: Ueno Park (más de 1,000 árboles), Shinjuku Gyoen (1,100 árboles), Chidorigafuchi (700m de cerezos junto al foso del castillo). En Kioto: Maruyama Park, el Camino del Filósofo, el castillo Nijo.</p>
    <h4>Cómo hacer el Hanami como un local</h4>
    <p>Llega temprano para ocupar un buen lugar. Lleva una tela para sentarte, sake caliente (para el frío), onigiri, takoyaki y ánimo festivo. El Hanami nocturno (Yozakura) es especialmente mágico con los árboles iluminados.</p>`,
    tips:["Reserva hotel con 6 meses de anticipación","La semana de la floración es peak season","Prueba el sakura-mochi (dulce rosa)","Las noches son frías, lleva abrigo"]
  },
  safari: {
    cat:"Aventura", title:"Todo lo que necesitas saber antes de tu primer Safari",
    date:"5 Abril 2025", read:"10 min", emoji:"🦁",
    bg:"linear-gradient(135deg,#3e1500,#7e3510)",
    body:`<p>El safari africano es una de las experiencias más transformadoras que puede vivir un ser humano. Ver a los leones en su hábitat natural, con la sabana infinita al fondo y el silencio solo roto por el viento... nada te prepara para eso.</p>
    <h4>¿Cuándo ir?</h4>
    <p>La temporada seca (julio-octubre) es ideal. Los animales se concentran cerca de los ríos y el pasto bajo permite verlos mejor. La Gran Migración en el Masái Mara ocurre entre julio y septiembre.</p>
    <h4>Qué llevar obligatoriamente</h4>
    <p>Ropa en tonos tierra (beige, kaki, oliva —nunca blanco o brillante), binoculares de calidad, protector solar SPF50+, repelente de mosquitos, cámara con zoom largo (300mm mínimo), y mucha paciencia.</p>
    <h4>Los Big Five</h4>
    <p>El objetivo de todo safarista: León, Elefante, Búfalo africano, Leopardo y Rinoceronte. El más difícil de ver es el leopardo. Si ves los cinco, eres oficialmente un safari pro.</p>
    <h4>Cómo elegir tu lodge</h4>
    <p>Los lodges dentro de la reserva son más caros pero los game drives (safaris) duran más. Los que están fuera cuestan menos pero pierdes tiempo de viaje.</p>`,
    tips:["Los mejores momentos son al amanecer y al atardecer","No hagas ruidos fuertes ni movimientos bruscos","Escucha siempre las instrucciones del guía","Lleva efectivo en dólares para propinas"]
  },
  maldivas: {
    cat:"Lujo", title:"Maldivas: la guía definitiva del paraíso sobre la tierra",
    date:"1 Abril 2025", read:"7 min", emoji:"🏝️",
    bg:"linear-gradient(135deg,#0a2a5e,#1a5a9e)",
    body:`<p>Maldivas no necesita introducción. Es simplemente el lugar más bello de la Tierra: agua turquesa, arena blanca, bungalows sobre el océano y una calma que pocas palabras pueden describir.</p>
    <h4>Cómo elegir tu atolón</h4>
    <p>Maldivas tiene 26 atolones. Male Atoll (el más cercano al aeropuerto) tiene los resorts más accesibles. North Malé y South Malé son las opciones más populares. Baa Atoll es Reserva de Biosfera de la UNESCO, perfecta para snorkel.</p>
    <h4>Temporada ideal</h4>
    <p>De noviembre a abril es la temporada seca con mares en calma y cielos azules. Mayo-octubre es la temporada de lluvias, con precios más bajos pero oleaje variable.</p>
    <h4>Over-water vs Beach bungalow</h4>
    <p>Los bungalows sobre el agua son icónicos pero pueden ser ruidosos si hay viento. Los bungalows de playa son más privados y convenientes para madrugar. Los mejores tienen escalera directa al océano.</p>`,
    tips:["Negocia upgrades al hacer check-in","Los delfines son más fáciles de ver al amanecer","El snorkel es mejor que el diving para ver rayas manta","Lleva protector solar mineral, sin químicos dañinos al arrecife"]
  },
  packing: {
    cat:"Tips de Viaje", title:"El arte de empacar: la guía maestra para viajar perfecto",
    date:"25 Marzo 2025", read:"5 min", emoji:"🧳",
    bg:"linear-gradient(135deg,#2e1a00,#6e4010)",
    body:`<p>Empacar bien es una habilidad que toma años perfeccionar. Los viajeros expertos viajan más ligeros, más rápido y con menos estrés. Aquí están todos sus secretos.</p>
    <h4>La regla de los 5-4-3-2-1</h4>
    <p>Para un viaje de 7 días: 5 camisetas, 4 ropa interior, 3 pantalones/faldas, 2 pares de zapatos, 1 abrigo. Con esto cubres casi cualquier situación sin facturar maleta.</p>
    <h4>El método roll vs fold</h4>
    <p>Enrollar la ropa (rolling) ocupa hasta 30% menos espacio y evita arrugas en telas casuales. Doblar (folding) es mejor para camisas formales y trajes. Usa ambos métodos.</p>
    <h4>Los essentials que todos olvidan</h4>
    <p>Adaptador universal de enchufes, bolsas ziplock de varios tamaños, pañuelos de papel, pastillas para el mareo, una tarjeta de banco que no cobre comisiones internacionales, y siempre llevar una copia del pasaporte en el email.</p>`,
    tips:["Siempre lleva ropa de cambio en el equipaje de mano","Las zapatillas rolling bag son tu mejor aliado","Pesa la maleta en casa para evitar sorpresas","Un candado TSA es obligatorio para USA"]
  },
  patagonia: {
    cat:"Aventura Extrema", title:"Patagonia: fin del mundo, principio de todo",
    date:"20 Marzo 2025", read:"9 min", emoji:"🏔️",
    bg:"linear-gradient(135deg,#0a1e3e,#1a4e7e)",
    body:`<p>Hay lugares en el mundo que te cambian por dentro. La Patagonia es uno de ellos. Torres del Paine, El Calafate, el glaciar Perito Moreno... donde el fin del mundo se convierte en el principio de una nueva versión de ti mismo.</p>
    <h4>Torres del Paine: el parque más espectacular</h4>
    <p>El circuito W (5 días) es la ruta más popular y pasa por los Cuernos del Paine, el valle del Francés y las Torres de granite. La O (8-10 días) rodea todo el macizo y es para los más aventureros.</p>
    <h4>El Perito Moreno: el glaciar que avanza</h4>
    <p>A diferencia de la mayoría de glaciares del mundo, el Perito Moreno no retrocede. Escuchar los crujidos del hielo azul y ver los témpanos desplomarse en el agua es una de las experiencias más dramáticas de la naturaleza.</p>
    <h4>Cuándo ir</h4>
    <p>Noviembre-febrero es el verano austral: días larguísimos, temperaturas de 10-20°C y toda la naturaleza en pleno. Marzo-abril tiene menos turistas y colores otoñales espectaculares.</p>`,
    tips:["El viento patagónico es extremo, lleva chubasquero siempre","Reserva las refugios del W Circuit con 6 meses de antelación","La carne patagónica (cordero) es de las mejores del mundo","Puerto Natales es la base ideal para Torres del Paine"]
  }
};

// ════════════════ DOM READY ════════════════
document.addEventListener('DOMContentLoaded', () => {

  // ── CUSTOM CURSOR ──
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx+'px'; dot.style.top = my+'px';
  });
  function animateCursor(){
    rx += (mx-rx)*0.12; ry += (my-ry)*0.12;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  document.querySelectorAll('a,button,input,select,textarea,.dest-card,.tour-card-v2,.exp-card-v2,.blog-card-v2,.cs-v2').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ring.style.width='60px';ring.style.height='60px';dot.style.transform='translate(-50%,-50%) scale(2)'});
    el.addEventListener('mouseleave',()=>{ring.style.width='36px';ring.style.height='36px';dot.style.transform='translate(-50%,-50%) scale(1)'});
  });

  // ── LOADER ──
  document.body.style.overflow = 'hidden';
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      // Show cookie banner after load
      setTimeout(() => {
        if (!localStorage.getItem('av_cookies')) {
          document.getElementById('cookieBanner').classList.add('show');
        }
      }, 2000);
    }, 2200);
  });

  // ── PROGRESS BAR ──
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const winH = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / winH * 100) + '%';
  });

  // ── NAVBAR ──
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    updateActiveNav();
  });
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // ── SMOOTH SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

  // ── SCROLL TO TOP ──
  scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

  // ── ACTIVE NAV ──
  function updateActiveNav(){
    const sections = document.querySelectorAll('section[id]');
    const navLinkEls = document.querySelectorAll('.nav-link');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top <= 120 && rect.bottom >= 120){
        navLinkEls.forEach(l => l.classList.remove('nav-active'));
        const active = document.querySelector(`.nav-link[href="#${section.id}"]`);
        if(active) active.classList.add('nav-active');
      }
    });
  }

  // ── REVEAL ON SCROLL ──
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('revealed'); revealObs.unobserve(e.target); }
    });
  }, {threshold:0.1, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal-up,.reveal-slide,.reveal-card').forEach(el => revealObs.observe(el));

  // ── COUNTERS ──
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ animateCounter(e.target); counterObs.unobserve(e.target); } });
  }, {threshold:0.5});
  document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObs.observe(el));
  function animateCounter(el){
    const target = parseInt(el.dataset.target);
    const step = target/60;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current+step, target);
      el.textContent = Math.floor(current).toLocaleString();
      if(current >= target) clearInterval(timer);
    }, 25);
  }

  // World map stats counter
  const wmsObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const el = e.target;
        const text = el.textContent;
        const num = parseInt(text);
        if(!isNaN(num)){
          const suffix = text.replace(/[0-9]/g,'');
          let cur = 0; const step = num/60;
          const t = setInterval(() => { cur=Math.min(cur+step,num); el.textContent=Math.floor(cur)+suffix; if(cur>=num)clearInterval(t); }, 25);
        }
        wmsObs.unobserve(el);
      }
    });
  },{threshold:0.5});
  document.querySelectorAll('.wms-num').forEach(el => wmsObs.observe(el));

  // ── DESTINATION FILTER ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const destCards = document.querySelectorAll('.dest-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      destCards.forEach(card => {
        const cat = card.dataset.cat;
        if(filter==='all' || cat===filter){
          card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
          card.style.display = '';
          setTimeout(() => { card.style.opacity='1'; card.style.transform='translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
          setTimeout(() => { card.style.display='none'; }, 400);
        }
      });
    });
  });

  // ── CAROUSEL ──
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsWrap = document.getElementById('carouselDots');
  let currentSlide = 0;
  let autoPlay;
  const totalReal = 8;

  // Build dots
  for(let i=0;i<totalReal;i++){
    const d = document.createElement('div');
    d.className = 'cs-dot' + (i===0?' active':'');
    d.onclick = () => { goToSlide(i); resetAutoPlay(); };
    dotsWrap.appendChild(d);
  }

  function getSlideW(){
    const s = track.querySelector('.cs-v2');
    if(!s) return 360;
    return s.offsetWidth + 24;
  }
  function goToSlide(idx){
    const max = totalReal - 3;
    currentSlide = Math.max(0, Math.min(idx, max));
    track.style.transform = `translateX(-${currentSlide * getSlideW()}px)`;
    document.querySelectorAll('.cs-dot').forEach((d,i) => d.classList.toggle('active', i===currentSlide));
  }
  nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide >= totalReal-3 ? 0 : currentSlide+1);
    resetAutoPlay();
  });
  prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide <= 0 ? totalReal-3 : currentSlide-1);
    resetAutoPlay();
  });
  function startAutoPlay(){ autoPlay = setInterval(() => { goToSlide(currentSlide >= totalReal-3 ? 0 : currentSlide+1); }, 3800); }
  function resetAutoPlay(){ clearInterval(autoPlay); startAutoPlay(); }
  startAutoPlay();

  // Touch/drag for carousel
  let startX=0;
  track.addEventListener('touchstart', e => { startX=e.touches[0].clientX; });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if(Math.abs(diff)>50){ if(diff>0) nextBtn.click(); else prevBtn.click(); }
  });
  let isDrag=false;
  track.addEventListener('mousedown', e => { isDrag=true; startX=e.pageX; });
  track.addEventListener('mousemove', e => {
    if(!isDrag) return;
    if(Math.abs(startX-e.pageX)>40){ isDrag=false; if(startX>e.pageX) nextBtn.click(); else prevBtn.click(); }
  });
  track.addEventListener('mouseup', () => isDrag=false);
  track.addEventListener('mouseleave', () => isDrag=false);

  // ── TYPEWRITER ──
  const phrases = [
    "Creamos experiencias de viaje extraordinarias.",
    "Tu sueño de viajar es nuestra misión.",
    "Cada destino, una historia única.",
    "El mundo es tuyo. Descúbrelo con nosotros.",
    "Más de 500 destinos te esperan."
  ];
  const subtitleEl = document.getElementById('heroSubtitle');
  if(subtitleEl){
    let pIdx=0, cIdx=0, deleting=false;
    function typeWriter(){
      const current = phrases[pIdx];
      if(!deleting){ subtitleEl.textContent=current.slice(0,cIdx+1); cIdx++; if(cIdx===current.length){ deleting=true; setTimeout(typeWriter,2800); return; } }
      else { subtitleEl.textContent=current.slice(0,cIdx-1); cIdx--; if(cIdx===0){ deleting=false; pIdx=(pIdx+1)%phrases.length; } }
      setTimeout(typeWriter, deleting?35:65);
    }
    setTimeout(typeWriter, 2500);
  }

  // ── SPARKLE EFFECT ──
  document.querySelector('.hero-content')?.addEventListener('mousemove', e => {
    if(Math.random() > 0.85) createSparkle(e.clientX, e.clientY);
  });
  function createSparkle(x, y){
    const s = document.createElement('div');
    const colors = ['#c9a84c','#e8c96e','#ffffff','#e8834d'];
    const color = colors[Math.floor(Math.random()*colors.length)];
    s.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:${4+Math.random()*8}px;height:${4+Math.random()*8}px;background:${color};border-radius:50%;pointer-events:none;z-index:9999;animation:sparkle 0.8s ease-out forwards;transform:translate(-50%,-50%)`;
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),800);
  }
  if(!document.querySelector('#sparkle-kf')){
    const sk = document.createElement('style');
    sk.id='sparkle-kf';
    sk.textContent=`@keyframes sparkle{0%{opacity:1;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-${30+Math.random()*50}px) scale(0.2)}}`;
    document.head.appendChild(sk);
  }

  // ── PARALLAX ──
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    const earth = document.querySelector('.scene-earth');
    if(earth) earth.style.transform = `translateY(${sy*0.2}px) rotate(${sy*0.01}deg)`;
    const palms = document.querySelectorAll('.scene-palms');
    palms.forEach(p => { p.style.transform = `translateY(${sy*0.1}px)`; });
  });

  // ── CARD 3D TILT ──
  document.querySelectorAll('.tour-card-v2, .story-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX-rect.left-rect.width/2)/rect.width*6;
      const y = (e.clientY-rect.top-rect.height/2)/rect.height*6;
      card.style.transform = `translateY(-8px) rotateX(${-y}deg) rotateY(${x}deg)`;
      card.style.transition = 'transform 0.1s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'all 0.4s cubic-bezier(0.4,0,0.2,1)';
    });
  });

}); // END DOMContentLoaded

// ════════════════ DESTINATION SEARCH ════════════════
function showSuggestions(){
  const input = document.getElementById('destInput');
  const container = document.getElementById('ssbSuggestions');
  const val = input.value.toLowerCase().trim();

  if(val.length < 1){ container.classList.remove('open'); return; }

  const matches = DESTINATIONS.filter(d =>
    d.name.toLowerCase().includes(val) ||
    d.country.toLowerCase().includes(val) ||
    d.region.toLowerCase().includes(val)
  ).slice(0, 6);

  if(matches.length === 0){ container.classList.remove('open'); return; }

  container.innerHTML = matches.map(d => `
    <div class="sug-item" onclick="selectDestination('${d.name}')">
      <span class="sug-flag">${d.emoji}</span>
      <div class="sug-info">
        <strong>${d.name}</strong>
        <span>${d.country} • ${d.region} • ${d.days} días</span>
      </div>
      <span class="sug-price">${d.price}</span>
    </div>
  `).join('');
  container.classList.add('open');
}

function selectDestination(name){
  document.getElementById('destInput').value = name;
  document.getElementById('ssbSuggestions').classList.remove('open');
}

function confirmDestination(){
  const destVal = document.getElementById('destInput').value.trim();
  const date = document.getElementById('dateInput').value;
  const travelers = document.getElementById('travelersSelect').value;
  const budget = document.getElementById('budgetSelect').value;

  if(!destVal){ 
    document.getElementById('destInput').focus();
    document.getElementById('destInput').style.borderColor = '#e8834d';
    setTimeout(()=>{ document.getElementById('destInput').style.borderColor = ''; },2000);
    return; 
  }

  const found = DESTINATIONS.find(d => d.name.toLowerCase() === destVal.toLowerCase());
  const card = document.getElementById('destConfirmedCard');
  const icon = document.getElementById('dccIcon');
  const title = document.getElementById('dccTitle');
  const details = document.getElementById('dccDetails');
  const price = document.getElementById('dccPrice');

  icon.textContent = found ? found.emoji : '✈️';
  title.textContent = `¡Destino Confirmado: ${destVal}!`;
  
  const budgetLabels = {economico:'💚 Económico', intermedio:'💛 Intermedio', lujo:'🥇 Lujo', ultra:'💎 Ultra Lujo'};
  const dateStr = date ? new Date(date+'T12:00').toLocaleDateString('es',{weekday:'long',year:'numeric',month:'long',day:'numeric'}) : 'Fecha flexible';
  
  details.innerHTML = `
    📅 ${dateStr} &nbsp;|&nbsp; 
    👥 ${travelers} &nbsp;|&nbsp; 
    ${budgetLabels[budget] || budget}
    ${found ? `<br>⏱ ${found.days} días sugeridos &nbsp;|&nbsp; 🌡 ${found.temp}` : ''}
  `;
  price.textContent = found ? found.price + ' por persona' : 'Cotización personalizada';

  card.style.display = 'flex';
  
  // Also pre-fill booking form
  const bkDest = document.getElementById('bkDest');
  if(bkDest) bkDest.value = destVal;
  if(date){ const bkDate = document.getElementById('bkDate'); if(bkDate) bkDate.value = date; }
  
  // Close suggestions
  document.getElementById('ssbSuggestions').classList.remove('open');
  
  // Scroll to confirmed card
  card.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function clearSearch(){
  document.getElementById('destInput').value = '';
  document.getElementById('destConfirmedCard').style.display = 'none';
  document.getElementById('ssbSuggestions').classList.remove('open');
  document.getElementById('destInput').focus();
}

function goToBookingWithDest(){
  document.getElementById('booking').scrollIntoView({behavior:'smooth'});
  closeDestCard();
}
function closeDestCard(){
  document.getElementById('destConfirmedCard').style.display = 'none';
}

// Close suggestions when clicking outside
document.addEventListener('click', e => {
  if(!e.target.closest('.ssb-dest')){
    document.getElementById('ssbSuggestions')?.classList.remove('open');
  }
});

// ════════════════ BOOKING FORM ════════════════
function handleBooking(e){
  e.preventDefault();
  const name = document.getElementById('bkName').value;
  const email = document.getElementById('bkEmail').value;
  const dest = document.getElementById('bkDest').value;
  const date = document.getElementById('bkDate').value;
  const travelers = document.getElementById('bkTravelers').value;
  const budget = document.getElementById('bkBudget').value;

  // Generate reference number
  const ref = 'AV' + Date.now().toString(36).toUpperCase().slice(-8);
  
  const found = DESTINATIONS.find(d => dest.includes(d.name));
  const dateStr = date ? new Date(date+'T12:00').toLocaleDateString('es',{weekday:'long',year:'numeric',month:'long',day:'numeric'}) : 'Por coordinar';

  document.getElementById('modalBkDetail').innerHTML = `
    <p><strong>👤 Viajero:</strong> ${name}</p>
    <p><strong>📧 Email:</strong> ${email}</p>
    <p><strong>🗺️ Destino:</strong> ${dest || 'Por definir'}</p>
    <p><strong>📅 Fecha:</strong> ${dateStr}</p>
    <p><strong>👥 Viajeros:</strong> ${travelers}</p>
    <p><strong>💰 Presupuesto:</strong> ${budget}</p>
    ${found ? `<p><strong>💵 Precio estimado:</strong> ${found.price}</p>` : ''}
  `;
  document.getElementById('bookingRef').textContent = ref;
  
  openModal('successModal');
  document.getElementById('bookingForm').reset();
}

// ════════════════ EXPERIENCE MODAL ════════════════
function openExperience(key){
  const exp = EXPERIENCES[key];
  if(!exp) return;

  const content = `
    <div class="exp-modal-header">
      <div class="emh-icon" style="background:${exp.color}">${exp.icon}</div>
      <div class="emh-title">
        <h3>${exp.title}</h3>
        <div class="exp-price-big">${exp.price} <strong>${exp.pricepp}</strong></div>
      </div>
    </div>
    <p style="color:var(--text-light);line-height:1.8;margin-bottom:1.5rem;font-size:1rem">${exp.desc}</p>
    <div class="exp-plan-grid">
      <div class="epg-item">
        <h4>✅ Incluye</h4>
        <ul>${exp.includes.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="epg-item">
        <h4>❌ No incluye</h4>
        <ul>${exp.not_includes.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="exp-plan-grid" style="grid-template-columns:1fr">
      <div class="epg-item">
        <h4>🌍 Destinos disponibles</h4>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap">${exp.destinations.map(d=>`<span style="background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.3);border-radius:50px;padding:4px 12px;font-family:'Josefin Sans',sans-serif;font-size:0.7rem;color:var(--navy)">${d}</span>`).join('')}</div>
      </div>
    </div>
    <div class="exp-itinerary">
      <h4>📅 Itinerario tipo (${exp.days.length} días principales)</h4>
      ${exp.days.map(d=>`
        <div class="exp-day">
          <div class="exp-day-num">D${d.n}</div>
          <div class="exp-day-info"><strong>${d.title}</strong><span>${d.desc}</span></div>
        </div>
      `).join('')}
    </div>
    <div class="exp-modal-footer">
      <a href="#booking" class="btn-primary" onclick="closeModal('expModal')"><i class="fas fa-paper-plane"></i> Reservar esta experiencia</a>
      <button class="btn-secondary-dark" onclick="closeModal('expModal')">Cerrar</button>
    </div>
  `;
  document.getElementById('expModalContent').innerHTML = content;
  openModal('expModal');
}

// ════════════════ ARTICLE MODAL ════════════════
function openArticle(key){
  const art = ARTICLES[key];
  if(!art) return;
  
  const content = `
    <div class="art-header">
      <span class="art-cat">${art.cat}</span>
      <h3>${art.title}</h3>
      <div class="art-meta">
        <span>📅 ${art.date}</span>
        <span>⏱ ${art.read} lectura</span>
        <span>✍ Aurora Voyages</span>
      </div>
    </div>
    <div class="art-img-ph" style="background:${art.bg}">
      <span style="font-size:5rem">${art.emoji}</span>
      <span style="font-family:'Josefin Sans',sans-serif;font-size:0.6rem;letter-spacing:0.1em;color:rgba(255,255,255,0.4)">📸 Foto: ${art.title}</span>
    </div>
    <div class="art-body">
      ${art.body}
      <div class="art-tips">
        <h5>💡 Tips de Aurora Voyages</h5>
        <ul>${art.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
      </div>
      <p style="margin-top:1rem"><em>¿Te inspiraste? Reserva ya tu viaje con Aurora Voyages y haz realidad este destino.</em></p>
    </div>
    <div style="margin-top:1.5rem;padding-top:1.5rem;border-top:2px solid var(--ivory-dark);display:flex;gap:1rem">
      <a href="#booking" class="btn-primary" onclick="closeModal('articleModal')"><i class="fas fa-plane"></i> Reservar este destino</a>
      <button class="btn-secondary-dark" onclick="closeModal('articleModal')">Cerrar artículo</button>
    </div>
  `;
  document.getElementById('articleContent').innerHTML = content;
  openModal('articleModal');
}

// ════════════════ NEWSLETTER ════════════════
function handleNewsletter(e){
  e.preventDefault();
  openModal('newsletterModal');
  e.target.reset();
}

// ════════════════ MODAL UTILITIES ════════════════
function openModal(id){
  document.getElementById(id).classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeModal(id){
  document.getElementById(id).classList.remove('show');
  document.body.style.overflow = '';
}
// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if(e.target === overlay) closeModal(overlay.id);
  });
});
// ESC key
document.addEventListener('keydown', e => {
  if(e.key==='Escape') document.querySelectorAll('.modal-overlay.show').forEach(m=>closeModal(m.id));
});

// ════════════════ LEGAL MODALS ════════════════
function openPrivacy(){ openModal('privacyModal'); }
function openTerms(){ openModal('termsModal'); }
function openCookies(){ openModal('cookiesModal'); }

// ════════════════ COOKIES ════════════════
function acceptAllCookies(){
  localStorage.setItem('av_cookies','all');
  document.getElementById('cookieBanner').classList.remove('show');
}
function acceptCookies(){
  const analytics = document.getElementById('analyticsCk')?.checked;
  const marketing = document.getElementById('marketingCk')?.checked;
  localStorage.setItem('av_cookies', JSON.stringify({analytics, marketing}));
  closeModal('cookiesModal');
  document.getElementById('cookieBanner').classList.remove('show');
}

// ════════════════ SCROLL TO BOOKING ════════════════
function scrollToBooking(){
  document.getElementById('booking').scrollIntoView({behavior:'smooth'});
}

// ════════════════ FOOTER LINKS (SCROLL) ════════════════
document.querySelectorAll('.fc-links a[href^="#"], .fbb-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if(href && href.startsWith('#') && href.length > 1){
      const target = document.querySelector(href);
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    }
  });
});

// ════════════════ AIRLINE WINDOW PARALLAX ════════════════
document.querySelectorAll('.av-window').forEach((win, i) => {
  let dir = i%2===0 ? 1 : -1;
  win.addEventListener('mousemove', e => {
    const rect = win.getBoundingClientRect();
    const x = (e.clientX-rect.left-rect.width/2)/rect.width*12*dir;
    const y = (e.clientY-rect.top-rect.height/2)/rect.height*12;
    win.style.transform = `scale(1.06) translateX(-5px) rotateX(${-y}deg) rotateY(${x}deg)`;
    win.style.transition = 'transform 0.1s ease';
  });
  win.addEventListener('mouseleave', () => {
    win.style.transform = '';
    win.style.transition = 'transform 0.4s ease';
  });
});

// ════════════════ DYNAMIC PLANE TRAILS ════════════════
function spawnPlanePath(){
  const hero = document.querySelector('.world-scene');
  if(!hero) return;
  const trail = document.createElement('div');
  const top = 15 + Math.random()*50;
  const dur = 10 + Math.random()*8;
  trail.style.cssText = `position:absolute;top:${top}%;left:-100px;width:80px;height:1px;border-top:1px dashed rgba(201,168,76,0.2);pointer-events:none;animation:flyTrail ${dur}s linear forwards;z-index:1`;
  hero.appendChild(trail);
  setTimeout(()=>trail.remove(), dur*1000+500);
}
if(!document.querySelector('#trail-kf')){
  const tk = document.createElement('style');
  tk.id='trail-kf';
  tk.textContent=`@keyframes flyTrail{0%{left:-100px;width:0;opacity:0}10%{opacity:1;width:80px}90%{opacity:0.4}100%{left:110%;width:100px;opacity:0}}`;
  document.head.appendChild(tk);
}
setInterval(spawnPlanePath, 4500);

// ════════════════ DEST CARD MOUSE GLOW ════════════════
document.querySelectorAll('.dest-card,.exp-card-v2,.blog-card-v2').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX-rect.left)/rect.width)*100;
    const y = ((e.clientY-rect.top)/rect.height)*100;
    card.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, rgba(201,168,76,0.07), transparent 60%)`;
  });
  card.addEventListener('mouseleave', () => { card.style.backgroundImage=''; });
});

console.log('%c✈ AURORA VOYAGES v2 %c— Todos los sistemas operativos 🌍',
  'color:#c9a84c;font-size:16px;font-weight:bold;',
  'color:#666;font-size:12px;');
