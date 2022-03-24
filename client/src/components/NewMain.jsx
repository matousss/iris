import React, {useState} from 'react';
import Sidebar from "./Sidebar";
import MessagePanel from "./MessagePanel";

export default function NewMain(props) {
    const [activeConversation, setActiveConversation] = useState('');

    return (
        <div className='h-screen'>
            <Sidebar user={props.user} setUser={props.setUser} setActiveConversation={setActiveConversation} setPage={props.setPage}/>
            <MessagePanel user={props.user} activeConversation={activeConversation} setActiveConversation={setActiveConversation}/>
        </div>
    );
}