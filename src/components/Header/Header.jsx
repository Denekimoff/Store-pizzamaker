import React from 'react'
import logo from '../../assets/img/pizza-logo.svg'
import { Cart } from '../Cart/Cart'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header">
          <div className="container">
            <Link to='/'>
            <div className="header__logo">
              <img width="38" src={logo} alt="Pizza logo" />
              <div>
                <h1>Pizza Pizza</h1>
                <p>Cамая вкусная пицца во всей галактике</p>
              </div>
            </div>
            </Link>
            <Cart/>
          </div>
        </div>
  )
}
