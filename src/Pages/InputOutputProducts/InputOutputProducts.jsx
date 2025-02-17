import React, { useState } from 'react'
import { HiOutlineLogout, HiOutlineLogin } from "react-icons/hi";
import { ModuleHeader } from '../../components/ModuleHeader/ModuleHeader'
import { IoIosRepeat } from 'react-icons/io'
import { ProductEntries } from '../../components/ProductEntries/ProductEntries';
import { ProductOutputs } from '../../components/ProductOutputs/ProductOutputs';

export const InputOutputProducts = () => {

    const [screen, setScreen] = useState(<></>);

    const [active, setActive] = useState(null);

    const getScreen = (isInput) => {

        setActive(isInput);

        (isInput)
            ? setScreen(<ProductEntries />)
            : setScreen(<ProductOutputs />)

    }

    return (
        <>
            <ModuleHeader
                icon={<IoIosRepeat />}
                title={'Entrada y Salida de Mercancias'}
            />
            <div className='flex justify-center gap-10'>
                <button
                    className={`h-10 w-40 bg-green-${active ? '500 text-white underline h-12 w-44' : '300'} rounded-lg border border-solid transition active:bg-green-400 font-semibold  flex justify-center items-center gap-1`}
                    onClick={() => getScreen(true)}
                >
                    <HiOutlineLogout className='text-xl' />
                    Entrada
                </button>
                <button
                    className={`h-10 w-40 bg-red-${active === false ? '500 text-white underline h-12 w-44' : '300'} rounded-lg border border-solid transition active:bg-red-400 font-semibold flex justify-center items-center gap-1`}
                    onClick={() => getScreen(false)}
                >
                    <HiOutlineLogin className='text-xl' />
                    Salida
                </button>
            </div>
            <div>
                {screen}
            </div>
        </>
    )
}
