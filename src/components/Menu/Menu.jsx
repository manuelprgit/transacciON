import { NavLink } from 'react-router-dom';

import { GoHome } from "react-icons/go";
import { IoReceiptOutline } from "react-icons/io5";
import { MdOutlineInventory, MdOutlinePendingActions } from "react-icons/md";
import { LuUserCog } from "react-icons/lu";

export const Menu = () => {
    return (

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

    )
}
