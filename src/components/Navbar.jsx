/* import React, {useState} from 'react'
import {Link} from 'react-router'
import { Car, Menu, X, LogIn } from 'lucide-react'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className='bg-white shadow sticky top-0 z-50'>
            <div>
                <div> */

                    {/*Logo*/}
                    {/* <Link to={"/"} className='flex items-center space-x-2 text-gray-800'>
                        <Car /><span>AutoRent</span>
                    </Link>
 */}
                    {/* Desktop Navigation */}
                    {/* <div>
                        <link to={"/"}>Home</link>
                        <link to={"#"}>Cars</link>
                        <link to={"#"}>About</link>
                        <link to={"#"}>Contact</link>
                    </div>
                    <div>
                        <Link to={"/login"}>Login</Link>
                        <Link to={"/register"}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav */}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">Bilforhandler</div>
        <nav>
          <NavLink to="/" end>
            Hjem
          </NavLink>
          <NavLink to="/biler">Biler</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
}
