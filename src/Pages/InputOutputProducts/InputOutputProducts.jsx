import React, { useState } from 'react'
import { HiOutlineLogout, HiOutlineLogin } from "react-icons/hi";
import { ModuleHeader } from '../../components/ModuleHeader/ModuleHeader'
import { IoIosRepeat } from 'react-icons/io'

export const InputOutputProducts = () => {

    const [screen, setScreen] = useState(<></>)

    const getScreen = (isInput) => {

        (isInput)
            ? setScreen(<div>Input</div>)
            : setScreen(<div>Output</div>)

    }

    return (
        <>
            <ModuleHeader
                icon={<IoIosRepeat />}
                title={'Entrada y Salida de Mercancias'}
            />
            <div className='flex justify-center gap-10'>
                <button
                    className='h-10 w-40 bg-green-300 rounded-lg border border-solid transition active:bg-green-400 font-semibold text-green-900 flex justify-center items-center gap-1'
                    onClick={() => getScreen(true)}
                >
                    <HiOutlineLogout className='text-xl' />
                    Entrada
                </button>
                <button
                    className='h-10 w-40 bg-red-300 rounded-lg border border-solid transition active:bg-red-400 font-semibold text-red-900 flex justify-center items-center gap-1'
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
