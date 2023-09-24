import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  // state 
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  
  // side effect 
  useEffect(() => {
    const favoritesItems = JSON.parse(localStorage.getItem("favorits"));
    if (favoritesItems) {
      setFavorites(favoritesItems);
      const total = favoritesItems.reduce((pre, curr) => pre + curr.price, 0)
      setTotalPrice(total)
    } else {
      setNoFound("No data found");
    }
  }, []);

//  onclick funtion 
  const handleRemove = () => {
    localStorage.clear()
    setFavorites([])
    setNoFound("No data found");
  }

  return (
    <div>
      {noFound ? (
        <p className="h-[70vh] flex justify-center items-center text-2xl font-bold"> {noFound} </p>
      ) : (
          <div>
            <div>
              {favorites.length > 0 && <button onClick={handleRemove} className="px-3 py-2 my-4 bg-red-500 rounded-md text-white block mx-auto">Delete All Favorites</button>}
              <p>TotalPrice: ${ totalPrice.toFixed(2)}</p>
            </div>
          <div className="grid grid-cols-2 gap-5">
              {
                isShow? favorites.map((phone) => (
                  <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                )) : 
                favorites.slice(0,4).map((phone) => (
                  <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                ))
            }
            </div>
            {favorites.length>4 && <button onClick={() => setIsShow(!isShow)} className="px-3 my-4 py-2 bg-red-500 rounded-md text-white block mx-auto">
               {isShow ? "see less" : "see more"}
            </button>}
        </div>
      )}
    </div>
  );
};

export default Favorites;
