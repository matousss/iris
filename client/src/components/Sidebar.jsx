import React, {useState} from 'react';
import UserCard from "./UserCard";
import SearchField from "./SearchField";
import UserButton from "./UserButton";
import Signout from "./Signout";
import {isMobile} from "react-device-detect";

//temp import
import avatar from '../assets/avatar.svg'

export default function Sidebar(props) {
    const [visible, setVisible] = useState(false)

    return (
        <div className='h-screen w-16 fixed bg-orange-400 shadow-2xl hover:w-96 sidebar' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <div className='list-none flex flex-col items-center h-full w-full sidebar-container'>
                <div className='w-full mb-2'>
                    <UserCard avatar={/*placeholder*/ avatar} username={props.user.username} visible={visible}/>
                </div>

                <SearchField visible={visible}/>

                <div className='w-full overflow-x-hidden overflow-y-scroll border-y-2 border-gray-700 buttons'>
                    <UserButton avatar={avatar} username='Dane' visible={visible} setActiveConversation={props.setActiveConversation}/>
                    <UserButton avatar={avatar} username='Chci' visible={visible} setActiveConversation={props.setActiveConversation}/>
                    <UserButton avatar={avatar} username='Ti' visible={visible} setActiveConversation={props.setActiveConversation}/>
                    <UserButton avatar={avatar} username='Cucat' visible={visible} setActiveConversation={props.setActiveConversation}/>
                    <UserButton avatar={avatar} username='Ty Tvoje Plesnivý' visible={visible} setActiveConversation={props.setActiveConversation}/>
                    <UserButton avatar={avatar} username='Palce' visible={visible} setActiveConversation={props.setActiveConversation}/>
                    <UserButton avatar={avatar} username='U Nohou' visible={visible} setActiveConversation={props.setActiveConversation}/>
                    <UserButton avatar={avatar} username='Plsky' visible={visible} setActiveConversation={props.setActiveConversation}/>
                </div>

                <Signout visible={visible} setUser={props.setUser} setPage={props.setPage}/>
            </div>
        </div>
    );
}