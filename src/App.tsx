import React, { useState } from 'react';
import './App.css';
import { LR6Usb } from './components/LR6Usb';
import { NEUsb } from './components/NEUsb';
import { NotConnected } from './components/NotConnected';

type WrapperProp = {
  device: HIDDevice | null
}

const Wrapper: React.FC<WrapperProp> = ({ device }) => {
  if (device === null) {
    return (
      <NotConnected />
    );
  } else if (device.productId === 0x6001) {
    return (
      <NEUsb device={device} />
    );
  } else if (device.productId === 0x8003) {
    return (
      <LR6Usb device={device} />
    );
  } else {
    return (
      <h2>Not implemented Yet</h2>
    );
  }
}

function App() {
  const [device, setDevice] = useState<HIDDevice | null>(null);
  const connectDevice = async () => {
    try {
      const devices = await navigator.hid.requestDevice({
        filters: [{
          vendorId: 0x191A,
          productId: 0x6001, // NE-USB
        }, {
          vendorId: 0x191A,
          productId: 0x8003, // LR6-USB
        }],
      });
      if (devices.length === 0) {
        return;
      }

      try {
        await devices[0].open();

      } catch (e) {
        console.error(e);
        return;
      }

      setDevice(_ => devices[0]);
    } catch (e) {
      console.error(`Failed to connect device: ${e}`);
      return;
    }
  };

  const disconnectDevice = async () => {
    await device!.close();
    setDevice(_ => null);
  };

  return (
    <div className="App">
      <h1>Patlite WebUSB Demo</h1>
      {
        device === null ?
          <input className="button" type="button" id="connectButton" value="Connect" onClick={connectDevice} />
          :
          <input className="button" type="button" id="disconnectButton" value="Disconnect" onClick={disconnectDevice} />
      }

      <Wrapper device={device}></Wrapper>
    </div>
  );
}

export default App;
