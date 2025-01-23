import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { formatMoney } from '../../helpers/formatterNumber'

export const ArticlesTableRow = ({
    name,
    price,
    quantity,
}) => {
    return (
        <tr>
            <td className="px-6 py-4 border-b border-gray-200">{name}</td>
            <td className="px-6 py-4 border-b border-gray-200">{quantity}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-right">${formatMoney(price)}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-right">${formatMoney(price * quantity)}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-center">
                <button className="bg-red-500 active:bg-red-400 text-white px-4 py-2 rounded">
                    <FaRegTrashAlt />
                </button>
            </td>
        </tr>
    )
}
