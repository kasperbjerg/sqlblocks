import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

export default function Energypoints() {
  const [energypoints, setEnergypoints] = useLocalStorage('energyPoints', 0);
  const [printPoints, setPrintPoints] = useState(energypoints);

  useEffect(() => {
    setPrintPoints(energypoints - (energypoints % 10));
  }, [energypoints]);

  return <>{printPoints}</>;
}