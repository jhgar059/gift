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
    if (CONFIG.characters.partner.image) {
        characterImgs[0].src = CONFIG.characters.partner.image;
    }
    if (CONFIG.characters.you.image) {
        characterImgs[1].src = CONFIG.characters.you.image;
    }

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
// CONTADOR DE BESOS CON BOTÓN RESET
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

    // Agregar botón de reset
    const kissSection = document.querySelector('.kiss-counter');
    const resetBtn = document.createElement('button');
    resetBtn.className = 'btn btn-reset';
    resetBtn.textContent = '🔄 Reiniciar Contador';
    resetBtn.style.cssText = 'margin-top: 15px; background: rgba(139, 92, 246, 0.3); font-size: 0.9rem;';
    resetBtn.addEventListener('click', resetKissCount);
    kissSection.appendChild(resetBtn);
}

function resetKissCount() {
    if (confirm('¿Estás seguro de reiniciar el contador de besos?')) {
        kissCount = 0;
        updateKissDisplay();
        localStorage.setItem('kissCount', 0);
        showNotification('Contador reiniciado 💜');
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
// SISTEMA DE RECUERDOS CON TARJETAS FLIP E IMÁGENES
// ====================================

function setupMemories() {
    const grid = document.querySelector('.memories-grid');
    grid.innerHTML = '';
    grid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 350px)); gap: 25px; margin-top: 30px; justify-content: center;';

    CONFIG.memories.forEach((memory, index) => {
        const card = createFlipCard(memory, index);
        grid.appendChild(card);
    });
}

function createFlipCard(memory, index) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'flip-card-container';
    cardContainer.style.cssText = `
        perspective: 1000px;
        height: 420px;
        max-width: 350px;
        margin: 0 auto;
        cursor: pointer;
    `;

    // Crear placeholder SVG en caso de error
    const placeholderSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%239333ea' width='400' height='300'/%3E%3Ctext fill='%23fff' font-size='60' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(memory.icon)}%3C/text%3E%3C/svg%3E`;

    cardContainer.innerHTML = `
        <div class="flip-card" style="
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
        ">
            <!-- FRENTE DE LA TARJETA -->
            <div class="flip-card-front" style="
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3));
                backdrop-filter: blur(10px);
                border: 2px solid rgba(139, 92, 246, 0.5);
                border-radius: 20px;
                padding: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            ">
                <div style="font-size: 80px; margin-bottom: 20px;">${memory.icon}</div>
                <h3 style="font-size: 1.8rem; margin-bottom: 15px; text-align: center; color: #e9d5ff;">${memory.title}</h3>
                <p style="text-align: center; font-size: 0.9rem; color: #c4b5fd;">Haz click para ver más</p>
            </div>
            
            <!-- REVERSO DE LA TARJETA CON IMAGEN -->
            <div class="flip-card-back" style="
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
                backdrop-filter: blur(10px);
                border: 2px solid rgba(99, 102, 241, 0.5);
                border-radius: 20px;
                overflow: hidden;
                transform: rotateY(180deg);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            ">
                <!-- CONTENEDOR DE IMAGEN -->
                <div style="height: 50%; overflow: hidden; background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.2)); position: relative;">
                    <img 
                        src="${memory.image}" 
                        alt="${memory.title}" 
                        data-memory-id="${index}"
                        style="
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            display: block;
                        "
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    >
                    <!-- PLACEHOLDER SI FALLA LA IMAGEN -->
                    <div style="
                        display: none;
                        width: 100%;
                        height: 100%;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.4));
                        font-size: 80px;
                    ">${memory.icon}</div>
                </div>
                
                <!-- CONTENEDOR DE TEXTO -->
                <div style="padding: 25px; height: 50%; overflow-y: auto; display: flex; flex-direction: column; justify-content: center;">
                    <p style="text-align: center; font-size: 0.95rem; line-height: 1.6; color: #e9d5ff; margin-bottom: 12px;">
                        ${memory.description}
                    </p>
                    <p style="text-align: center; font-style: italic; color: #c4b5fd; font-size: 0.9rem;">
                        ${memory.specialMessage}
                    </p>
                    ${memory.date ? `<p style="text-align: center; margin-top: 10px; font-size: 0.85rem; color: #a78bfa; opacity: 0.8;">📅 ${memory.date}</p>` : ''}
                </div>
            </div>
        </div>
    `;

    const flipCard = cardContainer.querySelector('.flip-card');
    let isFlipped = false;

    // Evento de click para girar la tarjeta
    cardContainer.addEventListener('click', () => {
        isFlipped = !isFlipped;
        flipCard.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';

        // Pequeña animación adicional
        if (isFlipped) {
            createSparkles(cardContainer);

            // Log para debug
            const img = flipCard.querySelector('img');
            if (img && img.style.display !== 'none') {
                console.log(`✅ Imagen cargada: ${memory.title} - ${memory.image}`);
            } else {
                console.warn(`⚠️ Imagen no encontrada: ${memory.title} - ${memory.image}`);
            }
        }
    });

    // Efecto hover
    cardContainer.addEventListener('mouseenter', () => {
        if (!isFlipped) {
            flipCard.style.transform = 'scale(1.02) translateY(-5px)';
        }
    });

    cardContainer.addEventListener('mouseleave', () => {
        if (!isFlipped) {
            flipCard.style.transform = 'scale(1) translateY(0)';
        } else {
            flipCard.style.transform = 'rotateY(180deg)';
        }
    });

    return cardContainer;
}

