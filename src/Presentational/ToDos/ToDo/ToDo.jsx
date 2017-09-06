import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch('/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: this.props.item.id, completed: this.props.item.completed})
    });
    this.props.onClick();
  }

  render() {
    return (
      <div className={`${style.outerList} ${style.group}`}>
        <div className={`${style.circle} ${this.props.item.completed ? style.circleCompleted : null}`} onClick={this.handleClick}></div>
        <li className={`${style.listItem} ${this.props.item.completed ? style.listItemCompleted : null}`} onClick={this.handleClick}>{this.props.item.text}</li>
      </div>
    );
  }
}  

ToDo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ToDo;
