
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Clock } from '../Clock/Clock'

import { GoHome } from "react-icons/go";
import { IoReceiptOutline } from "react-icons/io5";
import { MdOutlineInventory, MdOutlinePendingActions } from "react-icons/md";
import { LuUserCog } from "react-icons/lu";


export const SideMenu = () => {
    return (
        <div className='w-1/4 p-6 relative max-w-[300px]'>
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
                    <NavLink to='/' className={({ isActive }) =>
                        `flex items-center gap-2 p-3 rounded-lg transition hover:bg-blue-100 ${isActive ? 'bg-blue-300' : ''
                        }`
                    }>
                        <GoHome className='text-xl' />
                        <p>Home</p>
                    </NavLink>
                </li>
                <li className='mb-1'>
                    <NavLink to='/facturacion' className={({ isActive }) =>
                        `flex items-center gap-2 p-3 rounded-lg transition hover:bg-blue-100 ${isActive ? 'bg-blue-300' : ''
                        }`
                    }>
                        <IoReceiptOutline className='text-xl' />
                        <p>Facturación</p>
                    </NavLink>
                </li>
                <li className='mb-1'>
                    <NavLink to='/inventario' className={({ isActive }) =>
                        `flex items-center gap-2 p-3 rounded-lg transition hover:bg-blue-100 ${isActive ? 'bg-blue-300' : ''
                        }`
                    }>
                        <MdOutlineInventory className='text-xl' />
                        <p>Inventario</p>
                    </NavLink>
                </li>
                <li className='mb-1'>
                    <NavLink to='/gestion-clientes' className={({ isActive }) =>
                        `flex items-center gap-2 p-3 rounded-lg transition hover:bg-blue-100 ${isActive ? 'bg-blue-300' : ''
                        }`
                    }>
                        <LuUserCog className='text-xl' />
                        <p>Gestion de Clientes</p>
                    </NavLink>
                </li>
                <li className='mb-1'>
                    <NavLink to='/cuentas-cobrar' className={({ isActive }) =>
                        `flex items-center gap-2 p-3 rounded-lg transition hover:bg-blue-100 ${isActive ? 'bg-blue-300' : ''
                        }`
                    }>
                        <MdOutlinePendingActions className='text-xl' />
                        <p>Cuentas por Cobrar</p>
                    </NavLink>
                </li>
            </ul>
            <Clock />
        </div>
    )
}
