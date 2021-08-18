import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [show, setShow] = useState(false);
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3004/sneakers').then((res) => setCards(res.data));
    axios.get('http://localhost:3004/card').then((res) => setCardItems(res.data));
    axios.get('http://localhost:3004/liked').then((res) => setFavorites(res.data));
    
  }, []);

  function openCard() {
    setShow(true);
  }
  function closeCard() {
    setShow(false);
  }



  const onAddToCart =  (obj) => {
  
      axios.post('http://localhost:3004/card', obj);
      setCardItems((prev) => [...prev, obj]);
    
   
  };


  const onAddToFavorite = async (obj) => {
    try{
      if(favorites.find(favor => favor.id === obj.id)){
        axios.delete(`http://localhost:3004/liked/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
       
      }else{
       const {data} = await axios.post('http://localhost:3004/liked', obj);
        setFavorites((prev) => [...prev, data]);
      }
    }catch(error){  
      alert('Не смогли добавить в фоворите')
    }
  };

  
  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:3004/card/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };


  return (
    <div className="wrapper clear">
      
      {show && <Drawer items={cardItems} onClose={closeCard} onRemove={onRemoveItem} />}

      <Header showCard={openCard} />

      <Route path="/" exact>
        <Home cards={cards} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
        
        />
      </Route>

      <Route path="/favorites"><Favorites favorite={favorites} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} /></Route>
    </div>
  );
}

export default App;
