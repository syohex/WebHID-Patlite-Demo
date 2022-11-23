import React, { useRef, useState } from 'react';
import "./Common.css";

function alarmPatternToValue(pattern: string): number {
  switch (pattern) {
    case "off":
      return 0;
    case "continuous":
      return 1;
    case "sweep":
      return 2;
    case "callSign":
      return 3;
    case "lowUrgency":
      return 4;
    case "highUrgency":
      return 5;
    case "twinkleStar":
      return 6;
    case "londonBridge":
      return 7;
    default:
      // never reach here
      throw Error(`invalid pattern ${pattern}`);
  }
}

function alarmControlByte(alarmCount: number, alarmPattern: string) {
  return (alarmCount << 4) | alarmPatternToValue(alarmPattern);
}

function alarmVolumeByte(alarmVolume: number): number {
  return alarmVolume >= 10 ? 10 : alarmVolume;
}

function ledColorToValue(color: string): number {
  switch (color) {
    case "off":
      return 0;
    case "red":
      return 1;
    case "green":
      return 2;
    case "amber":
      return 3;
    case "blue":
      return 4;
    case "purple":
      return 5;
    case "cyan":
      return 6;
    case "white":
      return 7;
    default:
      throw new Error(`invalid color value: ${color}`);
  }
}

function ledPatternToValue(pattern: string): number {
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
    case "pattern5":
      return 6;
    case "pattern6":
      return 7;
    default:
      throw new Error(`invalid pattern value: ${pattern}`);
  }
}

function ledControlByte(ledColor: string, ledPattern: string) {
  return (ledColorToValue(ledColor) << 4) | ledPatternToValue(ledPattern);
}

type Props = {
  device: HIDDevice;
}

export const NEUsb: React.FC<Props> = ({ device }) => {
  const alarmCountRef = useRef<HTMLInputElement>(null);
  const alarmPatternRef = useRef<HTMLSelectElement>(null);
  const alarmVolumeRef = useRef<HTMLInputElement>(null);
  const ledColorRef = useRef<HTMLSelectElement>(null);
  const ledPatternRef = useRef<HTMLSelectElement>(null);

  const [alarmCount, setAlarmCount] = useState<number>(15);
  const updateAlarmCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlarmCount(_ => Number(event.target.value));
  };

  const [alarmVolume, setAlarmVolume] = useState<number>(10);
  const updateAlarmVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlarmVolume(_ => Number(event.target.value));
  };

  const sendCommand = async () => {
    const alarmCount = Number(alarmCountRef.current!.value);
    const alarmVolume = Number(alarmVolumeRef.current!.value);

    const command = new Int8Array(8);
    command[0] = 0x0;
    command[1] = 0x0;
    command[2] = alarmControlByte(alarmCount, alarmPatternRef.current!.value);
    command[3] = alarmVolumeByte(alarmVolume);
    command[4] = ledControlByte(ledColorRef.current!.value, ledPatternRef.current!.value);
    command[5] = 0x0;
    command[6] = 0x0;
    command[7] = 0x0;

    await device.sendReport(0, command);
  };

  const sendReset = async () => {
    const command = new Int8Array(8);
    await device.sendReport(0, command);
  };

  return (
    <>
      <h2>NE-USB</h2>

      <h3>Alarm Count</h3>
      <input ref={alarmCountRef} type="range" min="0" max="15" value={alarmCount} onChange={updateAlarmCount} />
      <input type="text" id="alarmCountValue" value={alarmCount} maxLength={2} size={2} onChange={() => { }} />

      <h3>Alarm Pattern</h3>
      <select ref={alarmPatternRef} defaultValue={"lowUrgency"}>
        <optgroup>
          <option value="off">Off</option>
          <option value="continuous">Continuous</option>
          <option value="sweep">Sweep</option>
          <option value="callSign">Call Sign</option>
          <option value="lowUrgency">Low Urgency</option>
          <option value="highUrgency">High Urgency</option>
          <option value="twinkleStar">Twinkle Start</option>
          <option value="londonBridge">London Bridge</option>
        </optgroup>
      </select>

      <h3>Alarm Volume</h3>
      <input type="range" min="0" max="10" value={alarmVolume} id="alarmVolume" onChange={updateAlarmVolume} />
      <input ref={alarmVolumeRef} type="text" value={alarmVolume} maxLength={2} size={2} onChange={() => { }} />

      <h3>LED Color</h3>
      <select ref={ledColorRef} defaultValue={"green"}>
        <optgroup>
          <option value="off">Off</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="amber">Amber</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="cyan">Cyan</option>
          <option value="white">White</option>
        </optgroup>
      </select>

      <h3>LED Pattern</h3>
      <select ref={ledPatternRef} defaultValue={"pattern1"}>
        <optgroup>
          <option value="off">Off</option>
          <option value="on">On</option>
          <option value="pattern1">Pattern1</option>
          <option value="pattern2">Pattern2</option>
          <option value="pattern3">Pattern3</option>
          <option value="pattern4">Pattern4</option>
          <option value="pattern5">Pattern5</option>
          <option value="pattern6">Pattern6</option>
        </optgroup>
      </select>

      <h3>Send Command</h3>
      <input className="button" type="button" value="Send" onClick={sendCommand} />
      <input className="button" type="button" value="Reset" onClick={sendReset} />
    </>
  );
}
