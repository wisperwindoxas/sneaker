import Card from '../components/Card';

function Home({
    cards,
    searchValue,
    cardItems,
    favorites,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,    
    onAddToCart,
    isLoading
}) {

  const renderItem = () =>{
    const filterItem = cards.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()),);

    return  (isLoading ? [...Array(12)] : filterItem).map((card,index) => (
                <Card
                  key={index}
                  onFavorite={ (obj) => onAddToFavorite(obj)}
                  onPlus={(obj) => onAddToCart(obj)}
                  added={cardItems.some(obj => obj.id === card.id)}
                  favoriteAdded={favorites.some(obj => obj.id === card.id)}
                  loading={isLoading}
                  {...card}
                />
    ))
        }

    return(
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">{searchValue !== ""? `Поиск по запросу?: "${searchValue}"`: "Все кроссовки"}</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            {searchValue && <img onClick={() => setSearchValue("")} className="remove-btn clear cu-p" src="/img/btn-remove.svg" alt="removeBtn" />}
            <input onChange={ (e) => onChangeSearchInput(e)}  value={searchValue} type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex justify-between flex-wrap mb-20"> {renderItem()} </div>
      </div>
    )
}

export default Home