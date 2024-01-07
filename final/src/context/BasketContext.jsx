import { createContext, useState, useContext, useEffect } from "react";
import Swal from 'sweetalert2';
export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
   const token = window.localStorage.getItem('access')
  const GoBasket = async (product_id,quantity=null) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/basket', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                product:product_id,
                quantity:quantity
            }
        )
      });

      if (response.ok) {
        const newData = await response.json();
        console.log('istek gonderildi:', newData);
        getBasketItems()
      } else {
        Swal.fire({
            title: 'Qeydiyyat',
            text: 'Sebete atmaq ucun qeydiyyatdan kecmelisiniz.!',
            icon: 'warning', // You can use 'info', 'success', 'error', 'warning', etc.
            confirmButtonText: 'Giris et', // Customize the text of the confirm button
            cancelButtonText: 'Legv et', // Customize the text of the cancel button (if you have one)
            showCancelButton: true, // Set to true to show the cancel button
            reverseButtons: true, // Set to true to swap the positions of the confirm and cancel buttons
          }).then((result) => {
            // Check if the user clicked the "Go ahead" button
            if (result.value) {
              // Redirect to the desired URL
              window.location.href = '/auth/login';
            }
          });
      }
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  const getBasketItems = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/getbasket',{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
      });
      const data = await response.json();
      setBasket(data)
      console.log(basket,'--------')
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {

    getBasketItems();
  }, []);

  return (
    <BasketContext.Provider value={{ basket, setBasket, GoBasket }}>
      {children}
    </BasketContext.Provider>
  );
};