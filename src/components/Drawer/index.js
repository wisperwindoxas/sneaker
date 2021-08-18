import React from 'react'
import drawer from './Drawer.module.scss'

function Drawer({onClose, onRemove, items = []}){
    return(
        
        <div  className={drawer.overlay}>
            <title>Корзина</title>
        <div className={drawer.drawer}>
        <h2 className="d-flex justify-between mb-30  " >Корзина 
         <img onClick={onClose} className="remove-btn cu-p" src="/img/btn-remove.svg" alt="removeBtn" />
        </h2>
        {items.length > 0 ?          
          <>
                  <div className={drawer.items}>
                    {items.map(item =>  {
                      return (
                        <div key={item.id}>
                            <div className={drawer.cartItem + " d-flex align-center mt-30 "}>
                              <div
                                className={drawer.cartItemImg}
                                style={{ backgroundImage: `url(${item.img})` }}></div>
                              <div>
                                <p className="mb-5">{item.title}</p>
                                <b>{item.price} руб</b>
                              </div>
                              <img onClick={() => onRemove(item.id)} className={drawer.remove_btn} src="/img/btn-remove.svg" alt="removeBtn" />
                            </div>

                        </div>
                      )
                    })}
                </div>
                
              <div className="cart_total_block mt-20">
              <ul className="total_block mb-20">
                  <li className="d-flex mb-20">
                    <span>Итого: </span>
                    <div></div>
                    <b>21 498 руб. </b>
                  </li>
                  <li className="d-flex">
                    <span>Налог 5%: </span>
                    <div></div>
                    <b>1074 руб.</b>
                  </li>
                </ul>

                <button className={drawer.greenBtn}><span>Оформить заказ</span>
                  <img src="/img/btn-arrow.svg" alt="arrow" />
                </button>
              </div>
          </>
          
          :
          
                  <div className={ drawer.cartEmpty + " d-flex  align-center justify-center flex-column flex"}>
                        <img src="/img/empty.png" alt="empty" className="m-20" width="120" height="120"/>
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару кроссовк, чтобы сделеть заказ.</p>
                        <button onClick={onClose} className={drawer.greenBtnPrev}>
                          <img src="/img/arrowPrev.svg" alt="arrow" />
                            Вернуться назад
                        </button>
                </div>
          
          }





        </div>
      </div>
    )
}

export default Drawer