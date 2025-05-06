import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FreeBook from '../components/FreeBook';
import Cards from '../components/Cards';


export default function Home() {
  return (
    <>
    <div>
       <Navbar/>
         <Banner/>
         <FreeBook/>
         <Footer/>
         <Cards/>
    </div>
    </>
  );
}
