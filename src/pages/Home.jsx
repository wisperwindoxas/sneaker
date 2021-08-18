import Card from '../components/Card';

function Home({cards,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,    
    onAddToCart
}) {
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

        <div className="sneakers d-flex justify-between flex-wrap mb-20">
          {cards.filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((card) => {
            return (
              <Card
                key={card.id}
                onFavorite={ (obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                {...card}
              />
            );
          })}
        </div>
      </div>
    )
}

export default Home