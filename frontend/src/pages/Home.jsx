import React, { useEffect } from 'react'
import Nav from '../components/nav'
import About from '../components/about_us'
import Footer from '../components/footer'
import axios from 'axios'

export const Home = () => {

  useEffect(() => {
    const sessionToken = localStorage.getItem('token'); // Get session token from localStorage
  
    axios.get("http://127.0.0.1:5000/protected", {
      headers: {
        Authorization: sessionToken  // Pass the session token in the Authorization header
      }
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <>
    <div className='bg-indigo-950'>
        <Nav/>
    </div>
    <div><About/></div>
    <div>
        <Footer/>
    </div>
    </>
  )
}
