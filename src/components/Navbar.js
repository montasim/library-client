import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { RiAdminFill } from 'react-icons/ri';
import { MdSpaceDashboard } from 'react-icons/md';
import LinkComponents from './LinkComponents';

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <LinkComponents to={''} icon={<MdSpaceDashboard className='text-lg' />} name={'Dashboard'} />

                        <LinkComponents to={'employees'} icon={<RiAdminFill className='text-lg' />} name={'Employees'} />
                    </ul>
                </div>
                <Link class="btn btn-ghost text-xl uppercase flex items-center" to='/'>
                    <img className='w-12' src={logo} alt="logo" />
                    String LAB
                </Link>
            </div>
            <div class="navbar-center hidden lg:flex">

            </div>
            <div class="navbar-end">
            </div>
        </div>
    );
};

export default Navbar;