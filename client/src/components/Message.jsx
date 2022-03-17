import React from 'react';

function Message(props) {
    const messageFrom = 'mr-auto bg-gray-300';
    const messageTo = 'ml-auto border border-gray-300';

    return (
        <p className={'max-w-3/5 lg:max-w-1/2 mx-5 my-2 p-2 rounded-3xl ' + (props.from ? messageFrom : messageTo)}>
            {props.message}
        </p>
    );
}

export default Message;