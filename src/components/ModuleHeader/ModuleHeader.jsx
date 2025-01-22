import React from 'react'

export const ModuleHeader = ({ icon, title }) => {
    return (
        <div className='flex items-center justify-between w-full h-20 border-solid border-b border-gray-400 mb-4'>
            <div className='flex items-center'>
                <div className='text-3xl'>{icon}</div>
                <h1 className='ml-2 text-lg font-semibold'>{title}</h1>
            </div>
        </div>
    )
}
