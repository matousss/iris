import React, { useState } from 'react'
import * as Page from '../utils/PageEnum'

export default function NewLogin({username, setPage}) {
    const [codeField, setCodeField] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("username", username)
        data.append("activation_code", codeField)
        fetch('http://127.0.0.1:8000/api/auth/activate', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    // const handleFetch = (data) => {
    //     if (data.result !== 'invalid_user'){
    //         setUser(data.user)
    //         setPage(Page.login)
    //     } else {
    //         setError('invalid code')
    //     }
    // }

    return (
        <>
            <h1 className='text-black text-6xl mb-4 text-center'>Almost there</h1>
            <form className='flex flex-col w-4/5 md:w-2/5' onSubmit={handleSubmit}>
                <label className='my-1'>Activation code</label>
                <input
                    className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 mb-1 border-2 rounded-lg'
                    type="text"
                    required
                    value={codeField}
                    onChange={(e) => setCodeField(e.target.value)}
                />
                <span className='font-semibold text-xs text-red-700'>{error}</span>
                <button className='mt-3 p-1 rounded-lg bg-orange-500 hover:bg-rose-500'>verify</button>
            </form>
        </>
    )
}