function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.cssText = `
            position: fixed;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 9999;
            animation: sparkleFloat 1s ease-out forwards;
        `;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// ====================================
// PERSONAJES CON IMÁGENES CORRECTAS
// ====================================

function setupCharacters() {
    const charactersSection = document.querySelector('#characters-section .characters');
    charactersSection.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-top: 30px;';

    const characters = document.querySelectorAll('.character');

    characters.forEach((char, index) => {
        const isPartner = index === 0;
        const config = isPartner ? CONFIG.characters.partner : CONFIG.characters.you;

        char.style.cssText = `
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
            backdrop-filter: blur(10px);
            border: 2px solid rgba(139, 92, 246, 0.4);
            border-radius: 25px;
            padding: 30px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;

        const img = char.querySelector('img');
        if (config.image) {
            img.src = config.image;
        }

        img.style.cssText = `
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid rgba(139, 92, 246, 0.6);
            margin-bottom: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        `;

        img.onerror = function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background: linear-gradient(135deg, #8b5cf6, #ec4899);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 60px;
                margin: 0 auto 20px;
            `;
            placeholder.textContent = isPartner ? '💖' : '😊';
            this.parentNode.insertBefore(placeholder, this);
        };

        if (config.traits) {
            const traitsDiv = document.createElement('div');
            traitsDiv.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 15px;';
            traitsDiv.innerHTML = config.traits.map(trait =>
                `<span style="
                    background: rgba(139, 92, 246, 0.3);
                    padding: 5px 12px;
                    border-radius: 15px;
                    font-size: 0.85rem;
                    border: 1px solid rgba(139, 92, 246, 0.5);
                ">${trait}</span>`
            ).join('');
            char.appendChild(traitsDiv);
        }

        char.addEventListener('mouseenter', () => {
            char.style.transform = 'translateY(-10px) scale(1.05)';
            char.style.boxShadow = '0 15px 40px rgba(139, 92, 246, 0.4)';
        });

        char.addEventListener('mouseleave', () => {
            char.style.transform = 'translateY(0) scale(1)';
            char.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });

        char.addEventListener('click', function() {
            showNotification(config.clickMessage);
            createHeartBurst(this);
        });
    });
}

// ====================================
// MEDIDOR DE AMOR CON ANIMACIÓN AL SCROLL
// ====================================

function setupLoveMeter() {
    const meterFill = document.querySelector('.meter-fill');
    const percentage = CONFIG.loveMeter.percentage;
    const meterSection = document.querySelector('#love-meter-section');

    meterFill.style.width = '0%';
    meterFill.style.transition = 'width 2s ease-out';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    if (percentage === '∞' || percentage === 'infinito') {
                        meterFill.style.width = '100%';
                        meterFill.innerHTML = '<span style="font-size: 24px;">∞</span>';
                    } else {
                        meterFill.style.width = percentage + '%';
                        meterFill.textContent = percentage + '%';
                    }
                }, 200);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(meterSection);

    const meterContainer = document.querySelector('.love-meter');
    const textDiv = document.createElement('div');
    textDiv.style.cssText = 'margin-top: 25px;';
    textDiv.innerHTML = `
        <p style="text-align: center; font-size: 1.3rem; font-weight: 600; color: #e9d5ff;">
            ${CONFIG.loveMeter.text}
        </p>
        <p style="text-align: center; margin-top: 15px; opacity: 0.85; font-size: 1rem; line-height: 1.6; color: #c4b5fd;">
            ${CONFIG.loveMeter.description}
        </p>
    `;
    meterContainer.appendChild(textDiv);
}

