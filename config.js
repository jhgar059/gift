// === CONFIGURACIÓN EN ESPAÑOL - TEMA DARK MORADO ===

const CONFIG = {
    // ====================================
    // INFORMACIÓN PERSONAL
    // ====================================

    // Nombre de tu pareja (se usará en todo el sitio web)
    partnerName: "Mi Natha",

    // Tu nombre (opcional, para la firma)
    yourName: "Jhonsito",

    // Fecha especial (aniversario, primera cita, etc.)
    specialDate: "24 de Enero de 2026 ",


    // ====================================
    // MENSAJES PRINCIPALES
    // ====================================

    messages: {
        // Subtítulo principal en el header
        subtitle: "Iluminas mi mundo de formas que las palabras no pueden expresar ✨",

        // Mensaje de bienvenida
        welcome: "Bienvenida a Nuestro Espacio Especial 💜",

        // Nota de amor oculta (aparece al hacer clic en el botón)
        loveNote: `Cada momento contigo es un tesoro que guardo en mi corazón. 
        Eres la razón de mi sonrisa, la luz en mis días más oscuros. 
        No hay palabras suficientes para describir 
        lo que significas para mí. Contigo he encontrado
        eso que siempre soñé pero nunca creí encontrar. Gracias por existir, 
        por amarme, y por hacer de cada día una aventura inolvidable. 
        Te amo y te deseo un feliz cumpleaños. 💜`,

        // Descripción de la sección de amor
        loveDescription: `Este es un lugar creado especialmente para celebrar. 
        Cada rincón aquí está lleno de los momentos que hemos compartido y el amor 
        que seguimos construyendo día a día. 💕`,

        // Mensaje del contador de besos
        kissCounterIntro: "¡Envía besos virtuales a tu amor! 💋",

        // Mensaje de la galería de recuerdos
        memoriesIntro: "Cada momento contigo es especial. Aquí están algunos de nuestros recuerdos más preciados.",

        // Mensaje del medidor de amor
        loveMeterQuestion: "¿Cuánto te amo?",

        // Mensaje de los personajes
        charactersIntro: "Somos dos almas que se encontraron en este vasto universo",


        // ====================================
        // MENSAJES DEL CONTADOR DE BESOS
        // ====================================

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


        // ====================================
        // TÍTULOS DE SECCIONES
        // ====================================

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
    // RECUERDOS ESPECIALES
    // ====================================

    memories: [
        {
            icon: "🌟",
            title: "Nuestro Primer Encuentro",
            description: "El día que nuestros caminos se cruzaron por primera vez. Ese momento mágico donde todo comenzó y supimos que algo especial estaba por venir.",
            specialMessage: "Fue amor a primera vista ✨",
            date: "Fecha del encuentro"
        },
        {
            icon: "💕",
            title: "Nuestra Primera Cita",
            description: "Ese momento inolvidable donde todo comenzó oficialmente. Risas interminables, conversaciones profundas y una conexión instantánea que cambió nuestras vidas.",
            specialMessage: "No quería que ese día terminara nunca 💖",
            date: "Fecha de la primera cita"
        },
        {
            icon: "💜",
            title: "Nuestro Primer Beso",
            description: "El momento en que nuestros labios se encontraron por primera vez. Un instante lleno de magia, nervios y una emoción indescriptible.",
            specialMessage: "Sentí mariposas en el estómago 🦋",
            date: "Fecha del primer beso"
        },
        {
            icon: "🎉",
            title: "Nuestra primera llamada",
            description: "Celebrando el amor que hemos construido juntos, día tras día, momento tras momento. Cada año que pasa, te amo más.",
            specialMessage: "Cada día contigo es una celebración 🎊",
            date: "Fecha de aniversario"
        },
        {
            icon: "🌙",
            title: "Nuestra Noche Especial",
            description: "Esa noche bajo las estrellas donde nos prometimos estar juntos siempre. Un momento lleno de romance y promesas de amor eterno.",
            specialMessage: "Las estrellas fueron testigos de nuestro amor 🌟",
            date: "Fecha especial"
        },
        {
            icon: "🎁",
            title: "Un Regalo Inolvidable",
            description: "Ese momento especial donde me sorprendiste con algo que nunca olvidaré. No fue solo el regalo, sino el amor con el que lo hiciste.",
            specialMessage: "El mejor regalo eres tú 💝",
            date: "Fecha del regalo"
        }
    ],


    // ====================================
    // DESCRIPCIÓN DE LOS PERSONAJES
    // ====================================

    characters: {
        partner: {
            name: "Mi Amor", // Nombre de tu pareja
            description: "Mi persona favorita en el mundo entero. Mi todo.",
            traits: [
                "Hermosa 💜",
                "Cariñosa 💕",
                "Increíble ✨",
                "Inteligente 🧠",
                "Divertida 😄",
                "Perfecta 🌟"
            ],
            clickMessage: "¡Eres absolutamente perfecta para mí! 💜",
            longDescription: "Eres la persona más maravillosa que he conocido. Tu sonrisa ilumina mis días, tu risa es mi melodía favorita, y tu amor es mi mayor tesoro."
        },
        you: {
            name: "Yo", // Tu nombre
            description: "El más afortunado del mundo por tenerte",
            traits: [
                "Enamorado 💘",
                "Feliz 😊",
                "Agradecido 🙏",
                "Dedicado 💪",
                "Romántico 🌹",
                "Leal 💯"
            ],
            clickMessage: "¡Te amo con todo mi corazón! 💖",
            longDescription: "Cada día me siento más afortunado de tenerte en mi vida. Prometo amarte, cuidarte y hacerte feliz por siempre."
        }
    },


    // ====================================
    // MEDIDOR DE AMOR
    // ====================================

    loveMeter: {
        percentage: "∞", // Puedes cambiarlo a un número o dejar infinito
        text: "Nuestro amor es infinito 💜",
        description: "El amor que siento por ti no puede medirse en porcentajes. Es infinito, incondicional y eterno.",
        milestones: [
            { value: 25, message: "Empezando a enamorarse 💕" },
            { value: 50, message: "Muy enamorado 💖" },
            { value: 75, message: "Completamente enamorado 💜" },
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
        "Contigo aprendí que el amor verdadero existe 💝",
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

    music: {
        enabled: true, // Cambiar a false para desactivar la música
        autoplay: false, // Cambiar a true para reproducción automática (no recomendado en móviles)
        volume: 0.5, // Volumen de 0.0 a 1.0
        sources: [
            // Agrega aquí las rutas a tus archivos de música
            "audio/love-song.mp3",
            "audio/romantic-music.mp3",
            "audio/our-song.mp3"
        ],
        title: "Nuestra Canción 🎵"
    },


    // ====================================
    // MENSAJES ADICIONALES
    // ====================================

    additionalMessages: {
        // Footer
        footer: "Hecho con 💜 para el amor de mi vida",
        copyright: "© 2025 - Nuestro Amor Eterno",

        // Botones
        clickLoveButton: "Haz clic para revelar una nota especial 💌",
        sendKiss: "Enviar Beso 💋",
        revealNote: "Revelar Nota Especial 💕",
        hideNote: "Ocultar Nota 🙈",
        playMusic: "Reproducir Música 🎵",
        pauseMusic: "Pausar Música ⏸️",

        // Estados
        loading: "Cargando amor... 💜",
        error: "¡Ups! Algo salió mal 😅",
        success: "¡Listo! ✨",

        // Interacciones
        clickCharacter: "Haz clic en los personajes para un mensaje especial 💬",
        clickMemory: "Haz clic en cada recuerdo para revivirlo 📸",
        sendKissPrompt: "¡No seas tímida! Envía todos los besos que quieras 💋",

        // Mensajes especiales de horas
        morning: "Buenos días, mi amor ☀️💜",
        afternoon: "Buenas tardes, mi vida 🌤️💕",
        evening: "Buenas noches, mi cielo 🌙✨",
        night: "Dulces sueños, amor mío 💤💖"
    },


    // ====================================
    // CONFIGURACIÓN DE EFECTOS VISUALES
    // ====================================

    effects: {
        // Corazones flotantes
        floatingHearts: true,
        heartEmoji: "💜", // Puedes cambiarlo a 💕, 💖, 💗, etc.
        heartSpeed: 4000, // Velocidad en milisegundos
        heartFrequency: 2000, // Frecuencia de aparición

        // Destellos/Sparkles
        sparkles: true,
        sparkleCount: 5,
        sparkleEmoji: "✨",

        // Explosión de corazones
        heartBurst: true,
        burstCount: 10,

        // Animaciones generales
        animations: true,
        animationSpeed: "normal", // "slow", "normal", "fast"

        // Efectos de hover
        hoverEffects: true,

        // Confetti en hitos
        confetti: true
    },


    // ====================================
    // CONFIGURACIÓN DE COLORES (OPCIONAL)
    // ====================================

    theme: {
        // Puedes ajustar estos valores si quieres personalizar más
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
        // Duración de animaciones (en milisegundos)
        heartSpeed: 4000,
        heartFrequency: 2000,
        sparkleCount: 5,
        kissAnimationDuration: 1000,
        messageDisplayTime: 3000,
        fadeInDuration: 500,
        fadeOutDuration: 300,

        // Efectos de partículas
        particleCount: 20,
        particleSpeed: 2
    },


    // ====================================
    // CONFIGURACIÓN AVANZADA
    // ====================================

    advanced: {
        // Guardar contador de besos en localStorage
        saveKissCount: true,

        // Mostrar frases aleatorias periódicamente
        showRandomQuotes: true,
        quoteInterval: 30000, // cada 30 segundos

        // Efectos de sonido (si tienes archivos de audio)
        soundEffects: {
            enabled: false,
            kissSound: "sounds/kiss.mp3",
            clickSound: "sounds/click.mp3",
            celebrationSound: "sounds/celebration.mp3"
        },

        // Modo oscuro/claro (ya está en dark por defecto)
        darkMode: true,

        // Idioma
        language: "es", // español

        // Formato de fecha
        dateFormat: "DD/MM/YYYY"
    }
};

// ====================================
// NO MODIFICAR A PARTIR DE AQUÍ
// ====================================

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Función helper para obtener mensaje según hora del día
function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return CONFIG.additionalMessages.morning;
    if (hour < 18) return CONFIG.additionalMessages.afternoon;
    if (hour < 22) return CONFIG.additionalMessages.evening;
    return CONFIG.additionalMessages.night;
}

// Función helper para obtener frase romántica aleatoria
function getRandomRomanticQuote() {
    const quotes = CONFIG.romanticQuotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Hacer funciones disponibles globalmente
window.getTimeBasedGreeting = getTimeBasedGreeting;
window.getRandomRomanticQuote = getRandomRomanticQuote;