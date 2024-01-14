import React, { useContext, useEffect } from 'react';
import { WishlistContext } from '../../../context/WishListContext';
import { MdDelete } from 'react-icons/md';

function Wishlist() {
  const { wishlist, GoWish } = useContext(WishlistContext);

  const wishTotalPrice = () => {
    let totalPrice = 0;
    if (wishlist.length > 0) {
      wishlist.forEach(item => {
        totalPrice += item.price;
      });
    }
    return totalPrice;
  };

  useEffect(() => {
   
    console.log('wishlist geldi:', wishlist);
  }, [wishlist]);

  return (
    <div>
      {wishlist.length > 0 && (
        wishlist.map((product) => (
          <div key={product.id} className="p-4 overflow-y-auto" style={{ maxHeight: '60vh' }}>
            <div className="flex items-center mb-4">
              <img src={product.image} alt="Ürün Resmi" className="w-16 h-16 object-cover rounded" />
              <div className="ml-4">
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="text-xs text-gray-500">{product.price} AZN</p>
                <p className="text-xs text-gray-500">{product.wishlistitem.length > 0 ? product.wishlistitem[0].quantity : 0} adet</p>
              </div>
              <MdDelete onClick={() => { GoWish(product.id); }} className="text-gray-500 ml-auto cursor-pointer" />
            </div>
            <div className="p-4 bg-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Toplam:</span>
                <span className="text-lg font-semibold">{wishTotalPrice()} AZN</span>
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
