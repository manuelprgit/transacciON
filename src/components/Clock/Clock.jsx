import React, { useEffect, useState } from 'react';

export const Clock = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const date = now.toLocaleDateString();
            setCurrentTime(`${time} | ${date}`);
        };

        updateClock();
        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="border border-solid h-10 grid place-items-center rounded-lg border-gray-400 absolute bottom-6 w-60 z-10 left-0 right-0 mx-auto">
            {currentTime}
        </div>
    );
}; 