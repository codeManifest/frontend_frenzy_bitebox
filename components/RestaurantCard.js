import React from 'react'
import Image from 'next/image'
import Data from '@/pages/api/Data'
import Card from './reuse/Card'


export default function RestaurantCard() {
  return (
    <div className="  m-auto h-[400px] my-5 w-[80%]">
      <h1 className="text-5xl font-semibold my-7">Popular Dish</h1>
      <div className="flex justify-between w-full flex-wrap ">
        {Data.map((item, index) => (
          <Card
            key={index}
            Price={item.food_price}
            Title={item.food_name}
            Thumbnail={item.image_url}
            RestroName={item.restaurant_name}
          />
        ))}
      </div>
    </div>
  );
}