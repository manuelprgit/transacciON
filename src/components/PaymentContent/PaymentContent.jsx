import React from 'react'
import { IoCashOutline } from "react-icons/io5";
import { CiCreditCard1, CiMoneyCheck1 } from "react-icons/ci";
import { TbUserDollar } from "react-icons/tb";

import { formatMoney } from '../../helpers/formatterNumber';

export const PaymentContent = () => {
    return (
        <div className='w-1/3 border border-solid min-w-[350px] max-w-[350px] border-gray-300 rounded-lg pb-6'>
            <div className='flex justify-between p-4 border-b'>
                <p>Subtotal</p>
                <p>$88.50</p>
            </div>
            <div className='flex justify-between p-4 border-b'>
                <p>Descuento</p>
                <p>$88.50</p>
            </div>
            <div className='flex justify-between p-4 border-b font-semibold text-lg'>
                <p className='text-red-500'>TOTAL</p>
                <p>$88.50</p>
            </div>
            <div className='flex'>
                <div className=' p-4 border-b font-semibold w-1/2'>
                    <p className=''>PAGO</p>
                    <p className='text-lg text-center'>$88.50</p>
                </div>
                <div className='border border-solid '></div>
                <div className=' p-4 border-b font-semibold w-1/2'>
                    <p className=''>RESTANTE</p>
                    <p className='text-lg text-center text-red-500'>$88.50</p>
                </div>
            </div>
            <div className='p-4'>
                <p className='mb-4'>Desglose de Pago</p>

                <div className='flex h-10 justify-between items-center border border-solid px-4 min-w-80 rounded-lg border-gray-300 mb-4'>
                    <div className='flex items-center gap-2'>
                        <IoCashOutline className='text-xl' />
                        <p>Efectivo</p>
                    </div>
                    <input type='text' className='outline-none text-right border-b border-gray-400' placeholder='0.00' />
                </div>

                <div className='flex h-10 justify-between items-center border border-solid px-4 min-w-80 rounded-lg border-gray-300 mb-4'>
                    <div className='flex items-center gap-2'>
                        <CiCreditCard1 className='text-xl' />
                        <p>Tarjeta</p>
                    </div>
                    <input type='text' className='outline-none text-right border-b border-gray-400' placeholder='0.00' />
                </div>

                <div className='flex h-10 justify-between items-center border border-solid px-4 min-w-80 rounded-lg border-gray-300 mb-4'>
                    <div className='flex items-center gap-2'>
                        <CiMoneyCheck1 className='text-xl' />
                        <p>Cheque</p>
                    </div>
                    <input type='text' className='outline-none text-right border-b border-gray-400' placeholder='0.00' />
                </div>

                <div className='flex h-10 justify-between items-center border border-solid px-4 min-w-80 rounded-lg border-gray-300 mb-4'>
                    <div className='flex items-center gap-2'>
                        <TbUserDollar className='text-xl' />
                        <p>Crédito</p>
                    </div>
                    <input type='text' className='outline-none text-right border-b border-gray-400' placeholder='0.00' />
                </div>

            </div>
            <div className='grid place-content-center'>
                <button className='h-10 w-40 bg-green-300 rounded-lg border border-solid transition active:bg-green-400 font-semibold text-green-900'>Cobrar</button>
            </div>
        </div>
    )
}
