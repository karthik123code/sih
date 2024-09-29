import React, { useState, useEffect } from "react";
import { CgNametag } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import logo from '../assets/image.png'

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
      <div className="bg-slate-300 flex items-center justify-between p-3 lg:flex-row">
        <div>
          <a
            href="#"
            className="text-black font-mono text-2xl tracking-wider flex items-center"
          >
            {" "}
            <img src={logo} alt="" className='rounded object-fit w-12 border-2 border-black opacity-80 mr-2'/>  NetraNiti
          </a>
        </div>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          {!isLogin ? (
            <button
              className="text-black font-semibold leading-6"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Login <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <button
              className="text-black font-semibold leading-6"
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
