import React, { useRef, useState } from "react";

// AudioPlayer component: Plays audio from a given source (src)
const AudioPlayer = ({ src }) => {
  // useRef hook to keep a reference to the audio element
  const audioRef = useRef(null);
  
  // useState hook to manage the playing state (true for playing, false for paused)
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause state of the audio
  const togglePlayPause = () => {
    // If audio is currently playing, pause it
    if (isPlaying) {
      audioRef.current.pause();
    } else { // If audio is not playing, play it
      audioRef.current.play();
    }
    // Toggle the isPlaying state
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      {/* Audio element to play the audio file */}
      <audio ref={audioRef} src={src} />
      {/* Button to toggle play/pause state */}
      <button onClick={togglePlayPause}>
        {/* Conditional rendering to display the correct button label */}
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

// Export the AudioPlayer component for use in other parts of the app
export default AudioPlayer;
