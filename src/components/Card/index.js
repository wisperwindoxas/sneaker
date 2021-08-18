import React,{useState} from 'react'
import styles from './Card.module.scss'


function Card ({img, title, price, id, onFavorite, onPlus, favoriteLiked}) {

  const [liked, setLiked] = useState(favoriteLiked)
  const [isAdded, setIsAdded] = useState(false)


  const onLiked = () =>{
    onFavorite({id,img, title, price})
    setLiked(!liked)
  }

  const onPlused = () =>{
    onPlus({img, title, price})
    setIsAdded(!isAdded)
  }

    return(

       
        <div key={id} className="mr-20">


        <div  className={styles.card} >
        <img onClick={onLiked} className={styles.favorite} src={liked ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="unliked" />
        <img width={133} height={112} src={img} alt="sneakers" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span className="priceTitle">Цена:</span>
            <b>{price } руб</b>
          </div>
        <div onClick={onPlused} className={styles.plusBtn}>
        
          <img src={isAdded ? '/img/btn-plus.svg': '/img/plus.svg'} alt="btnAdd"/>
        </div>
            
         
        </div>
      </div>
          
    
      </div>
    )
}

export default Card