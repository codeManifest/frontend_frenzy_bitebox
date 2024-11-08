import React, { useState } from 'react';

export default function Card({ Thumbnail, Title, Price, RestroName }) {
  // State to track items added to the bucket
  const [bucket, setBucket] = useState([]);

  // Function to handle adding to bucket
  function handleAddToBucket() {
    const item = { Title, Price, RestroName }; // Item to add
    setBucket(prevBucket => [...prevBucket, item]); // Add item to bucket

    // Log the current items in the bucket (for testing)
    console.log("Current Bucket Items:", [...bucket, item]);
  }

  return (
    <div
      className="w-1/4 h-[200px] rounded-md shadow-md m-5 bg-cover bg-center hover:scale-105 transition-all"
      style={{ backgroundImage: `url(${Thumbnail})` }}
    >
      {/* Overlay for text */}
      <div className="bg-black bg-opacity-50 h-full w-full p-4 flex flex-col justify-end rounded-md text-white">
        <div>
          <h1 className="text-xl text-orange-400 font-semibold">${Price}</h1>
        </div>
        <div>
          <h1 className="text-1xl font-semibold">{Title}</h1>
          <div className="my-3">
            <button
              className="px-3 py-2 bg-orange-400 rounded-lg"
              onClick={handleAddToBucket}
            >
              Add to Bucket
            </button>
          </div>
        </div>
        <p className="text-lg">{RestroName} </p>
      </div>
    </div>
  );
}