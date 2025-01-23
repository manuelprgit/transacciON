import React from 'react'
import { AiOutlineProduct } from 'react-icons/ai'
import { ModuleHeader } from '../../components/ModuleHeader/ModuleHeader'

export const ProductManagement = () => {
    return (
        <>
            <ModuleHeader icon={<AiOutlineProduct />} title="Mantenimiento de Productos" />
            <form
                className='p-4 relative'
                onSubmit={e => {
                    e.preventDefault();
                }}
            >
                <div className='flex justify-end gap-4 absolute right-6'>
                    <button className='bg-green-500 active:bg-green-600 text-white p-2 px-6 rounded-lg'>Guardar</button>
                    <button className='bg-gray-500 active:bg-gray-600 text-white p-2 px-6 rounded-lg'>Limpiar</button>
                    <button className='bg-red-500 active:bg-red-600 text-white p-2 px-6 rounded-lg'>Volver</button>
                </div>
                <div className='mb-6'>
                    <span className='text-gray-500 mb-2'>Código</span>
                    <p className='font-semibold'>0</p>
                </div>
                <div className='grid grid-cols-3 gap-6 mb-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>Código de Barra</label>
                        <input type="text" placeholder='0000000000' className='border border-solid border-gray-400 p-2 rounded-lg' />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6 mb-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>Nombre del producto</label>
                        <input type="text" className='border border-solid border-gray-400 p-2 rounded-lg' />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6 mb-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>Descripción</label>
                        <textarea type="text" className='border border-solid border-gray-400 p-2 rounded-lg' ></textarea>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-6 mb-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>Precio</label>
                        <input type="number" className='border border-solid border-gray-400 p-2 rounded-lg text-right' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>Existencia</label>
                        <input type="number" className='border border-solid border-gray-400 p-2 rounded-lg text-right' disabled />
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-6 mb-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-gray-500 mb-2'>Estatus</label>
                        <select type="number" className='border border-solid border-gray-400 p-2 rounded-lg' >
                            <option value="Disponible">Disponible</option>
                            <option value="No Disponible">No Disponible</option>
                        </select>
                    </div>
                </div>
            </form>
        </>
    )
}
