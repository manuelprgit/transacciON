import React from 'react'

import { InventoryArticlesTable } from '../../components/InventoryArticlesTable/InventoryArticlesTable'
import { CiBoxes } from 'react-icons/ci'
import { ModuleHeader } from '../../components/ModuleHeader/ModuleHeader'
import { BiSearch } from 'react-icons/bi'

const articles = [
    {
        id: 1,
        name: 'Camiseta',
        quantity: 50,
        price: '20.00',
        status: 'Disponible',
        barcode: '1234567890123'
    },
    {
        id: 2,
        name: 'Pantalones',
        quantity: 30,
        price: '35.00',
        status: 'Disponible',
        barcode: '1234567890124'
    },
    {
        id: 3,
        name: 'Chaqueta',
        quantity: 20,
        price: '50.00',
        status: 'Agotado',
        barcode: '1234567890125'
    },
    {
        id: 4,
        name: 'Zapatos',
        quantity: 15,
        price: '45.00',
        status: 'Disponible',
        barcode: '1234567890126'
    },
    {
        id: 5,
        name: 'Sombrero',
        quantity: 25,
        price: '15.00',
        status: 'Disponible',
        barcode: '1234567890127'
    }
]

export const MasterInventory = () => {
    return (
        <>
            <ModuleHeader icon={<CiBoxes />} title="Control de Inventario" />
            <div className='flex h-10 border-solid border-gray-300 border w-1/3 rounded-md overflow-hidden mb-4'>
                <input type="text" className='w-full outline-none p-2' placeholder='Escanear o buscar articulo...' />
                <div className='h-full text-2xl w-10 grid place-content-center text-gray-400'>
                    <BiSearch />
                </div>
            </div>
            <div className="overflow-x-auto overflow-y-auto h-[500px]">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Código
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Código de Barra
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Nombre del Producto
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Existencia
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Precio
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Estatus
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                --
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map(article => (
                            <InventoryArticlesTable
                                key={article.id}
                                id={article.id}
                                barcode={article.barcode}
                                articleName={article.name}
                                price={article.price}
                                quantity={article.quantity}
                                status={article.status}
                            />
                        ))}
                    </tbody>
                </table >
            </div >
        </>
    )
}
