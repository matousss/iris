import React from 'react'

export default function MenuContainer({component}) {
    return (
        <div className='menu-container h-screen w-screen flex justify-center items-center'>
            <div className='bg-white w-full md:w-2/3 lg:w-1/2 h-5/6 md:h-3/4 m-6 rounded-lg flex flex-col justify-center items-center'>
                {component}
            </div>
        </div>
    )
}
