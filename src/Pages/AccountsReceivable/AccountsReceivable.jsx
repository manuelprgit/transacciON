import React from 'react'
import { ModuleContent } from '../../components/ModuleContent/ModuleContent'
import { FaRegUser } from 'react-icons/fa6'
import { TbHistory } from "react-icons/tb";
import { MdOutlinePendingActions } from 'react-icons/md'

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
        title: "Historico de Clientes",
        linkOption: "/historico-cliente",
        description: "Visualizacion del historico de los clientes"
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
