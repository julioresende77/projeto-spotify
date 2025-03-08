import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
  faVolumeXmark,
  faVolumeLow,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);
  return seconds + minutes * 60;
};

const Player = ({ duration, prevSongId, nextSongId, audio }) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);
  const [volume, setVolume] = useState(1);
  const [volumeIcon, setVolumeIcon] = useState(faVolumeHigh);
  const [previousVolume, setPreviousVolume] = useState(1); // Estado para o volume anterior

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    setIsPlaying(!isPlaying);
  };

  const handleProgressBarClick = (e) => {
    const progressBarRect = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - progressBarRect.left;
    const progressBarWidth = progressBarRect.width;
    const newTime = (clickPosition / progressBarWidth) * durationInSeconds;

    audioPlayer.current.currentTime = newTime;
    setCurrentTime(formatTime(newTime));

    requestAnimationFrame(() => {
      progressBar.current.style.setProperty(
        "--_progress",
        (newTime / durationInSeconds) * 100 + "%"
      );
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.volume = volume;
    }

    if (volume === 0) {
      setVolumeIcon(faVolumeXmark);
    } else if (volume < 0.5) {
      setVolumeIcon(faVolumeLow);
    } else {
      setVolumeIcon(faVolumeHigh);
    }
  }, [volume]);

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(previousVolume); // Desmuta (retorna ao volume anterior)
    } else {
      setPreviousVolume(volume);
      setVolume(0); // Muta
    }
  };

  return (
    <div className="player">
      <div className="player__controllers">
        {/* Link para a música anterior */}
        <Link to={`/song/${prevSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        {/* Botão de play (aqui você pode implementar a lógica de play/pause) */}

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />
        {/* Link para a próxima música */}
        <Link to={`/song/${nextSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <div className="player__volume">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />

          <FontAwesomeIcon
            className="player__icon player__icon-volume"
            icon={volumeIcon}
            onClick={toggleMute}
          />
        </div>

        <p>{currentTime}</p>

        <div className="player__bar" onClick={handleProgressBarClick}>
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
