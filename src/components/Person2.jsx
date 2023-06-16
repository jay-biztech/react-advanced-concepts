import { useAuction } from './hooks';

function Person2() {
  const [money, handleIncrease] = useAuction();

  return (
    <div>
      <h2>Jay is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
}

export default Person2;
