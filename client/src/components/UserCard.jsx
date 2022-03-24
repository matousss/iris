import React from 'react';
import Avatar from "react-avatar";

export default function UserCard(props) {
    return (
        <div className='flex items-center w-full px-1 py-3'>
            <Avatar name={props.username} size={'56'} round={true}/>
            <span className={(props.visible ? 'block' : 'hidden') + ' text-xl ml-5'}>{props.username}</span>
        </div>
    );
}