import React from 'react';
import Course from '../components/Course';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import list from '../../public/list.json';

// console.log(list);


export default function Courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/>
    </div>
    <Footer/>  
    </>
  )
}
