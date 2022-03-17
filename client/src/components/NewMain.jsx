import React from 'react';
import Sidebar from "./Sidebar";

export default function NewMain(props) {
    return (
        <div className='h-screen'>
            <Sidebar user={props.user} setUser={props.setUser}/>
        </div>
    );
}