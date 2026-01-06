// === SCRIPT PRINCIPAL EN ESPAÑOL ===

// Variables globales
let kissCount = 0;
let musicPlaying = false;
let audioElement = null;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    setupEventListeners();
    startFloatingHearts();
    loadKissCount();
});

// Inicializar página con configuración
function initializePage() {
    // Actualizar nombre de la pareja en todo el sitio
    const partnerNameElements = document.querySelectorAll('.partner-name');
    partnerNameElements.forEach(el => {
        el.textContent = CONFIG.partnerName;
    });

    // Actualizar subtítulo
    const subtitleEl = document.querySelector('.subtitle');
    if (subtitleEl) {
        subtitleEl.textContent = CONFIG.messages.subtitle;
    }

    // Actualizar mensaje de nota de amor
    const loveNoteEl = document.querySelector('.love-note-text');
    if (loveNoteEl) {
        loveNoteEl.textContent = CONFIG.messages.loveNote;
    }

    // Actualizar títulos de secciones
    updateSectionTitles();

    // Cargar recuerdos
    loadMemories();

    // Configurar medidor de amor
    setupLoveMeter();

    // Configurar personajes
    setupCharacters();

    // Inicializar música si está habilitada
    if (CONFIG.music.enabled) {
        initializeMusic();
    }
}

// Actualizar títulos de secciones
function updateSectionTitles() {
    const sections = CONFIG.messages.sections;

    document.querySelectorAll('[data-section]').forEach(el => {
        const sectionKey = el.dataset.section;
        if (sections[sectionKey]) {
            el.textContent = sections[sectionKey];
        }
    });
}

// Cargar recuerdos en la galería
function loadMemories() {
    const memoriesGrid = document.querySelector('.memories-grid');
    if (!memoriesGrid) return;

    memoriesGrid.innerHTML = '';

    CONFIG.memories.forEach((memory, index) => {
        const memoryCard = document.createElement('div');
        memoryCard.className = 'memory-card';
        memoryCard.innerHTML = `
            <span class="memory-icon">${memory.icon}</span>
            <h3>${memory.title}</h3>
            <p>${memory.description}</p>
        `;

        memoryCard.addEventListener('click', () => {
            showMemoryMessage(memory.specialMessage);
            createSparkles(memoryCard);
        });

        memoriesGrid.appendChild(memoryCard);
    });
}

// Configurar medidor de amor
function setupLoveMeter() {
    const meterFill = document.querySelector('.meter-fill');
    if (meterFill) {
        meterFill.style.width = '100%';
        meterFill.innerHTML = `<span>${CONFIG.loveMeterPercentage}% - ${CONFIG.loveMeterText}</span>`;
    }
}

// Configurar personajes
function setupCharacters() {
    const characters = document.querySelectorAll('.character');

    characters.forEach((char, index) => {
        const isPartner = index === 0;
        const charData = isPartner ? CONFIG.characters.partner : CONFIG.characters.you;

        const nameEl = char.querySelector('.character-name');
        const descEl = char.querySelector('.character-description');

        if (nameEl) nameEl.textContent = charData.name;
        if (descEl) descEl.textContent = charData.description;

        char.addEventListener('click', () => {
            showMessage(charData.clickMessage);
            createHeartBurst(char);
        });
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Botón de nota de amor
    const loveButton = document.querySelector('#love-button');
    if (loveButton) {
        loveButton.addEventListener('click', toggleLoveNote);
    }

    // Botón de enviar beso
    const kissButton = document.querySelector('#kiss-button');
    if (kissButton) {
        kissButton.addEventListener('click', sendKiss);
    }

    // Botón de música
    const musicButton = document.querySelector('#music-control');
    if (musicButton) {
        musicButton.addEventListener('click', toggleMusic);
    }

    // Evento de clic en el documento para corazones
    if (CONFIG.effects.floatingHearts) {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('button') && !e.target.closest('a')) {
                createFloatingHeart(e.pageX, e.pageY);
            }
        });
    }
}

// Toggle nota de amor
function toggleLoveNote() {
    const loveNote = document.querySelector('.love-note');
    if (loveNote) {
        loveNote.classList.toggle('show');

        if (loveNote.classList.contains('show')) {
            createHeartBurst(loveNote);
        }
    }
}

// Enviar beso
function sendKiss() {
    kissCount++;
    saveKissCount();
    updateKissDisplay();

    // Crear animación de beso
    createKissAnimation();

    // Mostrar mensaje especial en hitos
    checkKissMilestone();
}

// Actualizar display del contador de besos
function updateKissDisplay() {
    const kissCountEl = document.querySelector('.kiss-count');
    if (kissCountEl) {
        kissCountEl.textContent = kissCount;

        // Animación de actualización
        kissCountEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            kissCountEl.style.transform = 'scale(1)';
        }, 200);
    }
}

// Verificar hitos del contador de besos
function checkKissMilestone() {
    const messages = CONFIG.messages.kissMessages;
    let message = '';

    if (kissCount === 10) {
        message = messages.milestone10;
    } else if (kissCount === 50) {
        message = messages.milestone50;
    } else if (kissCount === 100) {
        message = messages.milestone100;
    } else if (kissCount === 500) {
        message = messages.milestone500;
    }

    if (message) {
        showMessage(message);
        createCelebration();
    }
}

