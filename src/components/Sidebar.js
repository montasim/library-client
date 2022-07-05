import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { Outlet } from 'react-router-dom';
import NavLinkComponents from './NavLinkComponents';

const Sidebar = () => {
    return (
        <div class="drawer drawer-mobile shadow-xl">
            <input id="dashboard" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard" class="drawer-overlay"></label>
                <div class="flex flex-col justify-between">
                    <div class="p-2">
                        <nav class="flex flex-col mt-6 space-y-1 list-none">
                            <NavLinkComponents to={'/students'} icon={<FaUserFriends className='text-lg' />} name={'Students'} />

                            <NavLinkComponents to={'books'} icon={<ImBooks className='text-lg' />} name={'Books'} />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;