import React from 'react'
import { LuPackageSearch, LuUserRoundSearch } from "react-icons/lu";

export const InputSearch = () => {
    return (
        <div className='h-20 border-solid border-gray-300 border rounded-md flex items-center '>

            <div className='flex h-10 border-solid border-gray-300 border w-1/2 rounded-md overflow-hidden m-2'>
                <input type="text" className='w-full outline-none p-2' placeholder='Escanear o buscar articulo...' />
                <button className='h-full text-2xl w-10 grid place-content-center bg-blue-200 border border-l-gray-300 border-solid'>
                    <LuPackageSearch />
                </button>
            </div>

            <div className='flex h-10 border-solid border-gray-300 border w-1/2 rounded-md overflow-hidden m-2'>
                <input type="text" className='w-full outline-none p-2' placeholder='Buscar cliente...' />
                <button className='h-full text-2xl w-10 grid place-content-center bg-green-200 border border-l-gray-300 border-solid'>
                    <LuUserRoundSearch />
                </button>
            </div>

        </div>
    )
}
