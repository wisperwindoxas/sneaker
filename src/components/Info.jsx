import React from 'react'
import drawer from '../components/Drawer/Drawer.module.scss'
import AppContext from './../context';

export default function Info({title, subtitle, img}) {

    const {setCartOpen} = React.useContext(AppContext)

    return (
        <div className={ drawer.cartEmpty + " d-flex  align-center justify-center flex-column flex"}>
                <img src={img} alt="empty" className="m-20" width="120" height="120"/>
                <h2>{title}</h2>
                <p className="opacity-6">{subtitle}</p>
                <button onClick={() => setCartOpen(false)} className={drawer.greenBtnPrev}>
                <img src="/img/arrowPrev.svg" alt="arrow" />
                    Вернуться назад
                </button>
        </div>
    )
}
