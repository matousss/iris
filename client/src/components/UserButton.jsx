import React from 'react';
import Avatar from "react-avatar";

function UserButton(props) {
    return (
        <button className={'flex items-center px-1 py-3 hover:bg-rose-500' + (props.visible ? ' pl-8 w-96' : '')} onClick={() => {props.setActiveConversation(props.username)}}>
            {/*<img src={props.avatar} alt={props.username} className='w-14'/>*/}
            <Avatar name={props.username} size={'56'} round={true}/>
            <span className={(props.visible ? 'block' : 'hidden') + ' text-xl ml-5'}>{props.username}</span>
        </button>
    );
}

export default UserButton;