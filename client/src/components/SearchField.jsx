import React from 'react';

function SearchField(props) {
    return (
        <div className={'flex items-center w-full p-3 border-t-2 border-gray-700' + (props.visible ? ' w-96' : '')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input type='text' placeholder='Search for user or group'
                   className={(props.visible ? 'block' : 'hidden') + ' text-xl mx-auto h-10 w-64 p-3 rounded-2xl placeholder:italic'}/>
        </div>
    );
}

export default SearchField;