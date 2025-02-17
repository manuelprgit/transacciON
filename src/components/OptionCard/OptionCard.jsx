import { NavLink } from 'react-router-dom';

export const OptionCard = ({ linkOption, icon, title, description }) => {
    return (
        <NavLink
            to={linkOption}
            className="border border-solid border-gray-400 p-4 rounded-lg cursor-pointer hover:bg-blue-200 transition active:bg-blue-300 max-w-[300px] w-[300px]"
        >
            <div className="flex items-center mb-2 gap-2 text-lg font-semibold">
                <div className="text-2xl h-6 w-6">{icon}</div>
                <p>{title}</p>
            </div>
            <p>{description}</p>
        </NavLink>
    )
}
