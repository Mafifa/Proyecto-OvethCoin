import React, { Component } from 'react'
import { MenuData } from './MenuData'
import '../../stylesheets/NavBar.css'
export default class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className='NavBarItems'>
        <h1 className='logo'>OvethCoin
          <i className='fab fa-react'></i> {/*PARA COLOCAR EL LOGO*/}
        </h1>

        <div className='menu-icons'
          onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>{/*PARA COLOCAR LOS ICONOS*/}
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}
                  className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>

      </nav >
    )
  }
}
