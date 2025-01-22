
import React from 'react';
import { Clock } from '../Clock/Clock'
import { Menu } from '../Menu/Menu'


export const SideMenu = () => {
    return (
        <div className='w-1/4 p-6 relative max-w-[300px] min-w-[300px] border-r border-solid border-gray-400'>
            <div className='flex justify-center items-center mb-6'>
                <figure className='w-32 h-14 rounded-lg overflow-hidden'>
                    <img src="../../public/img/logo.jpg" alt="logo" />
                </figure>
            </div>
            <div className='border border-solid h-10 grid place-items-center mb-6 rounded-lg border-gray-400'>
                <p>Hola, <span>Manuel Perez</span></p>
            </div>
            <Menu />
            <Clock />
        </div>
    )
}
