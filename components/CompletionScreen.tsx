
import React from 'react';

interface CompletionScreenProps {
  name: string;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ name }) => {
  return (
    <div className="text-center text-white p-8 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg animate-container-fade-in-up">
      <div className="flex justify-center mb-6">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
          <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-4 animate-text-fade-in" style={{ animationDelay: '1.2s' }}>
        Tabriklaymiz, {name}!
      </h1>
      <p className="text-lg text-gray-300 mb-8 animate-text-fade-in" style={{ animationDelay: '1.4s' }}>
        Test muvaffaqiyatli yakunlandi va javoblaringiz qabul qilindi.
      </p>

      <style>{`
        .checkmark {
          width: 100px;
          height: 100px;
          display: block;
          margin: 0 auto;
          transform: scale(0.8);
          opacity: 0;
          animation: scale-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s forwards;
        }

        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 3;
          stroke-miterlimit: 10;
          stroke: #4ade80;
          fill: transparent;
          animation: stroke 0.8s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
        }

        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          stroke-width: 3;
          animation: stroke 0.4s cubic-bezier(0.65, 0, 0.45, 1) 1.3s forwards;
        }

        .animate-container-fade-in-up {
          animation: container-fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        .animate-text-fade-in {
          opacity: 0;
          animation: text-fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes stroke {
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes container-fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes text-fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CompletionScreen;
