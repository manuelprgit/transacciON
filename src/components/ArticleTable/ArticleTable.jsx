import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { ArticlesTableRow } from '../ArticlesTableRow/ArticlesTableRow';

//TODO: temporal
const articles = [
    {
        id: 1,
        name: 'Artículo 1',
        price: 10.00,
        quantity: 2
    },
    {
        id: 2,
        name: 'Artículo 2',
        price: 350.00,
        quantity: 22
    },
    {
        id: 3,
        name: 'Artículo 3',
        price: 25.00,
        quantity: 31
    },
    {
        id: 4,
        name: 'Artículo 4',
        price: 66.00,
        quantity: 212
    },
    {
        id: 5,
        name: 'Artículo 5',
        price: 54.00,
        quantity: 4
    },
    {
        id: 6,
        name: 'Artículo 6',
        price: 14.00,
        quantity: 24
    },
    {
        id: 7,
        name: 'Artículo 7',
        price: 44.00,
        quantity: 1
    },
    {
        id: 8,
        name: 'Artículo 7',
        price: 44.00,
        quantity: 1
    },
    {
        id: 9,
        name: 'Artículo 7',
        price: 44.00,
        quantity: 1
    },
    {
        id: 10,
        name: 'Artículo 7',
        price: 44.00,
        quantity: 1
    },
]

export const ArticleTable = () => {
    return (
        <>
            <div className="overflow-x-auto overflow-y-auto h-[500px]">
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
                        {articles.map(article => (
                            <ArticlesTableRow
                                key={article.id}
                                name={article.name}
                                price={article.price}
                                quantity={article.quantity}
                            />
                        ))}
                    </tbody>
                </table >
            </div >
        </>
    )
}
