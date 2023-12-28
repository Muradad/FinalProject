import React from "react";
import { IoStar } from "react-icons/io5";
const TestimonialCard = ({ text, stars, img, author, designation }) => {
  
  return (
    <>
    
    <div className="bg-white  rounded-lg shadow-2xl p-8 transition-transform transform hover:scale-105 cursor-default">
      
      <p className="text-gray-800 text-lg mx-5 mt-5">{text}</p>
      <div className="flex items-center mt-4">
        <div className="flex mx-5">
          {stars.map((star, index) => (
            <span key={index} className="text-yellow-500">
              {star}
            </span>
          ))}
        </div>
        <div className="ml-4">
          <img
            src={img}
            alt=""
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="ml-4">
          <p className="text-gray-700 font-bold text-lg">{author}</p>
          <p className="text-gray-600">{designation}</p>
        </div>
      </div>
    </div>
    
    </>
    
  );
};

const testimonials = [
  {
    id: 1,
    text:
      "Maecenas eu accumsan libero. Fusce id imperdiet felis. Cras sed ex vel turpis ultricies blandit nec et massa. Pellentesque lectus turpis, vestibulum eu interdum vel.",
    stars: [<IoStar />, <IoStar />, <IoStar />],
    img:
      "https://eme-2.myshopify.com/cdn/shop/files/4_fc8eaef6-a7d1-4ca0-afb9-fd4bda426635_442x442.jpg?v=1655371095",
    author: "Lura Frazier",
    designation: "-Happy Client",
  },
  {
    id: 2,
    text:
      "Cras eu accumsan libero. Fusce id imperdiet felis. Maecenas sed ex vel turpis ultricies blandit nec et massa. Pellentesque lectus turpis, vestibulum eu interdum vel.",
    stars: [<IoStar />, <IoStar />, <IoStar />],
    img:
      "https://eme-2.myshopify.com/cdn/shop/files/2_1f518151-e22d-4871-b288-8bf0606cd26b_442x442.jpg?v=1655370889",
    author: "Mond Frazier",
    designation: "-Satisfied Customer",
  },
  {
    id: 3,
    text:
      "Fusce eu accumsan libero. Cras id imperdiet felis. Maecenas sed ex vel turpis ultricies blandit nec et massa. Vestibulum eu interdum turpis ultricies blandit nec et massa.vel.",
    stars: [<IoStar />, <IoStar />, <IoStar />],
    img:
      "https://eme-2.myshopify.com/cdn/shop/files/3_4120380e-5673-4677-93ea-698f7d8ce7a1_442x442.jpg?v=1655371025",
    author: "John Doe",
    designation: "-Delighted User",
  },
];

function AboutSwiperData() {
  return (
    <>
    <div className="title mt-28 text-center">
      <h1 className="text-blue-300 font-bold text-[3rem] ">What Clients Say's</h1>
      <p className="text-gray-600">Caught in the moment!</p>
    </div>
       <div className="flex justify-center gap-10 mx-28  mt-10">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </div>
    </>
 
  );
}

export default AboutSwiperData;
