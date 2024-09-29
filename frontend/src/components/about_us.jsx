import { BsFacebook,BsTwitter,BsInstagram,BsTelegram } from 'react-icons/bs';
import DigImage from '../assets/digital.webp';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";
// import AOS from "aos";



const about_us = () => {
  const navigate = useNavigate()
  return (
    <>
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white bg-black'>
        <div className='lg:w-1/2 ssm:w-fit '>
        <h1 className='text-6xl mb-5 text-slate-300'>About Us</h1>
        <hr/>
        <p className='mt-10 text-xl text-slate-300 font-sans '>NetraNiti is a social media parsing platform aimed to aid crime investigators in collecting posts and information posted on suspects social media profiles by compiling the data in a detailed document format.</p>
        </div>
        <div className='w-1/3 items-center ssm:w-fit'>
            <img src={DigImage} alt="" width={350} height={300} className='rounded-full w-full border-8 border-white opacity-60'/>
        </div>
        
    </section>
    <section className='flex p-12 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white text-6xl bg-black'>
    <div className='lg:w-1/2 ssm:w-fit '>
            <h1 className='text-6xl mb-5 text-slate-300'>
            Platforms Available</h1>
            <hr/>
            <div className='flex justify-around items-center mt-10 space-x-8 cursor-pointer'>
                <BsFacebook/>
                <button onClick={() => {
                  navigate('/form')
                }}>
                <BsInstagram/></button>
                <BsTwitter/>
                <BsTelegram/>
            </div>
        </div>
        </section>
    </>
  )
}

export default about_us