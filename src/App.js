import React, { useState, useEffect } from 'react';
import AppContext from './context';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Shop from './pages/Shop';




function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cardItems, setCardItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


 

  useEffect(() => {
    async function fetchData(){

      const cardResponse = await axios.get('http://localhost:3004/card');
      const favoriteResponse =  await axios.get('http://localhost:3004/liked');
      const cardsResponse =  await  axios.get('http://localhost:3004/sneakers');


      setIsLoading(false)

      setCardItems(cardResponse.data)
      setFavorites(favoriteResponse.data)
      setCards(cardsResponse.data)
    }

    fetchData()
    
  }, []);

  function openCard() {
    setCartOpen(true);
  }
  function closeCard() {
    setCartOpen(false);
  }



  const onAddToCart =  (obj) => {
  
    try{
      if(cardItems.find(item => Number(item.id) === Number(obj.id))){
        setCardItems((prev) => prev.filter((item) => item.id !== obj.id));
        axios.delete(`http://localhost:3004/card/${obj.id}`)
      }else{
        axios.post('http://localhost:3004/card', obj);
          setCardItems((prev) => [...prev, obj]);
      }
    }catch(e){
      alert(`Error ${e.message}`)
    }
    
   
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
  };

  const isItemAdded = (id) =>{
    return cardItems.some(obj => obj.id === id)
  }







  return (
    <AppContext.Provider value={{
      favorites, 
      isItemAdded,
      onAddToFavorite,
      onAddToCart, 
      setCartOpen,
      setCardItems,
      cardItems, 
       
       }}>
        <div className="wrapper clear">
        
        {<Drawer items={cardItems} onClose={closeCard} onRemove={onRemoveItem} opened={cartOpen} />}

        <Header showCard={openCard} />

        <Route path="/" exact>
          <Home 
              cards={cards} 
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              cardItems={cardItems}
              favorites={favorites}
              isLoading={isLoading}
          
          />
        </Route>

        <Route path="/favorites"><Favorites /></Route>
        <Route path="/shoping"><Shop /></Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
