import React, { useState, useEffect } from 'react';
import { Heart, Camera, Cake } from 'lucide-react';

const LoveWebsite = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [showBirthdayAnimation, setShowBirthdayAnimation] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  // Datos de los mensajes "Nuestro" con rutas corregidas
  const ourMessages = [
    {
      id: 1,
      title: "Nuestro Primer Beso 💋",
      message: "Ese momento donde todo comenzó. El primer beso que marcó el inicio de una linda historia. Cada recuerdo de ese instante sigue haciéndome sonreír.",
      image: "/images/memories/a.jpeg"  // ← Ruta absoluta con "/"
    },
    {
      id: 2,
      title: "Nuestra Primera Cita 🌹",
      message: "Nervios, risas y mariposas en el estómago. Esa primera cita donde supimos que esto era especial. Cada momento contigo es un regalo.",
      image: "/images/memories/b.jpeg"
    },
    {
      id: 3,
      title: "Nuestro Primer Viaje ✈️",
      message: "Aventuras juntos, descubriendo nuevos lugares y creando recuerdos inolvidables. Cada viaje es una oportunidad de crear nuevas historias.",
      image: "/images/memories/c.jpeg"
    },
    {
      id: 4,
      title: "Nuestras llamdas 🎊",
      message: "Esas largas conversaciones que nunca terminan. Hablando de todo y de nada, sintiéndonos más cerca a pesar de la distancia.",
      image: "/images/memories/d.jpeg"
    },
    {
      id: 5,
      title: "Nuestros Momentos Especiales ⭐",
      message: "Esos pequeños momentos que hacen la diferencia. Desde mensajes por la mañana hasta películas en la noche, cada instante contigo es especial.",
      image: "/images/memories/z.jpeg"
    },
    {
      id: 6,
      title: "Nuestro Futuro Juntos 💫",
      message: "Todo lo que está por venir. Sueños, metas y cada momento para compartir. El mejor está por llegar, y lo viviremos juntos.",
      image: "/images/memories/r.jpeg"
    }
  ];

  const toggleCard = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCakeClick = () => {
    setShowBirthdayAnimation(true);
    generateConfetti();

    setTimeout(() => {
      setShowBirthdayAnimation(false);
    }, 5000);
  };

  const generateConfetti = () => {
    const newConfetti = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2
      });
    }
    setConfetti(newConfetti);

    setTimeout(() => setConfetti([]), 4000);
  };

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
    console.warn(`Imagen no encontrada para recuerdo ${id}`);
  };

  const getPlaceholderSVG = (icon) => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%239333ea' width='400' height='300'/%3E%3Ctext fill='%23fff' font-size='60' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${icon}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white">
      {/* Header */}
      <header className="text-center py-16">
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
          Nosotros Dos 👫
        </h1>
        <Heart className="mx-auto text-pink-400 animate-pulse" size={48} />
      </header>

      {/* Sección Nosotros Dos */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Mi Amor Card */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-400/50 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg bg-gradient-to-br from-pink-400 to-purple-400">
                <img
                  src="/images/characters/uwu.jpeg"
                  alt="Mi Amor"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-6xl" style={{ display: 'none' }}>
                  💖
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-center mb-4 text-pink-300">Mi Amor</h2>
            <p className="text-center text-lg text-purple-100">
              Mi persona favorita en el mundo entero. Mi todo.
            </p>
            <div className="mt-6 space-y-2">
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <p className="text-sm text-purple-200">💝 Eres mi razón de sonreír</p>
              </div>
              <div className="bg-pink-500/20 rounded-lg p-3 text-center">
                <p className="text-sm text-pink-200">✨ Mi estrella más brillante</p>
              </div>
            </div>
          </div>

          {/* Yo Card */}
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-indigo-400/50 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-400 shadow-lg bg-gradient-to-br from-indigo-400 to-purple-400">
                <img
                  src="/images/characters/you.jpeg"
                  alt="Yo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-6xl" style={{ display: 'none' }}>
                  😊
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-center mb-4 text-indigo-300">Yo</h2>
            <p className="text-center text-lg text-indigo-100">
              El/la más afortunado/a del mundo por tenerte
            </p>
            <div className="mt-6 space-y-2">
              <div className="bg-indigo-500/20 rounded-lg p-3 text-center">
                <p className="text-sm text-indigo-200">💕 Agradecido por cada día</p>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <p className="text-sm text-purple-200">🌟 Feliz de estar contigo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Nuestros Recuerdos */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <Camera className="text-pink-400" size={48} />
          Nuestros Recuerdos 📸
        </h2>

        {/* Mensaje de ayuda si faltan imágenes */}
        <div className="text-center mb-8 bg-purple-600/20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto border border-purple-400/30">
          <p className="text-purple-200 text-sm">
            💡 <strong>Consejo:</strong> Para ver tus fotos, crea una carpeta <code className="bg-purple-900/50 px-2 py-1 rounded">public/images/memories/</code> y coloca ahí tus imágenes como recuerdo1.jpeg, recuerdo2.jpeg, etc.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ourMessages.map((item) => (
            <div
              key={item.id}
              className="relative h-96 cursor-pointer perspective"
              onClick={() => toggleCard(item.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flippedCards[item.id] ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[item.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Frente de la tarjeta */}
                <div
                  className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-2xl border-2 border-purple-400/50 shadow-2xl p-6 flex flex-col items-center justify-center hover:border-pink-400/70 transition-colors"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-6xl mb-4">❤️</div>
                  <h3 className="text-2xl font-bold text-center mb-3">{item.title}</h3>
                  <p className="text-center text-sm text-purple-200">
                    Haz click para ver más
                  </p>
                </div>

                {/* Reverso de la tarjeta */}
                <div
                  className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-600/40 to-purple-600/40 backdrop-blur-sm rounded-2xl border-2 border-indigo-400/50 shadow-2xl overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-purple-500/30 to-indigo-500/30">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        handleImageError(item.id);
                        e.target.src = getPlaceholderSVG(item.title.split(' ')[0]);
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-center">
                      {item.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección del Pastel de Cumpleaños */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">🎂 Celebración Especial 🎂</h2>
          <p className="text-lg mb-8 text-purple-200">
            ¡Haz click en el pastel para una sorpresa!
          </p>

          <div className="relative inline-block">
            <button
              onClick={handleCakeClick}
              className="transform hover:scale-110 transition-all duration-300 focus:outline-none"
            >
              <div className="bg-gradient-to-br from-pink-400/30 to-purple-400/30 backdrop-blur-sm rounded-full p-12 border-4 border-pink-400/50 shadow-2xl hover:border-pink-300/70">
                <Cake size={120} className="text-pink-300" />
              </div>
            </button>

            {showBirthdayAnimation && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Animación de Cumpleaños */}
      {showBirthdayAnimation && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-gradient-to-br from-purple-600/95 to-pink-600/95 backdrop-blur-lg rounded-3xl p-16 shadow-2xl border-4 border-yellow-400 animate-bounce">
            <h1 className="text-7xl font-bold mb-6 text-yellow-300 animate-pulse">
              🎉 ¡FELIZ CUMPLEAÑOS! 🎉
            </h1>
            <p className="text-3xl text-center text-white mb-4">
              ¡Que todos tus deseos se hagan realidad!
            </p>
            <p className="text-2xl text-center text-pink-200">
              Te amo con todo mi corazón ❤️
            </p>
            <div className="flex justify-center gap-4 mt-8 text-5xl">
              🎈 🎁 🎊 🎂 🎈
            </div>
          </div>
        </div>
      )}

      {/* Confetti */}
      {confetti.map((item) => (
        <div
          key={item.id}
          className="fixed top-0 pointer-events-none animate-fall"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          <div className="text-3xl">
            {['🎉', '🎊', '⭐', '💖', '🎈'][item.id % 5]}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default LoveWebsite;