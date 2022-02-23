import React, {useState} from 'react'
import * as Page from '../utils/PageEnum'

export default function Signup({setUser, setPage}) {
    const [emailField, setEmailField] = useState('')
    const [usernameField, setUsernameField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [passwordAgainField, setPasswordAgainField] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (passwordField !== passwordAgainField) {
            setErrorMessage("passwords don't match")
        }
        const formData = new FormData()
        formData.append("email", emailField)
        formData.append("username", usernameField)
        formData.append("password", passwordField)
        fetch('http://127.0.0.1:8000/api/auth/register', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => handleFetch(data))
    }

    const handleFetch = (data) => {
        if (data.result === 'success') {
            setUser(data.user)
            setPage(Page.verify)
            console.log(data.token)
        } else {
            const error = data.details
            if (error.hasOwnProperty('email')) {
                setErrorMessage('account with email ' + emailField + ' already exists')
            }
            if (error.hasOwnProperty('username')) {
                setErrorMessage('username ' + usernameField + ' is already taken')
            }
        }
    }

    return (
        <>
            <h1 className='text-black text-3xl mb-4 text-center'>No account? No problem!</h1>
            <form className='flex flex-col w-4/5 md:w-2/5' onSubmit={handleSubmit}>
                <label className='my-1 text-sm'>Email</label>
                <input
                    className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 mb-1 border-2 rounded-lg'
                    type="text"
                    required
                    value={emailField}
                    onChange={(e) => setEmailField(e.target.value)}
                />
                <label className='my-1 text-sm'>Username</label>
                <input
                    className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 mb-1 border-2 rounded-lg'
                    type="text"
                    required
                    value={usernameField}
                    onChange={(e) => setUsernameField(e.target.value)}
                />
                <label className='mb-1 text-sm'>Password</label>
                <input
                    className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 mb-1 border-2 rounded-lg'
                    type="password"
                    required
                    value={passwordField}
                    onChange={(e) => setPasswordField(e.target.value)}
                />
                <label className='mb-1 text-sm'>Password again</label>
                <input
                    className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 mb-1 border-2 rounded-lg'
                    type="password"
                    required
                    value={passwordAgainField}
                    onChange={(e) => setPasswordAgainField(e.target.value)}
                />
                <span className='font-semibold text-xs text-red-700'>{errorMessage}</span>
                <button className='mt-3 p-1 rounded-lg bg-orange-500 hover:bg-rose-500'>sign up</button>

            </form>
            <button className='mt-4 text-xs underline' onClick={() => setPage(Page.login)}>
                Go back ↲
            </button>
        </>
    )
}
