import React, {useState} from 'react';

export default function Sidebar() {
    const[isSidebarHidden, setIsSidebarHidden] = useState(true)
    return (
        <div className='flex h-screen w-min' onMouseLeave={() => setIsSidebarHidden(true)}>
            <div className='h-full w-16 bg-rose-700' onMouseEnter={() => setIsSidebarHidden(false)}>

            </div>
            <div className={'h-full w-64 shadow-2xl' + (isSidebarHidden ? ' hidden' : ' block')}>

            </div>
        </div>
    );
}