import Card from '../components/Card'
import {Link} from 'react-router-dom'
function Favorites({favorite, onAddToCart, onAddToFavorite}) {
    return(
      
          <div>
            <title>Закладки</title>
              {favorite.length > 0 ?         
                  
                                    <div className="content p-40">
                                      
                              <div className="d-flex  mr-20 favorite">
                                <Link to="/">
                                  <div className="arrow">
                                    <img src="/img/arrow.svg" alt="arrow" />
                                  </div>
                                </Link>
                              <h1>Мои закладки</h1>

                              </div>

                        <div className="sneakers d-flex  flex-wrap mt-40 mb-20">
                        {favorite.map((card, index) => {
                            return (
                              <Card
                                key={index}
                                onFavorite={ (obj) => onAddToFavorite(obj)}
                                onPlus={(obj) => onAddToCart(obj)}
                                favoriteLiked={true}
                                {...card}
                              />
                            );
                          })}


                    </div>
              </div>
              
              
        
              
              :
                    <div className="wrapper NoFavoriteproduct d-flex flex-column justify-center align-center">
                    <img src="/img/unFavorite.png" alt="unFavorite"/>
                    <h2>Закладок нет :</h2>
                    <p>Вы ничего не добавляли в закладки  </p>
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

export default Favorites