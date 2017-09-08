import React from 'react';
import style from './Counter.css';
import PropTypes from 'prop-types';

const Counter = (props) => {
  return (
    <div>
      <div className={style.counter}>{props.itemsTotal} {itemOrItems(props.itemsTotal)} Total</div>
      <div className={style.counter}>{props.itemsRemaining} {itemOrItems(props.itemsRemaining)} Remaining</div>
      <div className={style.counter}>{props.itemsDone} {itemOrItems(props.itemsDone)} Done</div>
    </div>
  );
};

export const itemOrItems = (itemNumber) => (
  itemNumber === 1 ? 'Item' : 'Items'
);

Counter.propTypes = {
  itemsTotal: PropTypes.number.isRequired,
  itemsRemaining: PropTypes.number.isRequired,
  itemsDone: PropTypes.number.isRequired
};

export default Counter;