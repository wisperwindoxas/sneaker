import React from 'react'
import Card from '../components/Card'
import {Link} from 'react-router-dom'
import axios from 'axios'



function Shop() {



  const [shopingCart, setShopingCart] = React.useState([]);


  React.useEffect(() =>{
   (async () =>{
    const {data} =  await axios.get('http://localhost:3004/orders');
    setShopingCart(data.reduce((prev, obj)=> [...prev, ...obj.items], []))
   })()
  },[])


  const onRemoveShopProduct = () =>{
  
    shopingCart.map((item) => {
      axios.delete(`http://localhost:3004/orders/${item.id}`)
      return setShopingCart([])
    })

}
  console.log(shopingCart);

    return(
      
          <div>
            
           
              {shopingCart.length > 0 ?         
                  
                            <div className="content p-40">
                                      <title>Мои покупки</title>
                              <div className="d-flex justify-between mr-20 favorite">
                             <div className="d-flex align-center ">
                             <Link to="/">
                                  <div className="arrow">
                                    <img src="/img/arrow.svg" alt="arrow" />
                                  </div>
                                </Link>
                                  <h1>Мои покупки</h1>
                             </div>
                                  <button onClick={onRemoveShopProduct} className="btnClearShop ">
                                    <img src="/img/delete.png"  alt="trash" />
                                    Clear all product
                                    </button>
                              </div>

                        <div className="sneakers d-flex  flex-wrap mt-40 mb-20">
                        {shopingCart.map((card, index) => {
                            return (
                              <Card
                                key={index}
                               
                                {...card}
                              />
                            );
                          })}


                    </div>
              </div>
              
              
        
              
              :
                    <div className="wrapper NoFavoriteproduct d-flex flex-column justify-center align-center">
                    <img src="/img/unshoping.png" alt="unFavorite"/>
                    <h2>У вас нет заказов</h2>
                    <p>Вы нищеброд? Оформите хотя бы один заказ.</p>
                    <Link to="/">
                        <button  className={"greenBtnPrev"}>
                                <img src="/img/arrowPrev.svg" alt="arrow" />
                                    Вернуться назад
                        </button>
                    </Link>
                    </div>

             
      
      }
      </div>
    )
}

export default Shop