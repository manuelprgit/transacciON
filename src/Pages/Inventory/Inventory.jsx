import React from 'react'
import { MdOutlineInventory } from 'react-icons/md'
import { CiBoxes } from "react-icons/ci";
import { ModuleContent } from '../../components/ModuleContent/ModuleContent';
import { IoIosRepeat } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";

const options = [
    {
        id: 1,
        icon: <CiBoxes />,
        title: "Control de Inventario",
        linkOption: "/control-inventario",
        description: "Controla y gestiona el inventario de productos"
    },
    {
        id: 2,
        icon: <IoIosRepeat />,
        title: "Entrada y Salida de Mercancias",
        linkOption: "/entrada-salida-mercancias",
        description: "Control de entrada y salida de mercancias"
    },
    {
        id: 3,
        icon: <AiOutlineProduct />,
        title: "Mantenimiento de Productos",
        linkOption: "/mantenimiento-productos",
        description: "Creación y modificación de productos"
    }
]

export const Inventory = () => {
    return (
        <ModuleContent
            title={'Inventario'}
            icon={<MdOutlineInventory />}
            options={options}
        />
    )
}
