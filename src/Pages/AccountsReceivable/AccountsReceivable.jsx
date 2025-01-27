import React from 'react'
import { ModuleContent } from '../../components/ModuleContent/ModuleContent'
import { FaRegUser } from 'react-icons/fa6'
import { LuUserCog } from 'react-icons/lu'
import { MdOutlinePendingActions } from 'react-icons/md'

const options = [
    {
        id: 1,
        icon: <FaRegUser />,
        title: "Mantenimiento de Clientes",
        linkOption: "/mantenimiento-clientes",
        description: "Administra la información de los clientes"
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
