import { useState } from 'react';
import { randomInteger } from './utils';

function UpdatedComponent(OriginalComponent) {
  function NewComponent() {
    const [money, setMoney] = useState(10);

    const handleIncrease = () => {
      setMoney(money * randomInteger(2, 5));
    };

    return (
      <>
        <OriginalComponent {...{ money, handleIncrease }} />
      </>
    );
  }
  return NewComponent;
}

export default UpdatedComponent;
