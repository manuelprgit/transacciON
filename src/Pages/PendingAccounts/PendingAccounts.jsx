import React from 'react'
import { ModuleHeader } from '../../components/ModuleHeader/ModuleHeader'
import { CiBoxes } from 'react-icons/ci'
import { BiSearch } from 'react-icons/bi'
import { TbHistory } from 'react-icons/tb'
import { PendingAccountsTable } from '../../components/PendingAccountsTable/PendingAccountsTable'

const pendingAccounts = [
    {
        id: 1,
        client: {
            id: 1,
            clientName: "Beankin Taveras"
        },
        billNumber: 1,
        billAmount: 2500,
        amountPending: 2000,
        amountPaid: 500
    },
    {
        id: 2,
        client: {
            id: 2,
            clientName: "Manuel Perez"
        },
        billNumber: 2,
        billAmount: 3500,
        amountPending: 542,
        amountPaid: 2945
    },
    {
        id: 3,
        client: {
            id: 3,
            clientName: "Dariel Salas"
        },
        billNumber: 3,
        billAmount: 2500,
        amountPending: 2000,
        amountPaid: 500
    },
    {
        id: 4,
        client: {
            id: 4,
            clientName: "Warrent Guzman"
        },
        billNumber: 4,
        billAmount: 2500,
        amountPending: 2000,
        amountPaid: 500
    },
]

export const PendingAccounts = () => {
    return (
        <>
            <ModuleHeader icon={<TbHistory />} title="Cuentas Pendientes" />
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
                                Clientes
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                No. Fact.
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Monto de la Factura
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Monto Pendiente
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs text-right font-semibold text-gray-600 uppercase tracking-wider">
                                Monto Pagado
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                --
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingAccounts.map(account => (
                            < PendingAccountsTable
                                key={account.id}
                                id={account.id}
                                client={account.client}
                                billNumber={account.billNumber}
                                billAmount={account.billAmount}
                                amountPending={account.amountPending}
                                amountPaid={account.amountPaid}
                            />
                        ))}

                    </tbody>
                </table >
            </div >
        </>
    )
}
