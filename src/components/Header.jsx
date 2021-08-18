import React from 'react'
import {Link} from 'react-router-dom'



function Header(props){
    return(
        <header className="d-flex justify-between align-center p-40">
            <title>Главный</title>
          <Link to={"/"} >
              <div className="headerLeft d-flex align-center">
                <img className="m-15" width="40" height="40" src="/img/logo.png" alt="logo" />
                <div className="headerInfo d-flex align-start justify-start flex-column">
                  <h3 className="text-uppercase">React Sneakers</h3>
                  <p>Магазин лучший кроссовка</p>
                </div>
              </div>
          </Link>
        <ul className="d-flex justify-between align-center">
          <li onClick={props.showCard} className=" cu-p">
            <img  width="18" height="18" src="/img/cart.svg" alt="logo" />
            <span>1205 руб.</span>  
          </li>
          <li>
              <Link to="/favorites" > 
                <img src="/img/favorite-outline.svg" alt="favorite" />
              </Link>
           
            </li>
          <li>
            <img width="18" height="18" src="/img/Union.svg" alt="logo" />
          </li>
        </ul>
      </header>
    )
}


export default Header;