import React from 'react';
import type { HighScore } from '../types';
import TrophyIcon from './icons/TrophyIcon';

interface HighScoresProps {
  scores: HighScore[];
}

const HighScores: React.FC<HighScoresProps> = ({ scores }) => {
  return (
    <div className="p-6 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
        <TrophyIcon className="w-7 h-7 text-yellow-400" />
        Eng Yuqori Natijalar
      </h2>
      {scores.length > 0 ? (
        <ol className="space-y-3">
          {scores.map((score, index) => (
            <li key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
              <span className="font-semibold text-lg">
                <span className="text-gray-400 mr-3">{index + 1}.</span>
                {score.name}
              </span>
              <span className="font-bold text-xl text-purple-300">{score.score}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-center text-gray-400">Hozircha natijalar yo'q. Birinchi bo'ling!</p>
      )}
    </div>
  );
};

export default HighScores;
