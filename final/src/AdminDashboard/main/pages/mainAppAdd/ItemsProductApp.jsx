import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
function ItemsProductApp() {
    const { slug,item } = useParams();
    
    const [data, setData] = useState([])

    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/main/mainapp/${slug}/${item}/`);
        const data = await response.json();
        const parsedItems = JSON.parse(data);
        setData(parsedItems[0])
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    useEffect(() => {
      fetchData()
    }, [])

    const token = window.localStorage.getItem('access')
    const [inputValues, setInputValues] = useState({
        title: '',
        name:  '',
        description: '',
        content:  '',
        
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
  const Edit = async () => {
    try {
      const nonEmptyValues = Object.fromEntries(
        Object.entries(inputValues).filter(([key, value]) => value !== '')
      );
      const response = await fetch(`http://127.0.0.1:8000/api/main/edit/mainapp/${slug}/${item}/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          nonEmptyValues
        )
      });

      if (response.ok) {
        const newData = await response.json();
        console.log('istek gonderildi:', newData);
    fetchData()
      } 
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

    if(data.fields){
  return (
    <div>
      <div className='flex flex-col mt-20 mx-20 leading-10'>
      <h1 className='text-4xl'>{slug}</h1>
      <h3 className='text-2xl pt-10'>{data.fields.name ? data.fields.name : data.fields.title}</h3>
      <div className='mt-4'>
        {data.fields.title ? (
          <div className='mb-4'>
            <label htmlFor="title" className='block text-sm font-medium text-gray-700'>
              Title:
            </label>
            <input
              className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none '
              type="text"
              onChange={handleInputChange}
              name='title'
              id='title'
              placeholder={data.fields.title}
            />
          </div>
        ) : (
          <div className='mb-4= flex items-center gap-20 mb-10'>
            <label htmlFor="name" className='block text-sm font-medium text-gray-700'>
              Name:
            </label>
            <input
              className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none '
              type="text"
              onChange={handleInputChange}
              name='name'
              id='name'
              placeholder={data.fields.name}
            />
          </div>
        )}
        
        {data.fields.description ? (
          <div className='mb-4 flex items-center gap-11'>
            <label htmlFor="description" className='flex justify-between items-center w-28  text-sm font-medium text-gray-700'>
              Description:
            </label>
            <textarea
              className='mt-1 p-2 w-[50%] border border-gray-300 rounded-md focus:outline-none '
              type="textarea"
              onChange={handleInputChange}
              placeholder={data.fields.description}
              name='description'
              id='description'
            />
          </div>
        ) : data.fields.content ?  (
          <div className='flex'>
            <label htmlFor="content" className='flex justify-between items-center w-28  text-sm font-medium text-gray-700'>
              Content:
            </label>
            <input
              className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none '
              type="text"
              onChange={handleInputChange}
              placeholder={data.fields.content}
              name='content'
              id='content'
            />
          </div>
        ):(<></>)}
      <button onClick={Edit} className='bg-gray-500  px-10 mt-10   text-white'>Elave et</button>

      </div>
    </div>
    </div>
  )}
}

export default ItemsProductApp
