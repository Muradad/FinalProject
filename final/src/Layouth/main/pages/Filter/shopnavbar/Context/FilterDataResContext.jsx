import React, { createContext, useState } from "react";
import { useEffect } from "react";
export const FilterResDataContext = createContext();

export const FilterDataResProvider = ({ children }) => {
    const [filterData, setFilterData] = useState([]);
    const fetchFilterData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/filter');
        const data = await response.json();
        setFilterData(data);
        console.log(data,'---------------')
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
    fetchFilterData();}
    ,[])

  return (
      <FilterResDataContext.Provider value={{ filterData,setFilterData }}>
        {children}
      </FilterResDataContext.Provider>
  );
};


