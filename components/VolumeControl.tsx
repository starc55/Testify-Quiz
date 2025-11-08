import React from 'react';
import VolumeUpIcon from './icons/VolumeUpIcon';
import VolumeOffIcon from './icons/VolumeOffIcon';

interface VolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMuteToggle: () => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, isMuted, onVolumeChange, onMuteToggle }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 p-2 bg-black/30 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
      <button
        onClick={onMuteToggle}
        className="text-white hover:text-purple-300 transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted || volume === 0 ? (
          <VolumeOffIcon className="w-6 h-6" />
        ) : (
          <VolumeUpIcon className="w-6 h-6" />
        )}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={isMuted ? 0 : volume}
        onChange={onVolumeChange}
        className="w-24 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-500"
        aria-label="Volume control"
      />
    </div>
  );
};

export default VolumeControl;
