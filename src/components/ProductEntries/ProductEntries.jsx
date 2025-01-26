import React from 'react'
import { LuPackageSearch, LuSquareUser, LuUserCheck, LuUserCog, LuUserRound, LuUserRoundCheck } from 'react-icons/lu'
import { LiaUserTieSolid } from "react-icons/lia";


export const ProductEntries = () => {
    return (
        <div className='rounded-lg border border-solid border-gray-300 px-4 mt-4'>
            <form action="" className='relative pt-4' onSubmit={e => e.preventDefault()}>
                <div className='flex justify-end gap-4 absolute right-6'>
                    <button className='bg-green-500 active:bg-green-600 text-white p-2 px-6 rounded-lg'>Guardar</button>
                    <button className='bg-gray-500 active:bg-gray-600 text-white p-2 px-6 rounded-lg'>Limpiar</button>
                    <button className='bg-red-500 active:bg-red-600 text-white p-2 px-6 rounded-lg'>Volver</button>
                </div>

                <div className='grid grid-cols-4 gap-6'>
                    <div className='mb-6'>
                        <span className='text-gray-500 mb-2'>Código</span>
                        <p className='font-semibold'>0</p>
                    </div>
                    <div className='mb-6'>
                        <span className='text-gray-500 mb-2'>Fecha</span>
                        <p className='font-semibold'>26-01-2025</p>
                    </div>

                </div>

                <div className='grid grid-cols-4 gap-6'>

                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>No. Documento</label>
                        <input type="text" className='border border-solid border-gray-400 p-2 rounded-lg' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>Proveedor</label>
                        <div className='flex h-10 border-solid border-gray-400 pl-2 border  rounded-md overflow-hidden'>
                            <input type="text" className='w-full outline-none' />
                            <button className='h-full text-2xl w-10 grid place-content-center bg-green-200 border border-l-gray-300 border-solid'>
                                <LiaUserTieSolid />
                            </button>
                        </div>
                    </div>

                    {/* <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>Fecha</label>
                        <input type="date" className='border border-solid border-gray-400 p-1.5 rounded-lg' />
                    </div> */}

                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>Nota</label>
                        <textarea type="text" className='border border-solid border-gray-400 p-2 rounded-lg' ></textarea>
                    </div>

                </div>

            </form>
            <div className="overflow-x-auto overflow-y-auto h-[500px]">

                <div className='grid grid-cols-3 gap-6 mb-1'>

                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>Productos</label>
                        <div className='flex h-10 border-solid border-gray-400 pl-2 border  rounded-md overflow-hidden'>
                            <input type="text" className='w-full outline-none' placeholder='0000000000' />
                            <button className='h-full text-2xl w-10 grid place-content-center bg-blue-200 border border-l-gray-300 border-solid'>
                                <LuPackageSearch />
                            </button>
                        </div>
                    </div>
                </div>

                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Artículo
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Cantidad
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Precio
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Descuento
                            </th>
                            <th className="px-6 text-right py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Subtotal
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                --
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {articles.map(article => (
                            <ArticlesTableRow
                                key={article.id}
                                name={article.name}
                                price={article.price}
                                quantity={article.quantity}
                            />
                        ))} */}
                    </tbody>
                </table >
            </div >
        </div>
    )
}
