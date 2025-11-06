import React, { useState } from 'react';

interface WelcomeScreenProps {
  onNameSubmit: (name: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNameSubmit(name);
  };

  return (
    <div className="text-center text-white p-8 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
        Testify Quiz'ga Xush Kelibsiz
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Boshlash uchun ismingizni kiriting.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ismingiz"
          className="w-full sm:w-auto flex-grow bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          disabled={!name.trim()}
        >
          Boshladik!
        </button>
      </form>
    </div>
  );
};

export default WelcomeScreen;