/* eslint-disable react-hooks/purity */
"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSurprise = () => {
    setShowContent(true);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Poppins:wght@300;400;500&display=swap');
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.3) rotate(180deg);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(236, 72, 153, 0.6), 0 0 60px rgba(139, 92, 246, 0.4);
          }
        }
        
        @keyframes confettiFall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes slideIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
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
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounceIn 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6, #10b981);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .magic-button {
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .magic-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.7s;
        }
        
        .magic-button:hover::before {
          left: 100%;
        }
        
        .magic-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 30px rgba(236, 72, 153, 0.4);
        }
        
        .floral-border {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ec4899' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        .confetti {
          position: absolute;
          width: 12px;
          height: 12px;
          background: linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981);
          opacity: 0.7;
          animation: confettiFall 5s linear infinite;
        }
      `}</style>

      <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 overflow-hidden floral-border">
        {/* Confettis animés - Rendu uniquement côté client */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="confetti rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  transform: `scale(${0.5 + Math.random() * 1.5})`
                }}
              />
            ))}
          </div>
        )}

        {/* Éléments décoratifs flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-8 left-8 text-5xl animate-float" style={{ animationDelay: '0s' }}>🌸</div>
          <div className="absolute top-12 right-16 text-4xl animate-float" style={{ animationDelay: '0.8s' }}>💫</div>
          <div className="absolute bottom-16 left-20 text-5xl animate-float" style={{ animationDelay: '1.2s' }}>🌺</div>
          <div className="absolute bottom-8 right-8 text-4xl animate-float" style={{ animationDelay: '1.6s' }}>✨</div>
          <div className="absolute top-1/3 left-12 text-3xl animate-sparkle" style={{ animationDelay: '0.4s' }}>💖</div>
          <div className="absolute top-2/3 right-12 text-3xl animate-sparkle" style={{ animationDelay: '1s' }}>🎀</div>
        </div>

        {/* Écran d'accueil avec seulement le bouton */}
        {!showContent ? (
          <div className="text-center animate-bounce-in">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
                🎂
              </h1>
              <p className="text-2xl md:text-3xl py-10 text-gray-700 mb-8" style={{ fontFamily: "'Poppins', sans-serif",marginBottom: '1rem' }}>
                Une surprise t&apos;attend !
              </p>
            </div>
            
            <button 
              className="magic-button text-white font-semibold py-10 px-12 rounded-full shadow-2xl text-2xl md:text-3xl transition-all duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" , marginBottom: '1rem', padding: '1rem 2rem', fontSize: '1rem'}}
              onClick={handleSurprise}
            >
              🎁 Clique pour découvrir la surprise ! 🎁
            </button>
            
            <p className="mt-8 text-lg text-gray-600 italic animate-pulse" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Prépare-toi pour quelque chose de magique...
            </p>
          </div>
        ) : (
          /* Carte principale qui apparaît après le clic */
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 max-w-6xl w-full border-4 border-pink-200/50 animate-glow animate-fade-in-up">
            {/* Coeurs décoratifs dans les coins */}
            <div className="absolute -top-2 -left-2 text-3xl animate-sparkle">💗</div>
            <div className="absolute -top-2 -right-2 text-3xl animate-sparkle" style={{ animationDelay: '0.3s' }}>💗</div>
            <div className="absolute -bottom-2 -left-2 text-3xl animate-sparkle" style={{ animationDelay: '0.6s' }}>💗</div>
            <div className="absolute -bottom-2 -right-2 text-3xl animate-sparkle" style={{ animationDelay: '0.9s' }}>💗</div>

            {/* Layout responsive : image à gauche, texte à droite sur desktop */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Photo à gauche sur desktop, centrée sur mobile */}
              <div className="flex-shrink-0 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 blur-lg opacity-60 animate-pulse"></div>
                  <div className="relative rounded-full p-2 bg-gradient-to-r from-pink-400 to-purple-500">
                    <Image
                      src="/naogai.jpg"
                      alt="Naogaï Anne Lise"
                      width={280}
                      height={280}
                      className="rounded-full border-4 border-white shadow-2xl w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Contenu à droite sur desktop */}
              <div className="flex-1 text-center lg:text-left animate-slide-in" style={{ animationDelay: '0.6s' }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Joyeux Anniversaire<br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">Naogaï Anne Lise!</span>
                  <span className="block text-2xl mt-4 animate-float">🎂✨</span>
                </h1>
                
                {/* Messages */}
                <div className="space-y-4 px-5 md:space-y-6">
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    En ce jour spécial, je veux te dire à quel point tu es une personne{' '}
                    <span className="gradient-text font-medium">extraordinaire</span> ! ✨
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Je te souhaite une journée remplie de{' '}
                    <span className="text-pink-500 font-medium">joie</span>, de{' '}
                    <span className="text-purple-500 font-medium">rires</span> et de{' '}
                    <span className="text-blue-500 font-medium">moments magiques</span>. 
                    Que cette nouvelle année de plus t&apos;apporte tout ce que ton cœur désire.💖
                  </p>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic" style={{ fontFamily: "'Poppins', sans-serif", marginTop: '1rem'  }}>
                    Tu illumines la vie de tous ceux qui t&apos;entourent ! 
                    <span className="block mt-2 animate-sparkle">🌟💖</span>
                  </p>

                  {/* Signature */}
                  <div className="pt-6 mt-6 border-t-2 border-pink-200/50">
                    <p className="text-lg text-gray-600 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Avec toute mon affection et mes meilleurs vœux,
                    </p>
                    <p className="text-3xl text-center lg:text-right font-bold gradient-text" style={{ fontFamily: "'Dancing Script', cursive" }}>
                      Ton ami Isaac Touza
                      <span className="ml-3 animate-bounce">💝</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton pour une autre surprise (optionnel) */}
            <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '1s' ,margin:'1rem'}}>
              <button 
                className="magic-button text-white font-semibold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={() => setShowContent(false)}
              >
                🎁 Voir à nouveau la surprise 🎁
              </button>
            </div>
          </div>
        )}

        {/* Message supplémentaire en bas */}
        {showContent && (
          <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <p className="text-lg text-gray-600 italic" style={{ fontFamily: "'Dancing Script', cursive", margin: '1rem'  }}>
              Que chaque instant de ta vie soit aussi merveilleux que toi 🌸
            </p>
          </div>
        )}
      </main>
    </>
  );
}