import { useAuction } from './hooks';

function Person1() {
  const [money, handleIncrease] = useAuction();

  return (
    <div>
      <h2>John is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
}

export default Person1;
