import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [product, setProduct] = useState([])
    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/products');
            const data = await response.json();
            setProduct(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CartContext.Provider value={{ product, fetchData }}>
            {children}
        </CartContext.Provider>
    );
};
