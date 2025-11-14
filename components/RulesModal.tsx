import React, { useState } from 'react';

interface RulesModalProps {
  onAccept: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ onAccept }) => {
  const [isExiting, setIsExiting] = useState(false);

  const playStartSound = () => {
    // For a real app, you might use: new Audio('/sounds/start.mp3').play();
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (!audioContext) return; // Web Audio API not supported

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.2);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  const handleStart = () => {
    playStartSound();
    setIsExiting(true);
    setTimeout(() => {
        onAccept();
    }, 500);
  };

  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <div className={`w-full max-w-lg bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl text-white p-8 transform transition-all duration-500 ${isExiting ? 'animate-fade-out-down' : 'animate-fade-in-up'}`}>
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
          Test Qoidalari
        </h2>
        <ul className="space-y-3 text-gray-200 mb-8 list-disc list-inside">
          <li>Barcha savollarga javob berish uchun sizga cheklangan vaqt beriladi.</li>
          <li>Har bir savolning faqat bitta to'g'ri javobi bor.</li>
          <li>Javobni tanlaganingizdan so'ng, uni o'zgartira olmaysiz.</li>
          <li>Natijalaringiz test yakunlangach avtomatik tarzda yuboriladi.</li>
          <li>Omad! Diqqatingizni jamlang va qo'lingizdan kelganicha harakat qiling.</li>
        </ul>
        <div className="text-center">
          <button
            onClick={handleStart}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-12 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Testni Boshlash
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        @keyframes fade-out-down {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
        }
        .animate-fade-out-down {
          animation: fade-out-down 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default RulesModal;