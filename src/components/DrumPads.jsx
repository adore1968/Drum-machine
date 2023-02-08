import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPreviewText } from "../features/drum machine/drumMachineSlice";

function DrumPads() {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase());
    });
  }, []);

  const dispatch = useDispatch();

  const pads = [
    {
      text: "Q",
      audioClip: "Heater 1",
      audioSample: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      text: "W",
      audioClip: "Heater 2",
      audioSample: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      text: "E",
      audioClip: "Heater 3",
      audioSample: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      text: "A",
      audioClip: "Heater 4",
      audioSample: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      text: "S",
      audioClip: "Clap",
      audioSample: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      text: "D",
      audioClip: "Open HH",
      audioSample: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      text: "Z",
      audioClip: "Kick-n'-Hat",
      audioSample: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      text: "X",
      audioClip: "Kick",
      audioSample: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      text: "C",
      audioClip: "Closed HH",
      audioSample: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const playSound = (selector) => {
    const audio = document.getElementById(selector);
    const button = audio.parentElement;
    audio.play();
    dispatch(setPreviewText(button.id));
  };

  return (
    <div className="col-6">
      <div>
        {pads.map((pad, index) => {
          return (
            <button
              key={index}
              id={pad.audioClip}
              className="drum-pad col-3 btn btn-primary fs-4"
              onClick={() => playSound(pad.text)}
            >
              <audio
                src={pad.audioSample}
                id={pad.text}
                className="clip"
              ></audio>
              {pad.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DrumPads;
