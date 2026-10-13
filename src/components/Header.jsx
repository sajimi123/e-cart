import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-blue-700 px-4 sm:px-6 py-3 shadow-md"
    >
      {/* Logo */}
      <NavbarBrand as={Link} to="/">
        <div className="flex items-center gap-2">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.m_ihrcWT-qJfrwI2BxUHiAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            className="h-10 w-10 object-cover"
            alt=""
          />

         
        </div>
      </NavbarBrand>

      {/* Mobile Menu Button */}
      <NavbarToggle />

      {/* Navigation */}
      <NavbarCollapse>

        {/* Wishlist */}
        <NavbarLink as={Link} to="/wishlist">
          <div className="flex items-center gap-2 text-white transition duration-200 hover:text-red-200">
            <CiHeart
              size={30}
              className="text-white"
            />

            <span className="font-medium">
              
            </span>
          </div>
        </NavbarLink>

        {/* Cart */}
        <NavbarLink as={Link} to="/cart">
          <div className="flex items-center gap-2 text-white transition duration-200 hover:text-yellow-200">
            <CiShoppingCart
              size={30}
              className="text-white"
            />

            <span className="font-medium">
              
            </span>
          </div>
        </NavbarLink>

      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;