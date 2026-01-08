// === SCRIPT PRINCIPAL - VERSIÓN SIMPLE CON IMÁGENES ===

let kissCount = 0;
let musicPlaying = false;
let audioElement = null;

document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    setupEventListeners();
    startFloatingHearts();
    loadKissCount();
    animateLoveMeter();
});

function initializePage() {
    const partnerNameElements = document.querySelectorAll('.partner-name');
    partnerNameElements.forEach(el => {
        el.textContent = CONFIG.partnerName;
    });

    const subtitleEl = document.querySelector('.subtitle');
    if (subtitleEl) {
        subtitleEl.textContent = CONFIG.messages.subtitle;
    }

    const loveNoteEl = document.querySelector('.love-note-text');
    if (loveNoteEl) {
        loveNoteEl.textContent = CONFIG.messages.loveNote;
    }

    updateSectionTitles();
    loadMemories();
    setupLoveMeter();
    setupCharacters();

    if (CONFIG.music.enabled) {
        initializeMusic();
    }
}

function updateSectionTitles() {
    const sections = CONFIG.messages.sections;
    document.querySelectorAll('[data-section]').forEach(el => {
        const sectionKey = el.dataset.section;
        if (sections[sectionKey]) {
            el.textContent = sections[sectionKey];
        }
    });
}

// Cargar recuerdos CON IMÁGENES
function loadMemories() {
    const memoriesGrid = document.querySelector('.memories-grid');
    if (!memoriesGrid) return;

    memoriesGrid.innerHTML = '';

    CONFIG.memories.forEach((memory, index) => {
        const memoryCard = document.createElement('div');
        memoryCard.className = 'memories-card';

        memoryCard.innerHTML = `
            ${memory.image ? 
                `<img src="${memory.image}" alt="${memory.title}" class="memory-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                 <span class="memory-icon" style="display:none;">${memory.icon}</span>` :
                `<span class="memory-icon">${memory.icon}</span>`
            }
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

function setupLoveMeter() {
    const meterFill = document.querySelector('.meter-fill');
    if (meterFill) {
        meterFill.style.width = '0%';
        meterFill.innerHTML = `<span>${CONFIG.loveMeter.percentage} - ${CONFIG.loveMeter.text}</span>`;
    }
}

// ANIMACIÓN DEL MEDIDOR DE AMOR
function animateLoveMeter() {
    const meterFill = document.querySelector('.meter-fill');
    if (!meterFill) return;

    setTimeout(() => {
        meterFill.style.transition = 'width 3s ease-out';
        meterFill.style.width = '100%';

        const interval = setInterval(() => {
            const x = Math.random() * window.innerWidth;
            const y = window.innerHeight * 0.5;
            createFloatingHeart(x, y);
        }, 200);

        setTimeout(() => {
            clearInterval(interval);
            showMessage('¡Nuestro amor es infinito! 💜✨');
        }, 3000);
    }, 500);
}

// Configurar personajes CON IMÁGENES
function setupCharacters() {
    const characters = document.querySelectorAll('.character');

    characters.forEach((char, index) => {
        const isPartner = index === 0;
        const charData = isPartner ? CONFIG.characters.partner : CONFIG.characters.you;

        const nameEl = char.querySelector('.character-name');
        const descEl = char.querySelector('.character-description');
        const imgEl = char.querySelector('img');

        if (nameEl) nameEl.textContent = charData.name;
        if (descEl) descEl.textContent = charData.description;

        // Cambiar la imagen si existe en la configuración
        if (imgEl && charData.image) {
            imgEl.src = charData.image;
            imgEl.onerror = function() {
                // Si la imagen no carga, mantener la imagen por defecto
                console.log(`No se pudo cargar la imagen: ${charData.image}`);
            };
        }

        char.addEventListener('click', () => {
            showMessage(charData.clickMessage);
            createHeartBurst(char);
        });
    });
}

function setupEventListeners() {
    const loveButton = document.querySelector('#love-button');
    if (loveButton) {
        loveButton.addEventListener('click', toggleLoveNote);
    }

    const kissButton = document.querySelector('#kiss-button');
    if (kissButton) {
        kissButton.addEventListener('click', sendKiss);
    }

    // BOTÓN PARA RESETEAR CONTADOR
    const resetKissButton = document.createElement('button');
    resetKissButton.textContent = '🔄 Reiniciar Contador';
    resetKissButton.className = 'btn reset-kiss-btn';
    resetKissButton.style.marginLeft = '10px';
    resetKissButton.style.marginTop = '10px';
    resetKissButton.addEventListener('click', resetKissCount);

    const kissSection = document.querySelector('#kiss-section .kiss-counter');
    if (kissSection) {
        kissSection.appendChild(resetKissButton);
    }

    const musicButton = document.querySelector('#music-control');
    if (musicButton) {
        musicButton.addEventListener('click', toggleMusic);
    }

    if (CONFIG.effects.floatingHearts) {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('button') && !e.target.closest('a')) {
                createFloatingHeart(e.pageX, e.pageY);
            }
        });
    }
}

