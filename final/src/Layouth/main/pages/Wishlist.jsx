import React, { useContext,useState, useEffect } from 'react';
import { WishlistContext } from '../../../context/WishListContext';
import { MdDelete } from 'react-icons/md';

function Wishlist() {
  const { GoWish } = useContext(WishlistContext);
  const [wishlist, setWishlist] = useState([]);
  const token = window.localStorage.getItem('access')
  const getWish = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/GetWishlist',{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
      });
      const data = await response.json();
      setWishlist(data)
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const SetWish = async (id) => {
    try {
      await GoWish(id);
      await getWish();
  
      
    } catch (error) {
      console.error("Wish işlemi sırasında hata oluştu:", error);
    }
  };
  useEffect(() => {

    getWish();
  }, []);



  console.log(wishlist,'-=======================================================')

  return (
    <div>
      { (
        wishlist.map((product) => (
       
          <div key={product.id} className="p-4 overflow-y-auto mt-20" style={{ maxHeight: '60vh' }}>
            <div className="flex items-center mb-4">
              {/* Asagidaki koda fikir vermeyin gece 12 idi axod yox idi */}
              <img src={"http://127.0.0.1:8000/"+product.image} alt="Ürün Resmi" className="w-16 h-16 object-cover rounded" />
              <div className="ml-4">
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="text-xs text-gray-500">{product.price} AZN</p>
              
              </div>
              <MdDelete onClick={() => { SetWish(product.id); }} className="text-gray-500 ml-auto cursor-pointer" />
            </div>
            <div className="p-4 bg-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Toplam:</span>
                <span className="text-lg font-semibold"> AZN</span>
              </div>
              <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-300 transition uppercase">Ödeme Yap</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;
