import React from 'react'
import { AiOutlineProduct } from 'react-icons/ai';
import { ModuleHeader } from '../../components/ModuleHeader/ModuleHeader';
import { FaRegUser, FaSearch } from 'react-icons/fa';

export const ClientManagement = () => {
  return (
    <>
      <ModuleHeader icon={<FaRegUser />} title="Mantenimiento de Clientes" />
      <form
        className='p-4 relative'
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className='flex justify-end gap-4 absolute right-6'>
          <button className='bg-green-500 active:bg-green-600 text-white p-2 px-6 rounded-lg'>Guardar</button>
          <button className='bg-blue-500 active:bg-blue-600 text-white p-2 px-6 rounded-lg flex gap-2 items-center'>
            <FaSearch />
            Buscar
          </button>
          <button className='bg-gray-500 active:bg-gray-600 text-white p-2 px-6 rounded-lg'>Limpiar</button>
        </div>
        <div className='mb-6'>
          <span className='text-gray-500 mb-2'>Código del Cliente</span>
          <p className='font-semibold'>0</p>
        </div>
        <div className='grid grid-cols-3 gap-6 mb-6'>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-gray-500 mb-2'>Nombre</label>
            <input type="text" className='border border-solid border-gray-400 p-2 rounded-lg' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-gray-500 mb-2'>No. Telefono</label>
            <input type="text" placeholder='809-000-0000' className='border border-solid border-gray-400 p-2 rounded-lg' />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-6 mb-6'>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-gray-500 mb-2'>Cédula</label>
            <input type="text" placeholder='000-0000000-0' className='border border-solid border-gray-400 p-2 rounded-lg' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-gray-500 mb-2'>Correo Electronico</label>
            <input type="email" className='border border-solid border-gray-400 p-2 rounded-lg' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-gray-500 mb-2'>Estatus</label>
            <select type="number" className='border border-solid border-gray-400 p-2 rounded-lg' >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6 mb-6'>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-gray-500 mb-2'>Dirección</label>
            <textarea type="text" className='border border-solid border-gray-400 p-2 rounded-lg'></textarea>
          </div>
        </div>
      </form>
    </>
  )
}
