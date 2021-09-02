import React from 'react';
import Info from '../Info';
import drawer from './Drawer.module.scss';
import AppContext from '../../context';
import axios from 'axios';

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cardItems, setCardItems} = React.useContext(AppContext);

  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const totalPrice = cardItems.reduce((sum, obj) => obj.price + sum, 0);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onCLickOreder = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.post('https://6130c2898066ca0017fdaa51.mockapi.io/orders', {
        items: cardItems,
      });

      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCardItems([]);

      for (let i = 0; i < cardItems.length; i++) {
        const item = cardItems[i];
        await axios.delete('https://6130c2898066ca0017fdaa51.mockapi.io/card/' + item.id);
        delay(1000);
      }
    } catch (error) {
      alert('Не удалось оформит ваш заказ!');
    }

    setIsLoading(false);
  };

  return (
    <div className={`${drawer.overlay} ${opened ? drawer.visibilityOverlay: "" }`}>
      <title>{opened ? 'Корзина': "Главный"}</title>
      <div className={drawer.drawer}>
        <h2 className="d-flex justify-between mb-30  ">
          Корзина
          <img
            onClick={onClose}
            className="remove-btn cu-p"
            src="img/btn-remove.svg"
            alt="removeBtn"
          />
        </h2>
        {items.length > 0 ? (
          <>
            <div className={drawer.items}>
              {items.map((item) => {
                return (
                  <div key={item.id}>
                    <div className={drawer.cartItem + ' d-flex align-center mt-30 '}>
                      <div
                        className={drawer.cartItemImg}
                        style={{ backgroundImage: `url(${item.img})` }}></div>
                      <div>
                        <p className="mb-5">{item.title}</p>
                        <b>{item.price} руб</b>
                      </div>
                      <img
                        onClick={() => onRemove(item.id)}
                        className={drawer.remove_btn}
                        src="img/btn-remove.svg"
                        alt="removeBtn"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={drawer.cart_total_block + ' mt-20'}>
              <ul className="total_block mb-20">
                <li className="d-flex justify-center align-end mb-20">
                  <span>Итого: </span>
                  <div></div>
                  <b>{totalPrice} руб. </b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>{Math.round((totalPrice / 100) * 5)} руб.</b>
                </li>
              </ul>

              <button disabled={isLoading} onClick={onCLickOreder} className={drawer.greenBtn}>
                <span>Оформить заказ</span>
                <img src="img/btn-arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            img={isOrderCompleted ? 'img/order.png' : 'img/empty.png'}
            title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
            subtitle={
              isOrderCompleted
                ? `Вы заказали: ${cardItems.length} Кроссовки Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовк, чтобы сделеть заказ.'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
