import React, {Component} from 'react';
import "./menu.css";


class Menu extends Component {
render() {
  return (
    <nav className="menu">
      <li>
        <a href="http://" target="_blank" rel="noopener noreferrer">What</a>
      </li>
      <li>
        <a href="http://" target="_blank" rel="noopener noreferrer">Details</a>
      </li>
      <li>
        <a href="http://" target="_blank" rel="noopener noreferrer">Talk</a>
      </li>
    </nav>
  )
}


}

export default Menu;