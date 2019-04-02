import React, {Component} from 'react';
import "./menu.css";


class Menu extends Component {
render() {
  return (
    <nav className="menu">
      <ul>
        <li>Sign In</li>
        <li>Dashboard</li>
        <li>Calendar</li>
      </ul>
    </nav>
  )
}


}

export default Menu;