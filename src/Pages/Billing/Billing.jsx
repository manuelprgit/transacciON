import React from 'react'
import { CiReceipt } from "react-icons/ci";
import { IoReceiptOutline } from 'react-icons/io5';
import { ModuleContent } from '../../components/ModuleContent/ModuleContent';

const options = [
    {
        id: 1,
        icon: <CiReceipt />,
        title: "Creacion de Facturas",
        linkOption: "/invoice",
        description: "Generar y Emitir facturas"
    }
]

export const Billing = () => {
    return (
        <ModuleContent
            title={'Facturacion'}
            icon={<IoReceiptOutline />}
            options={options}
        />
    )
}