// Crear animación de beso
function createKissAnimation() {
    const kissButton = document.querySelector('#kiss-button');
    if (!kissButton) return;

    const kiss = document.createElement('div');
    kiss.textContent = '💋';
    kiss.style.position = 'fixed';
    kiss.style.left = kissButton.getBoundingClientRect().left + 'px';
    kiss.style.top = kissButton.getBoundingClientRect().top + 'px';
    kiss.style.fontSize = '3rem';
    kiss.style.pointerEvents = 'none';
    kiss.style.zIndex = '9999';
    kiss.style.animation = 'floatHeart 2s ease-out forwards';

    document.body.appendChild(kiss);

    setTimeout(() => {
        kiss.remove();
    }, 2000);
}

// Guardar contador de besos
function saveKissCount() {
    localStorage.setItem('kissCount', kissCount.toString());
}

// Cargar contador de besos
function loadKissCount() {
    const saved = localStorage.getItem('kissCount');
    if (saved) {
        kissCount = parseInt(saved, 10);
        updateKissDisplay();
    }
}

// Crear corazón flotante
function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💜';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, CONFIG.animations.heartSpeed);
}

// Iniciar corazones flotantes automáticos
function startFloatingHearts() {
    if (!CONFIG.effects.floatingHearts) return;

    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight;
        createFloatingHeart(x, y);
    }, CONFIG.animations.heartFrequency);
}

// Crear explosión de corazones
function createHeartBurst(element) {
    if (!CONFIG.effects.heartBurst) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const angle = (Math.PI * 2 * i) / 10;
            const distance = 50;
            const x = centerX + Math.cos(angle) * distance;
            const y = centerY + Math.sin(angle) * distance;

            createFloatingHeart(x, y);
        }, i * 50);
    }
}

// Crear destellos
function createSparkles(element) {
    if (!CONFIG.effects.sparkles) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < CONFIG.animations.sparkleCount; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = centerX + (Math.random() - 0.5) * 100 + 'px';
            sparkle.style.top = centerY + (Math.random() - 0.5) * 100 + 'px';
            sparkle.style.fontSize = '2rem';
            sparkle.style.pointerEvents = 'none';

            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }, i * 100);
    }
}

// Crear celebración
function createCelebration() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createFloatingHeart(x, y);

            if (i % 2 === 0) {
                const sparkle = document.createElement('div');
                sparkle.textContent = '✨';
                sparkle.style.position = 'fixed';
                sparkle.style.left = x + 'px';
                sparkle.style.top = y + 'px';
                sparkle.style.fontSize = '2rem';
                sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
                sparkle.style.pointerEvents = 'none';
                document.body.appendChild(sparkle);

                setTimeout(() => sparkle.remove(), 1000);
            }
        }, i * 100);
    }
}

// Mostrar mensaje temporal
function showMessage(message) {
    const messageEl = document.createElement('div');
    messageEl.className = 'floating-message';
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(109, 40, 217, 0.95));
        color: white;
        padding: 30px 50px;
        border-radius: 20px;
        font-size: 1.5rem;
        z-index: 10000;
        box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
        border: 2px solid rgba(192, 132, 252, 0.8);
        animation: fadeIn 0.3s ease-out;
        text-align: center;
        max-width: 80%;
    `;

    document.body.appendChild(messageEl);

    setTimeout(() => {
        messageEl.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => messageEl.remove(), 300);
    }, 3000);
}

// Mostrar mensaje de recuerdo
function showMemoryMessage(message) {
    showMessage(message);
}

// Inicializar música
function initializeMusic() {
    audioElement = document.querySelector('#background-music');

    if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = 'background-music';
        audioElement.loop = true;

        // Agregar fuentes de audio
        CONFIG.music.sources.forEach(source => {
            const sourceEl = document.createElement('source');
            sourceEl.src = source;
            audioElement.appendChild(sourceEl);
        });

        document.body.appendChild(audioElement);
    }

    if (CONFIG.music.autoplay) {
        playMusic();
    }
}

// Toggle música
function toggleMusic() {
    if (!audioElement) return;

    if (musicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

// Reproducir música
function playMusic() {
    if (!audioElement) return;

    audioElement.play().catch(err => {
        console.log('No se pudo reproducir la música automáticamente');
    });

    musicPlaying = true;
    updateMusicButton();
}

// Pausar música
function pauseMusic() {
    if (!audioElement) return;

    audioElement.pause();
    musicPlaying = false;
    updateMusicButton();
}

// Actualizar botón de música
function updateMusicButton() {
    const musicIcon = document.querySelector('.music-icon');
    if (musicIcon) {
        musicIcon.textContent = musicPlaying ? '🔊' : '🔇';
    }
}

// Obtener frase romántica aleatoria
function getRandomQuote() {
    const quotes = CONFIG.romanticQuotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Mostrar frase romántica aleatoria
function showRandomQuote() {
    showMessage(getRandomQuote());
}

// Animación CSS adicional (para fadeOut)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(style);