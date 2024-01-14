import React from "react";
import { BasketProvider } from './Context/BasketContext';
import { FilterProvider } from './Layouth/main/pages/Filter/FilterContext';
import { FilterDataResProvider } from './Layouth/main/pages/Filter/shopnavbar/Context/FilterDataResContext';
import './index.css';
import { MainRouterDom } from './router';
import { WishlistProvider } from "./context/WishListContext";

function App() {
  return (
    <>
      <WishlistProvider>
        <FilterDataResProvider>
          <FilterProvider>
            <BasketProvider>
              <MainRouterDom />
            </BasketProvider>
          </FilterProvider>
        </FilterDataResProvider>
      </WishlistProvider>
    </>
  );
}

export default App;
