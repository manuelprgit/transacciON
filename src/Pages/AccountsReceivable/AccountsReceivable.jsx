import React from 'react'
import { ModuleContent } from '../../components/ModuleContent/ModuleContent'
import { FaRegUser } from 'react-icons/fa6'
import { LuUserCog } from 'react-icons/lu'

const options = [
    {
        id: 1,
        icon: <FaRegUser />,
        title: "Mantenimiento de Clientes",
        description: "Administra la información y el historial de tus clientes"
    }
]

export const AccountsReceivable = () => {
    return (
        <ModuleContent
            title='Cuentas por Cobrar'
            icon={<LuUserCog />}
            options={options}
        />
    )
}
