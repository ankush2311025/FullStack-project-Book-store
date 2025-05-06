
import React from 'react';

export default function Cards({ item }) {
  console.log(item);

  // Check if item is undefined or null before rendering the card.
  if (!item) {
    return null; // Return null if item is not provided, avoiding the error.
  }

  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-92 shadow-sm mt-4 hover:scale-105 duration-100 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            {/* If item.image is undefined, use a default image */}
            <img src={item.image || '/default.jpg'} alt="Card" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions  justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full hover:bg-pink-500  hover:text-white  duration-200 ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
