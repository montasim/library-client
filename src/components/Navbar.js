import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import LinkComponents from './LinkComponents';
import { FaUserFriends } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { ImBooks } from 'react-icons/im';

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="navbar-start">
                <Link class="btn btn-ghost text-lg md:text-xl lg:text-xl uppercase flex items-center" to='/'>
                    <img className='w-12 mr-4' src={logo} alt="logo" />
                    Library Management
                </Link>
            </div>
            <div class="navbar-center hidden lg:flex">

            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <HiMenuAlt3 className='text-2xl' />
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <LinkComponents to={'/students'} icon={<FaUserFriends className='text-lg' />} name={'Students'} />

                        <LinkComponents to={'books'} icon={<ImBooks className='text-lg' />} name={'Books'} />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;