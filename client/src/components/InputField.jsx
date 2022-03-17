import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function InputField(props) {
   function handleSubmit(e){
       e.preventDefault();
   }

    return (
        <div className='w-full h-auto p-5 border-t border-gray-300'>
            <form className='flex justify-center item w-full' onSubmit={handleSubmit}>
                <TextareaAutosize maxRows={4} className='w-2/3 resize-none p-2 border-2 border-gray-300 rounded-3xl message-input'/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 justify-self-end ml-5 hover:text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default InputField;