import React from 'react'
import { ModuleHeader } from '../../components/ModuleHeader/ModuleHeader';
import { OptionCard } from '../../components/OptionCard/OptionCard'


export const ModuleContent = ({ icon, title, options }) => {
    return (
        <>
            <ModuleHeader
                icon={icon}
                title={title}
            />

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center'>
                {options.map(option => (
                    <OptionCard
                        key={option.id}
                        icon={option.icon}
                        title={option.title}
                        description={option.description}
                    />
                ))}
            </div>
        </>
    )
}
