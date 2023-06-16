import { useState } from 'react';
import { randomInteger } from './utils';

export const useAuction = () => {
  const [money, setMoney] = useState(10);

  const handleIncrease = () => {
    setMoney(money * randomInteger(2, 5));
  };

  return [money, handleIncrease];
};
