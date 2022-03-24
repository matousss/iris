import React from 'react';
import * as Page from '../utils/PageEnum'

function Signout(props) {
    function signOut(){
        props.setUser(null);
        props.setPage(Page.login);
    }

    return (
        <button className={'flex items-center mt-auto p-3 hover:text-rose-500' + (props.visible ? ' w-96' : '')} onClick={() => signOut()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className={(props.visible ? 'block' : 'hidden') + ' text-xl ml-5'}>Sign out</span>
        </button>
    );
}

export default Signout;