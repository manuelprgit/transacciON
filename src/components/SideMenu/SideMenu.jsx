
import React from 'react';
import { NavLink } from 'react-router-dom';

import { GoHome } from "react-icons/go";
import { IoReceiptOutline } from "react-icons/io5";
import { MdOutlineInventory, MdOutlinePendingActions } from "react-icons/md";
import { LuUserCog } from "react-icons/lu";


export const SideMenu = () => {
    return (
        <div className='w-1/6 p-6 relative'>
            <div className='flex justify-center items-center mb-6'>
                <figure className='w-32 h-14 rounded-lg overflow-hidden'>
                    <img src="../../public/img/logo.jpg" alt="logo" />
                </figure>
            </div>
            <div className='border border-solid h-10 grid place-items-center mb-6 rounded-lg border-gray-400'>
                <p>Hola, <span>Manuel Perez</span></p>
            </div>
            <ul>
                <li className='mb-1'>
                    <NavLink to='/' className='flex items-center gap-2 hover:bg-blue-100 p-3 rounded-lg transition'>
                        <GoHome className='text-xl' />
                        <p>Home</p>
                    </NavLink>
                </li>
                <li className='mb-1'>
                    <NavLink to='/facturacion' className='flex items-center gap-2 hover:bg-blue-100 p-3 rounded-lg transition'>
                        <IoReceiptOutline className='text-xl' />
                        <p>Facturacion</p>
                    </NavLink>
                </li>
                <li className='mb-1'>
                    <NavLink to='/inventario' className='flex items-center gap-2 hover:bg-blue-100 p-3 rounded-lg transition'>
                        <MdOutlineInventory className='text-xl' />
                        <p>Inventario</p>
                    </NavLink>
                </li>
                <li className='mb-1'>
                    <NavLink to='/gestion-clientes' className='flex items-center gap-2 hover:bg-blue-100 p-3 rounded-lg transition'>
                        <LuUserCog className='text-xl' />
                        <p>Gestion de Clientes</p>
                    </NavLink>
                </li>
                <li className='mb-1'>
                    <NavLink to='/cuentas-cobrar' className='flex items-center gap-2 hover:bg-blue-100 p-3 rounded-lg transition'>
                        <MdOutlinePendingActions className='text-xl' />
                        <p>Cuentas por Cobrar</p>
                    </NavLink>
                </li>
            </ul>
            <div className='border border-solid h-10 grid place-items-center mt-6 rounded-lg border-gray-400 absolute bottom-6 w-full'>
                3:15 PM | 22-01-2025
            </div>
        </div>
    )
}
