import { useState } from 'react';
import PropTypes from 'prop-types';

export default function List({ items, renderItem }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="List">
      {items.map((item, index) => {
        const isHighlighted = index === selectedIndex;
        return renderItem(item, isHighlighted);
      })}
      <hr />
      <button
        onClick={() => {
          setSelectedIndex((i) => (i + 1) % items.length);
        }}
      >
        Next
      </button>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.isRequired,
  renderItem: PropTypes.isRequired,
};
