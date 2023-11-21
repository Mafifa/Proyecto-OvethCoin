import React, { Component } from 'react';
import { MenuData } from './MenuData';
import '../../stylesheets/NavBar.css';
import OvethCoinIcono from '../../img/Logo.ico';
import { RxHamburgerMenu } from "react-icons/rx";
export default class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className='NavBarItems'>
        <h1 className='logo'>OvethCoin
          <i>
            <img
              className='logo-img'
              src={OvethCoinIcono}
              alt="Logo de la moneda"
            />
          </i>
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
