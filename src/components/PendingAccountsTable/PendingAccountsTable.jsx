import React from 'react'
import { formatMoney } from '../../helpers/formatterNumber'
import { IoIosMenu } from 'react-icons/io'

export const PendingAccountsTable = ({
    id,
    client,
    billNumber,
    billAmount,
    amountPending,
    amountPaid,

}) => {
    return (
        <tr>
            <td className="px-6 py-4 border-b border-gray-200">{id}</td>
            <td className="px-6 py-4 border-b border-gray-200">{client.clientName}</td>
            <td className="px-6 py-4 border-b border-gray-200">{billNumber}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-right">${formatMoney(billAmount)}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-right">${formatMoney(amountPending)}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-right">${formatMoney(amountPaid)}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-center">
                <button className="bg-blue-500 active:bg-blue-400 text-white px-4 py-2 rounded">
                    <IoIosMenu className='text-md' />
                </button>
            </td>
        </tr>
    )
}
