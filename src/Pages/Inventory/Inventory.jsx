import React from 'react'
import { MdOutlineInventory } from 'react-icons/md'
import { CiBoxes } from "react-icons/ci";
import { ModuleContent } from '../../components/ModuleContent/ModuleContent';
import { IoIosRepeat } from "react-icons/io";


const options = [
    {
        id: 1,
        icon: <CiBoxes />,
        title: "Control de Inventario",
        description: "Controla y gestiona el inventario de productos de manera eficiente"
    },
    {
        id: 2,
        icon: <IoIosRepeat />,
        title: "Entrada y Salida de Mercancias",
        description: "Control de entrada y salida de mercancias"
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
