import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { formatMoney } from '../../helpers/formatterNumber';

export const InventoryArticlesTable = ({
    id,
    articleName,
    quantity,
    price,
    status,
    barcode
}) => {
    return (
        <tr>
            <td className="px-6 py-4 border-b border-gray-200">{id}</td>
            <td className="px-6 py-4 border-b border-gray-200">{barcode}</td>
            <td className="px-6 py-4 border-b border-gray-200">{articleName}</td>
            <td className="px-6 py-4 border-b border-gray-200">{quantity}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-right">${formatMoney(price)}</td>
            <td className="px-6 py-4 border-b border-gray-200">
                <p className={`bg-${status === 'Disponible' ? 'green' : 'yellow'}-400 p-1 font-semibold rounded-lg text-center`}>{status}</p>
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-center">
                <button className="bg-blue-500 active:bg-blue-400 text-white px-4 py-2 rounded">
                    <IoIosMenu />
                </button>
            </td>
        </tr>
    )
}