// ====================================
// PASTEL DE CUMPLEAÑOS CON ANIMACIÓN COMPLETA
// ====================================

function setupBirthdayCake() {
    const cakeSection = document.createElement('section');
    cakeSection.id = 'birthday-section';
    cakeSection.style.cssText = `
        text-align: center;
        padding: 60px 20px;
        margin-top: 40px;
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
        border-radius: 30px;
    `;
    cakeSection.innerHTML = `
        <h2 style="font-size: 2.5rem; margin-bottom: 20px;">🎂 Celebración Especial 🎂</h2>
        <p style="font-size: 1.2rem; margin: 20px 0; opacity: 0.9; color: #c4b5fd;">
            ¡Haz click en el pastel para una sorpresa!
        </p>
        <div id="cake-container" style="display: inline-block; cursor: pointer; position: relative; margin-top: 20px;">
            <div class="cake-icon" style="font-size: 150px; transition: transform 0.3s;">🎂</div>
        </div>
    `;

    document.querySelector('.container').appendChild(cakeSection);

    const cakeContainer = document.getElementById('cake-container');
    const cakeIcon = cakeContainer.querySelector('.cake-icon');

    cakeContainer.addEventListener('mouseenter', () => {
        cakeIcon.style.transform = 'scale(1.15) rotate(5deg)';
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
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    overlay.innerHTML = `
        <div style="
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(236, 72, 153, 0.95));
            backdrop-filter: blur(10px);
            padding: 60px 80px;
            border-radius: 30px;
            text-align: center;
            border: 4px solid #fbbf24;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            animation: bounceIn 0.6s ease-out;
        ">
            <h1 style="
                font-size: 4rem;
                margin-bottom: 25px;
                color: #fef3c7;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                animation: pulse 1s infinite;
            ">🎉 ¡FELIZ CUMPLEAÑOS! 🎉</h1>
            <p style="
                font-size: 2rem;
                margin-bottom: 20px;
                color: #ffffff;
            ">¡Que todos tus deseos se hagan realidad!</p>
            <p style="
                font-size: 1.8rem;
                color: #fce7f3;
            ">Te amo con todo mi corazón ❤️</p>
            <div style="
                display: flex;
                justify-content: center;
                gap: 20px;
                margin-top: 30px;
                font-size: 3rem;
            ">🎈 🎁 🎊 🎂 🎈</div>
        </div>
    `;

    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 300);
    }, 5000);

    overlay.addEventListener('click', () => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 300);
    });
}

function createConfetti() {
    const confettiCount = 80;
    const emojis = ['🎉', '🎊', '⭐', '💖', '🎈', '✨', '💜', '🎁', '🌟', '💝'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.cssText = `
            position: fixed;
            top: -50px;
            left: ${Math.random() * 100}%;
            font-size: ${20 + Math.random() * 20}px;
            pointer-events: none;
            z-index: 10001;
            animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
            animation-delay: ${Math.random() * 0.8}s;
        `;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
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
            audio.play().catch(e => console.log('Audio play failed:', e));
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
    heart.style.cssText = `
        position: fixed;
        bottom: -50px;
        left: ${Math.random() * 100}%;
        font-size: 30px;
        pointer-events: none;
        z-index: 1;
        animation: floatUp ${CONFIG.effects.heartSpeed}ms linear forwards;
        opacity: 0.7;
    `;

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
        `;

        const angle = (Math.PI * 2 * i) / CONFIG.effects.burstCount;
        const distance = 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        heart.style.animation = `burstHeart 1s ease-out forwards`;
        heart.style.setProperty('--tx', tx + 'px');
        heart.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1000);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(236, 72, 153, 0.95));
        backdrop-filter: blur(10px);
        color: white;
        padding: 20px 40px;
        border-radius: 15px;
        font-size: 1.1rem;
        z-index: 10000;
        border: 2px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);

    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(-100px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ====================================
// ANIMACIONES CSS DINÁMICAS
// ====================================

const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
    
    @keyframes floatUpKiss {
        to {
            transform: translate(-50%, -200px);
            opacity: 0;
        }
    }
    
    @keyframes confettiFall {
        to {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes burstHeart {
        to {
            transform: translate(var(--tx), var(--ty));
            opacity: 0;
        }
    }
    
    @keyframes bounceIn {
        0% {
            transform: scale(0.3);
            opacity: 0;
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
    
    @keyframes sparkleFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);