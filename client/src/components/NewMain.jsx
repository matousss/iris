import React, {useState} from 'react';
import Sidebar from "./Sidebar";
import MessagePanel from "./MessagePanel";

export default function NewMain(props) {
    const [activeConversation, setActiveConversation] = useState('ahoj');

    return (
        <div className='h-screen'>
            <Sidebar user={props.user} setUser={props.setUser} setActiveConversation={setActiveConversation}/>
            <MessagePanel user={props.user} activeConversation={activeConversation} setActiveConversation={setActiveConversation}/>
        </div>
    );
}