import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom"

export const Home = () =>  {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate()
  
 
  return (
    <div className="bg-gray-600 h-screen flex justify-center">

    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4  bg-gray-800 rounded">
      <div className="flex items-center justify-between text-blue-gray-900  ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-white"
        >
          Material Tailwind
        </Typography>
        <div className="hidden flex-wrap items-center gap-2 lg:flex ">
          <Button variant="gradient" size="sm" onClick={() => {
            navigate('/signin')
          }}>
            Login
          </Button>
          
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
    </Navbar>
    </div>
  );
}