import PropTypes from 'prop-types';

const Row = ({ title, isHighlighted }) => {
  return (
    <div className={['Row', isHighlighted ? 'RowHighlighted' : ''].join(' ')}>
      {title}
    </div>
  );
};

export default Row;

Row.propTypes = {
  title: PropTypes.isRequired,
  isHighlighted: PropTypes.isRequired,
};
