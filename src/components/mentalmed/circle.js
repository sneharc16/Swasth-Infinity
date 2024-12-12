import React, { useState, useEffect, useRef } from "react";
import "./circle.css";
import river from "../../assets/river.mp3";
import sitar from "../../assets/sitar.mp3";
import spiritual from "../../assets/spiritual.mp3";
import bell from "../../assets/bell.mp3";
import birds from "../../assets/birds.mp3";

const audioOptions = [
  { id: "none", name: "Select Background Sound", src: null },
  { id: "nature", name: "Forest Sounds", src: river },
  { id: "mountain", name: "Mountain Stream", src: sitar },
  { id: "birds", name: "Bird Chirping", src: birds },
  { id: "instrumental", name: "Calm Instrumental", src: spiritual },
];

const BreathingMeditation = () => {
  const [breathPhase, setBreathPhase] = useState("inhale");
  const [circleSize, setCircleSize] = useState(100);
  const [breathCount, setBreathCount] = useState(0);
  const [selectedAudio, setSelectedAudio] = useState("none");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const breathDuration = 4000; // Total breath cycle duration
    const startTime = Date.now();

    const animateBreathing = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = (elapsedTime % breathDuration) / breathDuration;

      if (progress < 0.5) {
        // Inhale phase
        setBreathPhase("inhale");
        const inhaleProgress = progress * 2;
        setCircleSize(100 + inhaleProgress * 150);
      } else {
        // Exhale phase
        setBreathPhase("exhale");
        const exhaleProgress = (progress - 0.5) * 2;
        setCircleSize(250 - exhaleProgress * 150);
      }

      // Complete breath cycle
      if (elapsedTime % breathDuration >= breathDuration - 10) {
        setBreathCount((prev) => prev + 1);
      }

      animationFrameId = requestAnimationFrame(animateBreathing);
    };

    animationFrameId = requestAnimationFrame(animateBreathing);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleAudioChange = (event) => {
    const audioId = event.target.value;
    setSelectedAudio(audioId);

    if (audioRef.current) {
      const selectedOption = audioOptions.find((option) => option.id === audioId);

      if (selectedOption && selectedOption.src) {
        audioRef.current.src = selectedOption.src;
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`meditation-container meditation-${breathPhase}`}>
      <div className="audio-header">
        <select
          value={selectedAudio}
          onChange={handleAudioChange}
          className="audio-select"
        >
          {audioOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>

        {selectedAudio !== "none" && (
          <button onClick={toggleAudio} className="audio-toggle">
            {isPlaying ? "❚❚ Pause" : "▶ Play"}
          </button>
        )}
      </div>

      <div
        className="breathing-circle"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
        }}
      >
        <div className="circle-text">
          {breathPhase === "inhale" ? "INHALE" : "EXHALE"}
        </div>
      </div>

      <audio ref={audioRef} loop className="hidden-audio" />
      <div className="breath-count">Breath Cycles: {breathCount}</div>
    </div>
  );
};

export default BreathingMeditation;
