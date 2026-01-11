// ====================================
// SCRIPT PRINCIPAL - script.js
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar
    initializePage();
    setupEventListeners();
    setupFloatingHearts();
    setupMemories();
    setupCharacters();
    setupLoveMeter();
    setupMusicControl();
    setupBirthdayCake();
});

// ====================================
// INICIALIZACIÓN DE LA PÁGINA
// ====================================

function initializePage() {
    // Cargar nombres
    document.querySelector('.partner-name').textContent = CONFIG.partnerName;
    document.querySelectorAll('.character-name')[0].textContent = CONFIG.characters.partner.name;
    document.querySelectorAll('.character-name')[1].textContent = CONFIG.characters.you.name;

    // Cargar descripciones
    document.querySelectorAll('.character-description')[0].textContent = CONFIG.characters.partner.description;
    document.querySelectorAll('.character-description')[1].textContent = CONFIG.characters.you.description;

    // Cargar imágenes de personajes
    const characterImgs = document.querySelectorAll('.character img');
    characterImgs[0].src = CONFIG.characters.partner.image;
    characterImgs[1].src = CONFIG.characters.you.image;

    // Cargar nota de amor
    document.querySelector('.love-note-text').textContent = CONFIG.messages.loveNote;

    // Cargar contador de besos guardado
    loadKissCount();
}

// ====================================
// EVENT LISTENERS
// ====================================

function setupEventListeners() {
    // Botón de nota de amor
    const loveButton = document.getElementById('love-button');
    const loveNote = document.querySelector('.love-note');

    loveButton.addEventListener('click', function() {
        loveNote.classList.toggle('show');
        loveButton.textContent = loveNote.classList.contains('show')
            ? '🙈 Ocultar Nota'
            : '💕 Revelar Nota Especial';

        if (loveNote.classList.contains('show')) {
            createHeartBurst(this);
        }
    });

    // Botón de besos
    const kissButton = document.getElementById('kiss-button');
    kissButton.addEventListener('click', sendKiss);
}

// ====================================
// CONTADOR DE BESOS
// ====================================

let kissCount = 0;

function loadKissCount() {
    if (CONFIG.advanced.saveKissCount) {
        const saved = localStorage.getItem('kissCount');
        if (saved) {
            kissCount = parseInt(saved);
            updateKissDisplay();
        }
    }
}

function sendKiss() {
    kissCount++;
    updateKissDisplay();
    animateKiss();

    if (CONFIG.advanced.saveKissCount) {
        localStorage.setItem('kissCount', kissCount);
    }

    checkKissMilestone();
}

function updateKissDisplay() {
    document.querySelector('.kiss-count').textContent = kissCount;
}

function animateKiss() {
    const button = document.getElementById('kiss-button');
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);

    createFloatingKiss();
}

function checkKissMilestone() {
    const milestones = CONFIG.messages.kissMessages;
    let message = null;

    if (kissCount === 1) message = milestones.milestone1;
    else if (kissCount === 10) message = milestones.milestone10;
    else if (kissCount === 25) message = milestones.milestone25;
    else if (kissCount === 50) message = milestones.milestone50;
    else if (kissCount === 75) message = milestones.milestone75;
    else if (kissCount === 100) message = milestones.milestone100;
    else if (kissCount === 200) message = milestones.milestone200;
    else if (kissCount === 500) message = milestones.milestone500;
    else if (kissCount === 1000) message = milestones.milestone1000;

    if (message) {
        showNotification(message);
        createHeartBurst(document.getElementById('kiss-button'));
    }
}

function createFloatingKiss() {
    const kiss = document.createElement('div');
    kiss.textContent = '💋';
    kiss.style.cssText = `
        position: fixed;
        font-size: 40px;
        pointer-events: none;
        z-index: 9999;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: floatUpKiss 2s ease-out forwards;
    `;
    document.body.appendChild(kiss);

    setTimeout(() => kiss.remove(), 2000);
}

// ====================================
// SISTEMA DE RECUERDOS CON TARJETAS FLIP
// ====================================

function setupMemories() {
    const grid = document.querySelector('.memories-grid');
    grid.innerHTML = '';

    CONFIG.memories.forEach((memory, index) => {
        const card = createFlipCard(memory, index);
        grid.appendChild(card);
    });
}

