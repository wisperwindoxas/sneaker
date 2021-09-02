import React, { useState } from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context'

function Card({
  img,
  title,
  price,
  id,
  onFavorite,
  onPlus,
  favoriteLiked,
  loading = false,
  favoriteAdded = false
  
}) {
  const {isItemAdded} = React.useContext(AppContext)
  const [liked, setLiked] = useState(favoriteLiked);


  const onLiked = () => {
    onFavorite({ id, img, title, price });
    setLiked(!liked);
  };

  const onPlused = () => {
    onPlus({ id, img, title, price });
 
  };



  return (
    <div key={id} className="mr-20">
      {loading ? (
        <ContentLoader
          speed={2}
          width={200}
          height={300}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="200" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="200" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <div className={styles.card}>
          <img
            onClick={onLiked}
            className={styles.favorite}
            src={liked || favoriteAdded ? 'img/heart-liked.svg' : 'img/heart-unliked.svg'}
            alt="unliked"
          />
          <img width={"100%"} height={"135px"} src={img} alt="sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span className="priceTitle">Цена:</span>
              <b>{price} руб</b>
            </div>
            <div onClick={onPlused} className={styles.plusBtn}>
              <img src={isItemAdded(id) ? 'img/btn-plus.svg' : 'img/plus.svg'} alt="btnAdd" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