function toggleLoveNote() {
    const loveNote = document.querySelector('.love-note');
    if (loveNote) {
        loveNote.classList.toggle('show');
        if (loveNote.classList.contains('show')) {
            createHeartBurst(loveNote);
        }
    }
}

function sendKiss() {
    kissCount++;
    saveKissCount();
    updateKissDisplay();
    createKissAnimation();
    checkKissMilestone();
}

// REINICIAR CONTADOR DE BESOS
function resetKissCount() {
    if (confirm('¿Estás seguro/a de que quieres reiniciar el contador de besos? 💋')) {
        kissCount = 0;
        saveKissCount();
        updateKissDisplay();
        showMessage('¡Contador reiniciado! Empecemos de nuevo 💜');
        createCelebration();
    }
}

function updateKissDisplay() {
    const kissCountEl = document.querySelector('.kiss-count');
    if (kissCountEl) {
        kissCountEl.textContent = kissCount;
        kissCountEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            kissCountEl.style.transform = 'scale(1)';
        }, 200);
    }
}

function checkKissMilestone() {
    const messages = CONFIG.messages.kissMessages;
    let message = '';

    if (kissCount === 1) message = messages.milestone1;
    else if (kissCount === 10) message = messages.milestone10;
    else if (kissCount === 25) message = messages.milestone25;
    else if (kissCount === 50) message = messages.milestone50;
    else if (kissCount === 75) message = messages.milestone75;
    else if (kissCount === 100) message = messages.milestone100;
    else if (kissCount === 200) message = messages.milestone200;
    else if (kissCount === 500) message = messages.milestone500;
    else if (kissCount === 1000) message = messages.milestone1000;

    if (message) {
        showMessage(message);
        createCelebration();
    }
}

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
    setTimeout(() => kiss.remove(), 2000);
}

function saveKissCount() {
    localStorage.setItem('kissCount', kissCount.toString());
}

function loadKissCount() {
    const saved = localStorage.getItem('kissCount');
    if (saved) {
        kissCount = parseInt(saved, 10);
        updateKissDisplay();
    }
}

function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💜';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), CONFIG.animations.heartSpeed);
}

function startFloatingHearts() {
    if (!CONFIG.effects.floatingHearts) return;

    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight;
        createFloatingHeart(x, y);
    }, CONFIG.animations.heartFrequency);
}

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
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 100);
    }
}

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

function showMemoryMessage(message) {
    showMessage(message);
}

function initializeMusic() {
    audioElement = document.querySelector('#background-music');

    if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = 'background-music';
        audioElement.loop = true;

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

function toggleMusic() {
    if (!audioElement) return;

    if (musicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    if (!audioElement) return;

    audioElement.play().catch(err => {
        console.log('No se pudo reproducir la música automáticamente');
    });

    musicPlaying = true;
    updateMusicButton();
}

function pauseMusic() {
    if (!audioElement) return;

    audioElement.pause();
    musicPlaying = false;
    updateMusicButton();
}

function updateMusicButton() {
    const musicIcon = document.querySelector('.music-icon');
    if (musicIcon) {
        musicIcon.textContent = musicPlaying ? '🔊' : '🔇';
    }
}

// Estilos adicionales
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

    .memory-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        border: 2px solid rgba(139, 92, 246, 0.3);
        margin-bottom: 15px;
    }

    .reset-kiss-btn {
        background: linear-gradient(135deg, #f59e0b, #dc2626) !important;
        font-size: 0.9rem !important;
        padding: 10px 20px !important;
    }

    .reset-kiss-btn:hover {
        background: linear-gradient(135deg, #dc2626, #f59e0b) !important;
    }

    .character img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
`;
document.head.appendChild(style);