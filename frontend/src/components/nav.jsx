import React, { useState, useEffect } from "react";
import { CgNametag } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const nav = () => {
  const navigate = useNavigate();
  const [isLogin, setIslogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIslogin(true); // If token exists, set logged-in status to true
    }
  }, [isLogin]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIslogin(false);
    console.log("logout");
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a
            href="#"
            className="text-white font-mono text-2xl tracking-wider flex items-center"
          >
            {" "}
            <CgNametag /> Parallax minds
          </a>
        </div>
        {/* <div className='space-x-4'>
          <a href="#" className='text-white hover:bg-indigo-800 rounded-full px-5 py-2'>Shop</a>
          <a href="#" className='text-white hover:bg-indigo-800 rounded-full px-5 py-2'>On Sale</a> 
          <a href="#" className='text-white hover:bg-indigo-800 rounded-full px-5 py-2'>New Arrivals</a>
        </div> */}
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          {!isLogin ? (
            <button
              className="text-white font-semibold leading-6"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Login <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <button
              className="text-white font-semibold leading-6"
              onClick={handleLogOut}
            >
              Logout <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </>
  );
};

export default nav;
