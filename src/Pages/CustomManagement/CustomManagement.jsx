import React from 'react'
import { ModuleContent } from '../../components/ModuleContent/ModuleContent'

import { FaRegUser } from "react-icons/fa6";
import { LuUserCog } from "react-icons/lu";

const options = [
    {
        id: 1,
        icon: <FaRegUser />,
        title: "Mantenimiento de Clientes",
        linkOption: "/mantenimiento-clientes",
        description: "Administra la información y el historial de tus clientes"
    }
]

export const CustomManagement = () => {
    return (
        <ModuleContent
            title='Inventario'
            icon={<LuUserCog />}
            options={options}
        />
    )
}
