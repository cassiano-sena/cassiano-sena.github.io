"use client";

import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
  const tracks = [
    "/audio/song1.mp3",
    "/audio/song2.mp3",
    "/audio/song3.mp3",
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVolume, setShowVolume] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const playPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextIndex = Math.floor(Math.random() * tracks.length);
    setCurrentTrack(nextIndex);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    const prevIndex = currentTrack - 1 < 0 ? tracks.length - 1 : currentTrack - 1;
    setCurrentTrack(prevIndex);
    setIsPlaying(true);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [currentTrack]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="audio-player p-4 bg-gray-800 text-white rounded-md w-80 relative">
      <h2 className="mb-2">Tocando: {tracks[currentTrack].split("/").pop()}</h2>

      <audio
        ref={audioRef}
        src={tracks[currentTrack]}
        onEnded={nextTrack}
        autoPlay={isPlaying}
      />

      <div className="controls flex gap-2 mb-2 items-center">
        <button onClick={prevTrack} className="px-2 py-1 bg-gray-600 rounded">⏮️</button>
        <button onClick={playPause} className="px-2 py-1 bg-gray-600 rounded">
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button onClick={nextTrack} className="px-2 py-1 bg-gray-600 rounded">⏭️</button>

        {/* 🔊 Contêiner de volume que mantém o hover ativo */}
        <div
          className="relative ml-3 flex items-center"
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
        >
          <button className="px-2 py-1 bg-gray-600 rounded">🔊</button>

          {/* Caixa expansiva de volume */}
          <div
            className={`absolute left-full ml-2 bg-gray-700 p-2 rounded shadow-md origin-left transform transition-all duration-300 ${
              showVolume ? "scale-x-100 opacity-100 w-28" : "scale-x-0 opacity-0 w-0"
            }`}
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolume}
              className="w-full accent-green-400"
            />
          </div>
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="progress flex items-center gap-2 mb-2">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.01}
          value={currentTime}
          onChange={handleProgressChange}
          className="flex-1 accent-blue-400"
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
