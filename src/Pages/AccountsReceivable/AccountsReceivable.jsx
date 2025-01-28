import React from 'react'
import { ModuleContent } from '../../components/ModuleContent/ModuleContent'
import { FaCcPaypal, FaRegUser } from 'react-icons/fa6'
import { TbHistory, TbPaywall } from "react-icons/tb";
import { MdOutlinePendingActions } from 'react-icons/md'
import { CiMoneyCheck1 } from 'react-icons/ci';

const options = [
    {
        id: 1,
        icon: <FaRegUser />,
        title: "Mantenimiento de Clientes",
        linkOption: "/mantenimiento-clientes",
        description: "Administra la información de los clientes"
    },
    {
        id: 2,
        icon: <TbHistory />,
        title: "Cuentas Pendientes",
        linkOption: "/cuentas-pendientes",
        description: "Visualizacion de Cuentas Pendientes"
    },
    {
        id: 3,
        icon: <CiMoneyCheck1 />,
        title: "Cuentas Pendientes",
        linkOption: "/cuentas-pendientes",
        description: "Listado de cuentas pendientes"
    }
]

export const AccountsReceivable = () => {
    return (
        <ModuleContent
            title='Cuentas por Cobrar'
            icon={<MdOutlinePendingActions />}
            options={options}
        />
    )
}
