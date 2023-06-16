import './App.css';
import List from './components/List';
import Row from './components/Row';
import { products } from './components/data';

function App() {
  return (
    <div>
      <List
        items={products}
        renderItem={(product, isHighlighted) => (
          <Row
            key={product.id}
            title={product.title}
            isHighlighted={isHighlighted}
          />
        )}
      />
    </div>
  );
}

export default App;
