import React, { useRef, useState } from "react";
import "./Common.css";

function buzzerPatternToValue(pattern: string): number {
  switch (pattern) {
    case "stop":
      return 0;
    case "on":
      return 1;
    case "pattern1":
      return 2;
    case "pattern2":
      return 3;
    case "pattern3":
      return 4;
    case "pattern4":
      return 5;
    default:
      // never reach here
      throw new Error(`Invalid buzzer pattern: ${pattern}`);
  }
}

function buzzerControlByte(count: number, pattern: string): number {
  return (count << 4) | buzzerPatternToValue(pattern);
}

function buzzerPitchToValue(pitch: string) {
  switch (pitch) {
    case "off":
      return 0;
    case "A6":
      return 1;
    case "BFlat6":
      return 2;
    case "B6":
      return 3;
    case "C7":
      return 4;
    case "DFlat7":
      return 5;
    case "D7":
      return 6;
    case "EFlat7":
      return 7;
    case "E7":
      return 8;
    case "F7":
      return 9;
    case "GFlat7":
      return 0xA;
    case "G7":
      return 0xB;
    case "AFlat7":
      return 0xC;
    case "A7":
      return 0xD;
    default:
      // never reach here
      throw new Error(`Invalid pitch: ${pitch}`);
  }
}

function buzzerPitchByte(pitchA: string, pitchB: string): number {
  return (buzzerPitchToValue(pitchA) << 4) | buzzerPitchToValue(pitchB);
}

function ledPatternToValue(pattern: string) {
  switch (pattern) {
    case "off":
      return 0;
    case "on":
      return 1;
    case "pattern1":
      return 2;
    case "pattern2":
      return 3;
    case "pattern3":
      return 4;
    case "pattern4":
      return 5;
    default:
      // never reach here
      throw new Error(`Invalid LED pattern: ${pattern}`);
  }
}

function ledControlBytes(red: string, amber: string, green: string): number[] {
  const ret = new Array<number>(3);
  ret[0] = (ledPatternToValue(red) << 4) | (ledPatternToValue(amber));
  ret[1] = (ledPatternToValue(green) << 4);
  ret[2] = 0;
  return ret;
}

type Prop = {
  device: HIDDevice;
};

export const LR6Usb: React.FC<Prop> = ({ device }) => {
  const buzzerCountRef = useRef<HTMLInputElement>(null);
  const buzzerPatternRef = useRef<HTMLSelectElement>(null);
  const buzzerPitchARef = useRef<HTMLSelectElement>(null);
  const buzzerPitchBRef = useRef<HTMLSelectElement>(null);
  const ledRedRef = useRef<HTMLSelectElement>(null);
  const ledAmberRef = useRef<HTMLSelectElement>(null);
  const ledGreenRef = useRef<HTMLSelectElement>(null);

  const [buzzerCount, setBuzzerCount] = useState(15);

  const updateBuzzerCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuzzerCount(v => Number(event.target.value));
  };

  const sendCommand = async () => {
    const buzzerCount = Number(buzzerCountRef.current!.value);
    const ledData = ledControlBytes(ledRedRef.current!.value, ledAmberRef.current!.value, ledGreenRef.current!.value);

    const command = new Int8Array(8);
    command[0] = 0x0;
    command[1] = 0x0;
    command[2] = buzzerControlByte(buzzerCount, buzzerPatternRef.current!.value);
    command[3] = buzzerPitchByte(buzzerPitchARef.current!.value, buzzerPitchBRef.current!.value);
    command[4] = ledData[0];
    command[5] = ledData[1];
    command[6] = ledData[2];
    command[7] = 0x0;

    await device.sendReport(0, command);
  };

  const sendReset = async () => {
    const command = new Int8Array(8);
    await device.sendReport(0, command);
  };

  return (
    <>
      <h2>LR6-USB</h2>

      <h3>Buzzer Count</h3>
      <input ref={buzzerCountRef} type="range" min="0" max="15" value={buzzerCount} onChange={updateBuzzerCount} />
      <input type="text" value={buzzerCount} maxLength={2} size={2} onChange={() => { }} />

      <h3>Buzzer Pattern</h3>
      <select ref={buzzerPatternRef} defaultValue={"pattern1"}>
        <optgroup>
          <option value="stop">Stop</option>
          <option value="on">On</option>
          <option value="pattern1">Pattern1</option>
          <option value="pattern2">Pattern2</option>
          <option value="pattern3">Pattern3</option>
          <option value="pattern4">Pattern4</option>
        </optgroup>
      </select>

      <h3>Buzzer PitchA</h3>
      <select ref={buzzerPitchARef} defaultValue={"F7"}>
        <optgroup>
          <option value="off">off</option>
          <option value="A6">A6</option>
          <option value="BFlat6">B&#9837;6</option>
          <option value="B6">B6</option>
          <option value="C7">C7</option>
          <option value="DFlat7">D&#9837;7</option>
          <option value="D7">D7</option>
          <option value="EFlat7">E&#9837;7</option>
          <option value="E7">E7</option>
          <option value="F7">F7</option>
          <option value="GFlat7">G&#9837;7</option>
          <option value="G7">G7</option>
          <option value="AFlat7">A&#9837;7</option>
          <option value="A7">A7</option>
        </optgroup>
      </select>

      <h3>Buzzer PitchB</h3>
      <select ref={buzzerPitchBRef} defaultValue={"A7"}>
        <optgroup>
          <option value="off">off</option>
          <option value="A6">A6</option>
          <option value="BFlat6">B&#9837;6</option>
          <option value="B6">B6</option>
          <option value="C7">C7</option>
          <option value="DFlat7">D&#9837;7</option>
          <option value="D7">D7</option>
          <option value="EFlat7">E&#9837;7</option>
          <option value="E7">E7</option>
          <option value="F7">F7</option>
          <option value="GFlat7">G&#9837;7</option>
          <option value="G7">G7</option>
          <option value="AFlat7">A&#9837;7</option>
          <option value="A7">A7</option>
        </optgroup>
      </select>

      <h3>LED Red</h3>
      <select ref={ledRedRef} defaultValue={"on"}>
        <optgroup>
          <option value="off">off</option>
          <option value="on">on</option>
          <option value="pattern1">Pattern1</option>
          <option value="pattern2">Pattern2</option>
          <option value="pattern3">Pattern3</option>
          <option value="pattern4">Pattern4</option>
        </optgroup>
      </select>

      <h3>LED Amber</h3>
      <select ref={ledAmberRef} defaultValue={"on"}>
        <optgroup>
          <option value="off">off</option>
          <option value="on">on</option>
          <option value="pattern1">Pattern1</option>
          <option value="pattern2">Pattern2</option>
          <option value="pattern3">Pattern3</option>
          <option value="pattern4">Pattern4</option>
        </optgroup>
      </select>

      <h3>LED Green</h3>
      <select ref={ledGreenRef} defaultValue={"on"}>
        <optgroup>
          <option value="off">off</option>
          <option value="on">on</option>
          <option value="pattern1">Pattern1</option>
          <option value="pattern2">Pattern2</option>
          <option value="pattern3">Pattern3</option>
          <option value="pattern4">Pattern4</option>
        </optgroup>
      </select>

      <h3>Send Command</h3>
      <input className="button" type="button" value="Send" onClick={sendCommand} />
      <input className="button" type="button" value="Clear" onClick={sendReset} />
    </>
  );
};
