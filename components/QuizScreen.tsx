import React, { useState, useEffect } from 'react';
import type { QuizQuestion } from '../types';
import ClockIcon from './icons/ClockIcon';

interface QuizScreenProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedOption: string) => void;
  timeLeft: number;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  timeLeft,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setSelected(null);
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500); // Duration of animation
    return () => clearTimeout(timer);
  }, [question]);

  const playAnswerSound = (isCorrect: boolean) => {
    // For a real app, you might use: new Audio(isCorrect ? '/sounds/correct.mp3' : '/sounds/incorrect.mp3').play();
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.3);

    if (isCorrect) {
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator.frequency.exponentialRampToValueAtTime(783.99, audioContext.currentTime + 0.1); // G5
    } else {
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3
      oscillator.frequency.exponentialRampToValueAtTime(110, audioContext.currentTime + 0.2); // A2
    }
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);

    const isCorrect = option === question.correctAnswer;
    playAnswerSound(isCorrect);
    
    setTimeout(() => {
      onAnswer(option);
    }, 1000); // Wait for feedback animation
  };

  const getOptionClasses = (option: string) => {
    if (!selected) {
      return 'bg-white/10 border-white/20 hover:bg-white/20';
    }
    if (option === selected) {
      return option === question.correctAnswer
        ? 'bg-green-500/50 border-green-500 text-white'
        : 'bg-red-500/50 border-red-500 text-white';
    }
    if (option === question.correctAnswer) {
        return 'bg-green-500/50 border-green-500 text-white';
    }
    return 'bg-white/5 border-white/10 text-gray-400 cursor-not-allowed';
  };

  const timerColor = timeLeft <= 10 ? 'text-red-500' : 'text-gray-200';
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className={`p-6 md:p-8 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg text-white transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-300 font-medium">
          Savol {questionNumber} / {totalQuestions}
        </p>
        <div className={`flex items-center gap-2 font-bold text-lg px-4 py-2 rounded-lg bg-white/10 border border-white/20 ${timerColor}`}>
          <ClockIcon className="w-6 h-6" />
          <span>{minutes}:{seconds.toString().padStart(2, '0')}</span>
        </div>
      </div>
      
      <div
        role="progressbar"
        aria-label="Quiz progress"
        aria-valuenow={questionNumber}
        aria-valuemin={1}
        aria-valuemax={totalQuestions}
        className="w-full bg-white/10 rounded-full h-2.5 mb-6"
      >
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <h2 id="question-heading" className="text-2xl md:text-3xl font-semibold mb-8 h-24 flex items-center">{question.question}</h2>

      <div role="radiogroup" aria-labelledby="question-heading" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            disabled={!!selected}
            role="radio"
            aria-checked={selected === option}
            className={`p-4 rounded-lg border text-left font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none ${getOptionClasses(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizScreen;