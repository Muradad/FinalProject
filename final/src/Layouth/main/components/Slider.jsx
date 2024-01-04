import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './scss/Slider.scss'
import 'swiper/css/effect-flip';
import {Link} from "react-router-dom"
import { EffectFlip } from 'swiper/modules';
function Slider() {
  const [isFetchDataCompleted, setFetchDataCompleted] = useState(false);
  const [products,setProduct] = useState([])
console.log(products)
  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/SliderView');
      const data = await response.json();
      setProduct(data)
      setFetchDataCompleted(true);
   console.log(data,'--3-3-3')
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
useEffect(()=>{
  fetchData()
},[])

  
  const [spring, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 350, friction: 40 },
  }));


  
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  

  const trans = (x, y) => `translate(${x}px, ${y}px)`;

  useEffect(() => {
    const container = containerRef.current;
    const container2 = containerRef2.current;
    const container3 = containerRef3.current;

    if (isFetchDataCompleted && container) {
  
    // keyframes
    const animateContinuous = () => {
      const update = () => {
        const x = Math.cos(Date.now() * 0.001) * 50;
        const y = Math.sin(Date.now() * 0.001) * 50;
        set({ xy: [x, y] });
        requestAnimationFrame(update);
      };

      update();
    };

    animateContinuous();

   if (products.length>0){
    var handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = -(e.clientX - rect.left - rect.width / 2) / 5;
      const y = -(e.clientY - rect.top - rect.height / 2) / 5;
      set({ xy: [x, y] });
    };
    var handleMouseLeave = () => {
      set({ xy: [0, 0] });
    };
    container.addEventListener('mousemove', handleMouseMove);

    container.addEventListener('mouseleave', handleMouseLeave);
   }
   if (products.length>1){
    var handleMouseMove2 = (e) => {
      const rect = container2.getBoundingClientRect();
      const x = -(e.clientX - rect.left - rect.width / 2) / 5;
      const y = -(e.clientY - rect.top - rect.height / 2) / 5;
      set({ xy: [x, y] });
    };
    var handleMouseLeave2 = () => {
      set({ xy: [0, 0] });
    };
    container2.addEventListener('mousemove', handleMouseMove2);
    container2.addEventListener('mouseleave', handleMouseLeave2);
   }

   if (products.length>2){
    var handleMouseMove3 = (e) => {
      const rect = container3.getBoundingClientRect();
      const x = -(e.clientX - rect.left - rect.width / 2) / 5;
      const y = -(e.clientY - rect.top - rect.height / 2) / 5;
      set({ xy: [x, y] });
    };
    var handleMouseLeave3 = () => {
      set({ xy: [0, 0] });
    };
    container3.addEventListener('mousemove', handleMouseMove3);

    container3.addEventListener('mouseleave', handleMouseLeave3);
   }
   

  



    // Temizleme
    return () => {
      if (products.length>0){
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (products.length>1){
        container2.removeEventListener('mousemove', handleMouseMove2);
        container2.removeEventListener('mouseleave', handleMouseLeave2);
      }
      if (products.length>2){
        container3.removeEventListener('mousemove', handleMouseMove3);
        container3.removeEventListener('mouseleave', handleMouseLeave3);
      }

    };}
  },[containerRef,isFetchDataCompleted,set]);
  const containerRefs = [containerRef, containerRef2, containerRef3];
  useEffect(() => {
    const initialAnimation = () => {
      set({ xy: [100, 100] }); 
      set({ xy: [0, 0], config: { duration: 1000 } }); 
    };

    initialAnimation();

  }, [set]);

  return (
    <Swiper
      effect={'flip'}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[EffectFlip]}
    >
   {products.map((product,index)=>(
    
     <SwiperSlide key={index}><>
     <div className='animated-image-container'  ref={index === 0 ? containerRefs[0] : index === 1 ? containerRefs[1] : containerRefs[2]}>
       <div style={{ backgroundColor: `${product.color}`}} className='overflow-effect '></div>
       <div className='ove'>
         <animated.img
           src={product.image}
           alt=""
           className='animated-image'
           style={{
             transform: spring.xy.interpolate(trans),
           }}
         />
         <div className="content-container">
          <div className='content-cont'>
          <p className="text-gray-600 mb-4">{product.content}</p>
           <h2 className=" mt-10 text-6xl leading-[70px] max-w-sm mb-6 font-bold">{product.name}</h2>
           <Link to={"/shop"} className=" uppercase px-8 py-3  bg-blue-950 text-white hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
             Shop now
           </Link>
          </div>
         </div>
       </div>
     </div>
   </>
   </SwiperSlide>
   ))}
 
    </Swiper>
    

  );
}

export default Slider;
