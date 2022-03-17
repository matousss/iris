import React, {useState} from 'react';
import UserCard from "./UserCard";
import SearchField from "./SearchField";
import UserButton from "./UserButton";
import Signout from "./Signout";

//temp import
import avatar from '../assets/avatar.svg'

export default function Sidebar(props) {
    const [visible, setVisible] = useState(false)

    return (
        <div className='h-screen w-16 bg-orange-400 shadow-2xl hover:w-96 sidebar' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <div className='list-none flex flex-col items-center h-full w-full sidebar-container'>
                <div className='w-full mt-2 mb-5'>
                    <UserCard avatar={/*placeholder*/ avatar} username={props.user.username} visible={visible}/>
                </div>

                <SearchField visible={visible}/>

                <div className='w-full overflow-y-scroll border-y-2 border-gray-700 buttons'>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log('1')}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                    <UserButton avatar={avatar} username='franta' visible={visible} setConversation={() => console.log(1)}/>
                </div>

                <Signout visible={visible} setUser={props.setUser}/>
            </div>
        </div>
    );
}