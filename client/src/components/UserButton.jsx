import React, {useEffect} from 'react';

function UserButton(props) {
    return (
        <button className={'flex items-center w-full px-1 py-3 hover:bg-rose-500' + (props.visible ? ' pl-8' : '')} onClick={() => {props.setActiveConversation(props.username)}}>
            <img src={props.avatar} alt={props.username} className='w-14'/>
            <span className={(props.visible ? 'block' : 'hidden') + ' text-xl ml-5'}>{props.username}</span>
        </button>
    );
}

export default UserButton;