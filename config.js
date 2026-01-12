// === CONFIGURACIÓN EN ESPAÑOL - TEMA DARK MORADO ===

const CONFIG = {
    // ====================================
    // INFORMACIÓN PERSONAL
    // ====================================

    partnerName: "Mi Amor",
    yourName: "Jhonsito",
    specialDate: "24 de Enero de 2026",


    // ====================================
    // MENSAJES PRINCIPALES
    // ====================================

    messages: {
        subtitle: "Iluminas mi mundo de formas que las palabras no pueden expresar ✨",
        welcome: "Bienvenido/a a Nuestro Espacio Especial 💜",

        loveNote: `Cada momento contigo es un tesoro que guardo en mi corazón. 
        Eres la razón de mi sonrisa, la luz en mis días más oscuros, 
        y el amor de mi vida. No hay palabras suficientes para describir 
        lo que significas para mí. Contigo he encontrado el amor verdadero, 
        ese que siempre soñé pero nunca creí encontrar. Gracias por existir, 
        por amarme, y por hacer de cada día una aventura inolvidable. 
        Te amo más de lo que jamás podré expresar. 💜`,

        loveDescription: `Este es un lugar creado especialmente para celebrar nuestro amor. 
        Cada rincón aquí está lleno de los momentos que hemos compartido y el amor 
        que seguimos construyendo día a día. Eres mi todo. 💕`,

        kissCounterIntro: "¡Envía besos virtuales a tu amor! 💋",
        memoriesIntro: "Cada momento contigo es especial. Aquí están algunos de nuestros recuerdos más preciados.",
        loveMeterQuestion: "¿Cuánto te amo?",
        charactersIntro: "Somos dos almas que se encontraron en este vasto universo",

        kissMessages: {
            default: "¡Envía besos virtuales! 💋",
            milestone1: "¡Primer beso! ¡Qué emoción! 😘",
            milestone10: "¡10 besos! ¡Qué dulzura tan grande! 💕",
            milestone25: "¡25 besos! ¡Me encantan tus besos! 😍",
            milestone50: "¡50 besos! ¡Esto se está poniendo muy romántico! 💖",
            milestone75: "¡75 besos! ¡No puedo parar de sonreír! 😊",
            milestone100: "¡100 besos! ¡Eres increíble! ¡Te amo tanto! 💜",
            milestone200: "¡200 besos! ¡Wow! ¡Nuestro amor es infinito! ✨",
            milestone500: "¡500 besos! ¡Esto es increíble! ¡Eres mi todo! 🌟",
            milestone1000: "¡1000 besos! ¡Nuestro amor no tiene límites! 🚀💜",
        },

        sections: {
            love: "Nuestro Amor 💜",
            memories: "Nuestros Recuerdos 📸",
            kisses: "Contador de Besos 💋",
            loveMeter: "Medidor de Amor 💖",
            characters: "Nosotros Dos 👫",
            special: "Momentos Especiales ✨",
            quotes: "Frases de Nuestro Amor 💭"
        }
    },


    // ====================================
    // RECUERDOS ESPECIALES CON IMÁGENES
    // ====================================
    // INSTRUCCIONES:
    // 1. Crea una carpeta llamada "images" en la raíz del proyecto
    // 2. Dentro de "images", crea una subcarpeta llamada "memories"
    // 3. Guarda tus fotos ahí con estos nombres exactos:
    //    - recuerdo1.jpg
    //    - recuerdo2.jpg
    //    - recuerdo3.jpg
    //    - recuerdo4.jpg
    //    - recuerdo5.jpg
    //    - recuerdo6.jpg

    memories: [
        {
            icon: "🌟",
            title: "Nuestro Primer Encuentro",
            description: "El día que nuestros caminos se cruzaron por primera vez. Ese momento mágico donde todo comenzó y supimos que algo especial estaba por venir.",
            specialMessage: "Fue amor a primera vista ✨",
            date: "Fecha del encuentro",
            image: "images/memories/a.jpeg"  // ← CAMBIA ESTA RUTA
        },
        {
            icon: "💕",
            title: "Nuestra Primera Cita",
            description: "Ese momento inolvidable donde todo comenzó oficialmente. Risas interminables, conversaciones profundas y una conexión instantánea que cambió nuestras vidas.",
            specialMessage: "No quería que ese día terminara nunca 💖",
            date: "Fecha de la primera cita",
            image: "images/memories/b.jpeg"  // ← CAMBIA ESTA RUTA
        },
        {
            icon: "💜",
            title: "Nuestro Primer Beso",
            description: "El momento en que nuestros labios se encontraron por primera vez. Un instante lleno de magia, nervios y una emoción indescriptible.",
            specialMessage: "Sentí mariposas en el estómago 🦋",
            date: "Fecha del primer beso",
            image: "images/memories/c.jpeg"  // ← CAMBIA ESTA RUTA
        },
        {
            icon: "🎉",
            title: "Nuestro Aniversario",
            description: "Celebrando el amor que hemos construido juntos, día tras día, momento tras momento. Cada año que pasa, te amo más.",
            specialMessage: "Cada día contigo es una celebración 🎊",
            date: "Fecha de aniversario",
            image: "images/memories/d.jpeg"  // ← CAMBIA ESTA RUTA
        },
        {
            icon: "🌙",
            title: "Nuestra Noche Especial",
            description: "Esa noche bajo las estrellas donde nos prometimos estar juntos siempre. Un momento lleno de romance y promesas de amor eterno.",
            specialMessage: "Las estrellas fueron testigos de nuestro amor 🌟",
            date: "Fecha especial",
            image: "images/memories/z.jpeg"  // ← CAMBIA ESTA RUTA
        },
        {
            icon: "🎁",
            title: "Un Regalo Inolvidable",
            description: "Ese momento especial donde me sorprendiste con algo que nunca olvidaré. No fue solo el regalo, sino el amor con el que lo hiciste.",
            specialMessage: "El mejor regalo eres tú 💝",
            date: "Fecha del regalo",
            image: "images/memories/r.jpeg"  // ← CAMBIA ESTA RUTA
        }
    ],


    // ====================================
    // DESCRIPCIÓN DE LOS PERSONAJES CON IMÁGENES
    // ====================================
    // INSTRUCCIONES PARA IMÁGENES DE PERSONAJES:
    // 1. En la carpeta "images", crea una subcarpeta llamada "characters"
    // 2. Guarda las fotos con estos nombres:
    //    - partner.jpg  (foto de tu pareja)
    //    - you.jpg      (tu foto)

    characters: {
        partner: {
            name: "Mi Amor",
            description: "Mi persona favorita en el mundo entero. Mi todo.",
            image: "images/characters/uwu.jpeg",  // ← FOTO DE TU PAREJA
            traits: [
                "Hermoso/a 💜",
                "Cariñoso/a 💕",
                "Increíble ✨",
                "Inteligente 🧠",
                "Divertido/a 😄",
                "Perfecto/a 🌟"
            ],
            clickMessage: "¡Eres absolutamente perfecto/a para mí! 💜",
            longDescription: "Eres la persona más maravillosa que he conocido. Tu sonrisa ilumina mis días, tu risa es mi melodía favorita, y tu amor es mi mayor tesoro."
        },
        you: {
            name: "Yo",
            description: "El/la más afortunado/a del mundo por tenerte",
            image: "images/characters/you.jpeg",  // ← TU FOTO
            traits: [
                "Enamorado/a 💘",
                "Feliz 😊",
                "Agradecido/a 🙏",
                "Dedicado/a 💪",
                "Romántico/a 🌹",
                "Leal 💯"
            ],
            clickMessage: "¡Te amo con todo mi corazón! 💖",
            longDescription: "Cada día me siento más afortunado/a de tenerte en mi vida. Prometo amarte, cuidarte y hacerte feliz por siempre."
        }
    },


    // ====================================
    // MEDIDOR DE AMOR
    // ====================================

    loveMeter: {
        percentage: "∞",
        text: "Nuestro amor es infinito 💜",
        description: "El amor que siento por ti no puede medirse en porcentajes. Es infinito, incondicional y eterno.",
        milestones: [
            { value: 25, message: "Empezando a enamorarse 💕" },
            { value: 50, message: "Muy enamorado/a 💖" },
            { value: 75, message: "Completamente enamorado/a 💜" },
            { value: 100, message: "Amor infinito y eterno ∞" }
        ]
    },


    // ====================================
    // FRASES ROMÁNTICAS ALEATORIAS
    // ====================================

    romanticQuotes: [
        "En un mar de personas, mis ojos siempre te buscarán a ti 👀💜",
        "Eres mi hoy y todos mis mañanas ☀️",
        "Contigo, he encontrado el amor que siempre soñé 💭💕",
        "Cada momento contigo es mi momento favorito ⏰💖",
        "Eres la razón por la que creo en el amor verdadero 💜",
        "Mi lugar favorito es dentro de tus brazos 🤗",
        "Te amo más de lo que las palabras pueden expresar 💬💕",
        "Eres mi siempre y para siempre ♾️",
        "Contigo aprendí que el amor verdadero existe 💍",
        "No necesito el paraíso, te tengo a ti 🌟",
        "Eres mi sueño hecho realidad ✨",
        "Gracias por existir y amarme 🙏💜",
        "Cada día te amo más que ayer pero menos que mañana 📈💕",
        "Tú eres mi persona 👫",
        "Mi corazón es tuyo para siempre 💖",
        "Eres la mejor parte de mi día 🌞",
        "Contigo todo tiene sentido 🧩",
        "Eres mi complemento perfecto 🔗",
        "Te elegiría mil veces más 💯",
        "Eres mi lugar seguro 🏠💜"
    ],


    // ====================================
    // CONFIGURACIÓN DE MÚSICA
    // ====================================
    // INSTRUCCIONES PARA LA MÚSICA:
    // 1. Crea una carpeta llamada "audio" en la raíz del proyecto
    // 2. Guarda tu canción favorita como "love-song.mp3"
    // 3. La ruta debe ser: audio/love-song.mp3

    music: {
        enabled: true,
        autoplay: false,
        volume: 0.5,
        sources: [
            "audio/love-song.mp3"  // ← CAMBIA ESTO SI USAS OTRO NOMBRE
        ],
        title: "Nuestra Canción 🎵"
    },


    // ====================================
    // MENSAJES ADICIONALES
    // ====================================

    additionalMessages: {
        footer: "Hecho con 💜 para el amor de mi vida",
        copyright: "© 2025 - Nuestro Amor Eterno",
        clickLoveButton: "Haz clic para revelar una nota especial 💌",
        sendKiss: "Enviar Beso 💋",
        revealNote: "Revelar Nota Especial 💕",
        hideNote: "Ocultar Nota 🙈",
        playMusic: "Reproducir Música 🎵",
        pauseMusic: "Pausar Música ⏸️",
        loading: "Cargando amor... 💜",
        error: "¡Ups! Algo salió mal 😅",
        success: "¡Listo! ✨",
        clickCharacter: "Haz clic en los personajes para un mensaje especial 💬",
        clickMemory: "Haz clic en cada recuerdo para revivirlo 📸",
        sendKissPrompt: "¡No seas tímido/a! Envía todos los besos que quieras 💋",
        morning: "Buenos días, mi amor ☀️💜",
        afternoon: "Buenas tardes, mi vida 🌤️💕",
        evening: "Buenas noches, mi cielo 🌙✨",
        night: "Dulces sueños, amor mío 💤💖"
    },


    // ====================================
    // CONFIGURACIÓN DE EFECTOS VISUALES
    // ====================================

    effects: {
        floatingHearts: true,
        heartEmoji: "💜",
        heartSpeed: 4000,
        heartFrequency: 2000,
        sparkles: true,
        sparkleCount: 5,
        sparkleEmoji: "✨",
        heartBurst: true,
        burstCount: 10,
        animations: true,
        animationSpeed: "normal",
        hoverEffects: true,
        confetti: true
    },


    // ====================================
    // CONFIGURACIÓN DE COLORES (OPCIONAL)
    // ====================================

    theme: {
        primaryPurple: "#8b5cf6",
        darkPurple: "#6d28d9",
        deepPurple: "#5b21b6",
        lightPurple: "#a78bfa",
        accentPurple: "#c084fc",
        bgBlack: "#0a0a0a",
        bgDark: "#1a1a2e",
        bgDarker: "#0f0f1a",
        bgCard: "#1e1e30",
        textPrimary: "#e9d5ff",
        textSecondary: "#c4b5fd",
        textMuted: "#a78bfa"
    },


    // ====================================
    // CONFIGURACIÓN DE ANIMACIONES
    // ====================================

    animations: {
        heartSpeed: 4000,
        heartFrequency: 2000,
        sparkleCount: 5,
        kissAnimationDuration: 1000,
        messageDisplayTime: 3000,
        fadeInDuration: 500,
        fadeOutDuration: 300,
        particleCount: 20,
        particleSpeed: 2
    },


    // ====================================
    // CONFIGURACIÓN AVANZADA
    // ====================================

    advanced: {
        saveKissCount: true,
        showRandomQuotes: true,
        quoteInterval: 30000,
        soundEffects: {
            enabled: false,
            kissSound: "sounds/kiss.mp3",
            clickSound: "sounds/click.mp3",
            celebrationSound: "sounds/celebration.mp3"
        },
        darkMode: true,
        language: "es",
        dateFormat: "DD/MM/YYYY"
    }
};

// ====================================
// NO MODIFICAR A PARTIR DE AQUÍ
// ====================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return CONFIG.additionalMessages.morning;
    if (hour < 18) return CONFIG.additionalMessages.afternoon;
    if (hour < 22) return CONFIG.additionalMessages.evening;
    return CONFIG.additionalMessages.night;
}

function getRandomRomanticQuote() {
    const quotes = CONFIG.romanticQuotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
}

window.getTimeBasedGreeting = getTimeBasedGreeting;
window.getRandomRomanticQuote = getRandomRomanticQuote;