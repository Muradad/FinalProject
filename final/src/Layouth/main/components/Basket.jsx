import { useState } from "react";
import { MdOutlineShoppingCart, MdClose } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Basket() {
    const [basketOpen, setBasketOpen] = useState(false);

    const handleBasketOpen = () => {
        setBasketOpen(!basketOpen);
    };

    const closeModal = () => {
        setBasketOpen(false);
    };

    return (
        <div className="relative">
        {/* Sepetin içindeki ürün sayısını gösteren bildirim */}
        <span className="absolute -top-5 right-[-10px] bg-red-900 text-white text-xs rounded-full p-1">0</span>
  
        {/* Sepetin içeriğini gösteren sidebar */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl text-black transform transition-transform duration-300 ease-in-out ${basketOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Başlık ve Kapatma Butonu */}
          <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h2 className="text-lg font-semibold">  Cart</h2>
            <MdClose onClick={closeModal} className="text-2xl cursor-pointer" />
          </div>
  
          {/* Sepet içeriği */}
          <div className="p-4 overflow-y-auto" style={{ maxHeight: '60vh' }}>
            {/* Örnek ürün kartı */}
            <div className="flex items-center mb-4">
              <img src="https://eme-2.myshopify.com/cdn/shop/products/6_e5f93193-cfdc-4f66-9e72-aec7de1dba78_360x.jpg?v=1655288184" alt="Ürün Resmi" className="w-16 h-16 object-cover rounded" />
              <div className="ml-4">
                <p className="text-sm font-semibold">malin Adı</p>
                <p className="text-xs text-gray-500">1x - ₺99.99</p>
              </div>
              <MdDelete className="text-gray-500 ml-auto cursor-pointer" />
            </div>
  
            {/* Diğer ürün kartları buraya eklenebilir */}
          </div>
  
          {/* Toplam fiyat ve alışverişi tamamla butonu */}
          <div className="p-4 bg-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Total:</span>
              <span className="text-lg font-semibold">$99.99</span>
            </div>
            <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-300 transition uppercase">Proceed to checkout</button>
          </div>
        </div>
  
        {/* Sepetin açılmasını sağlayan buton */}
        <MdOutlineShoppingCart onClick={handleBasketOpen} className="cursor-pointer text-[20px]" />
      </div>
    );
}

export default Basket;