function createFlipCard(memory, index) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'flip-card-container';
    cardContainer.innerHTML = `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="memory-icon">${memory.icon}</div>
                    <h3>${memory.title}</h3>
                    <p class="flip-hint">Haz click para ver más</p>
                </div>
                <div class="flip-card-back">
                    <div class="memory-image-container">
                        <img src="${memory.image}" alt="${memory.title}" class="memory-image">
                    </div>
                    <div class="memory-content">
                        <p class="memory-description">${memory.description}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    const flipCard = cardContainer.querySelector('.flip-card');
    flipCard.addEventListener('click', () => {
        flipCard.classList.toggle('flipped');
    });

    return cardContainer;
}

// ====================================
// PERSONAJES MEJORADOS
// ====================================

function setupCharacters() {
    const characters = document.querySelectorAll('.character');

    characters.forEach((char, index) => {
        const isPartner = index === 0;
        const config = isPartner ? CONFIG.characters.partner : CONFIG.characters.you;

        // Agregar elementos adicionales
        const traitsDiv = document.createElement('div');
        traitsDiv.className = 'character-traits';
        traitsDiv.innerHTML = config.traits.map(trait =>
            `<span class="trait">${trait}</span>`
        ).join('');

        char.appendChild(traitsDiv);

        // Evento click
        char.addEventListener('click', function() {
            showNotification(config.clickMessage);
            createHeartBurst(this);
        });
    });
}

// ====================================
// MEDIDOR DE AMOR
// ====================================

function setupLoveMeter() {
    const meterFill = document.querySelector('.meter-fill');
    const percentage = CONFIG.loveMeter.percentage;

    if (percentage === '∞' || percentage === 'infinito') {
        meterFill.style.width = '100%';
        meterFill.innerHTML = '<span style="font-size: 24px;">∞</span>';
    } else {
        meterFill.style.width = percentage + '%';
        meterFill.textContent = percentage + '%';
    }

    // Agregar texto debajo
    const meterContainer = document.querySelector('.love-meter');
    const textDiv = document.createElement('div');
    textDiv.className = 'love-meter-text';
    textDiv.innerHTML = `
        <p style="text-align: center; margin-top: 20px; font-size: 1.1rem;">
            ${CONFIG.loveMeter.text}
        </p>
        <p style="text-align: center; margin-top: 10px; opacity: 0.8;">
            ${CONFIG.loveMeter.description}
        </p>
    `;
    meterContainer.appendChild(textDiv);
}

// ====================================
// PASTEL DE CUMPLEAÑOS
// ====================================

function setupBirthdayCake() {
    const cakeSection = document.createElement('section');
    cakeSection.id = 'birthday-section';
    cakeSection.style.cssText = 'text-align: center; padding: 60px 20px; margin-top: 40px;';
    cakeSection.innerHTML = `
        <h2>🎂 Celebración Especial 🎂</h2>
        <p style="font-size: 1.1rem; margin: 20px 0; opacity: 0.9;">
            ¡Haz click en el pastel para una sorpresa!
        </p>
        <div id="cake-container" style="display: inline-block; cursor: pointer; position: relative;">
            <div class="cake-icon" style="font-size: 150px; transition: transform 0.3s;">🎂</div>
        </div>
    `;

    document.querySelector('.container').appendChild(cakeSection);

    const cakeContainer = document.getElementById('cake-container');
    const cakeIcon = cakeContainer.querySelector('.cake-icon');

    cakeContainer.addEventListener('mouseenter', () => {
        cakeIcon.style.transform = 'scale(1.1) rotate(5deg)';
    });

    cakeContainer.addEventListener('mouseleave', () => {
        cakeIcon.style.transform = 'scale(1) rotate(0deg)';
    });

    cakeContainer.addEventListener('click', () => {
        showBirthdayAnimation();
        createConfetti();
    });
}

function showBirthdayAnimation() {
    const overlay = document.createElement('div');
    overlay.className = 'birthday-overlay';
    overlay.innerHTML = `
        <div class="birthday-card">
            <h1 class="birthday-title">🎉 ¡FELIZ CUMPLEAÑOS! 🎉</h1>
            <p class="birthday-message">¡Que todos tus deseos se hagan realidad!</p>
            <p class="birthday-love">Te amo con todo mi corazón natha ❤️</p>
            <div class="birthday-emojis">🎈 🎁 🎊 🎂 🎈</div>
        </div>
    `;

    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.classList.add('show');
    }, 10);

    setTimeout(() => {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 300);
    }, 5000);
}

function createConfetti() {
    const confettiCount = 50;
    const emojis = ['🎉', '🎊', '⭐', '💖', '🎈', '✨', '💜', '🎁'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.cssText = `
            position: fixed;
            top: -50px;
            left: ${Math.random() * 100}%;
            font-size: 30px;
            pointer-events: none;
            z-index: 10000;
            animation: confettiFall ${2 + Math.random() * 2}s linear forwards;
            animation-delay: ${Math.random() * 0.5}s;
        `;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}

// ====================================
// CONTROL DE MÚSICA
// ====================================

function setupMusicControl() {
    const musicControl = document.getElementById('music-control');
    const musicIcon = musicControl.querySelector('.music-icon');
    const audio = document.getElementById('background-music');

    let isPlaying = false;

    musicControl.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            musicIcon.textContent = '🔇';
            isPlaying = false;
        } else {
            audio.play();
            musicIcon.textContent = '🎵';
            isPlaying = true;
        }
    });

    if (CONFIG.music.volume) {
        audio.volume = CONFIG.music.volume;
    }
}

// ====================================
// EFECTOS VISUALES
// ====================================

function setupFloatingHearts() {
    if (!CONFIG.effects.floatingHearts) return;

    setInterval(() => {
        createFloatingHeart();
    }, CONFIG.effects.heartFrequency);
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = CONFIG.effects.heartEmoji;
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = CONFIG.effects.heartSpeed + 'ms';

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), CONFIG.effects.heartSpeed);
}

function createHeartBurst(element) {
    if (!CONFIG.effects.heartBurst) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < CONFIG.effects.burstCount; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💜';
        heart.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            font-size: 24px;
            pointer-events: none;
            z-index: 9999;
            animation: burstHeart 1s ease-out forwards;
        `;

        const angle = (Math.PI * 2 * i) / CONFIG.effects.burstCount;
        const distance = 100;
        heart.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
        heart.style.setProperty('--ty', Math.sin(angle) * distance + 'px');

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1000);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ====================================
// ANIMACIONES CSS DINÁMICAS
// ====================================

const style = document.createElement('style');
style.textContent = `
    @keyframes floatUpKiss {
        to {
            transform: translate(-50%, -200px);
            opacity: 0;
        }
    }
    
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes burstHeart {
        to {
            transform: translate(var(--tx), var(--ty));
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);