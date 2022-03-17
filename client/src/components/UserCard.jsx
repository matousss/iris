import React from 'react';

export default function UserCard(props) {
    return (
        <div className='flex items-center w-full px-1 py-3'>
            <img src={props.avatar} alt={props.username} className='w-14'/>
            <span className={(props.visible ? 'block' : 'hidden') + ' text-xl ml-5'}>{props.username}</span>
        </div>
    );
}