import React from 'react';
import Cards from "./Cards.jsx";
// import list from "../../public/list.json";
import {Link} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';

export default function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async ()=> {
      try{
      const res = await axios.get("http://localhost:3000/Books");
      console.log(res.data);
      setBook(res.data);
      
      }catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);
  return (
    <>
    <div className='mt-28 items-center justify-center text-center'>
    <div className='max-w-screen-3x1 container mx-auto  md:px-20 px-4 '>
      <h1 className="text-4xl"> We're delighted to have you <span className='text-pink-500'>Here ! :) </span>
      </h1>
      <p className='mt-12'> I will write here after the project ! </p>
      <Link to = "/">
      <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'> Back</button>
      </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
      {
        book.map((item)=>(
          <Cards key={item._id} item={item}/>
        ))
      }
    </div>
    </div>
</>
  )
}
