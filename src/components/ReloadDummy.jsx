import React, { useEffect } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

export default function ReloadDummy({ reload }) {
  const [energyPoints, setEnergyPoints] = useLocalStorage('energyPoints', 0);
  //reload the browser from parent return-html without causing infinite loop
  useEffect(() => {
    if (reload) {
      location.reload();
    }
  }, [reload]);
}
