import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewUser } from '../store/authSlice'

const Signup = props => {
    const dispatch  = useDispatch()

    const [username, setUsername] = useState('')

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    
    const onNameChanged = e => setName(e.target.value)
    const onUsernameChanged = e => setUsername(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)
    
    const canSave = [username, name, password].every(Boolean) && addRequestStatus === 'idle';

    const onSignUp = () => {
        try {
            setAddRequestStatus('pending')
            dispatch(addNewUser({ username, name, password })).unwrap()

            setUsername('')
            setName('')
            setPassword('')
        } catch (err) {
            console.error('Failed to save the post', err)
        } finally {
            setAddRequestStatus('idle')
        }        
    }

    return (
        <div>
            <div>Signup</div>
            <form>
                <label htmlFor="username">USERNAME:</label>
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={onUsernameChanged}
                />
                <label htmlFor="name">NAME:</label>
                <input  name="name" value={name} onChange={onNameChanged} />
                <label htmlFor="password">PASSWORD:</label>
                <input name="password" type='password' value={password} onChange={onPasswordChanged} />
                <button type="button" disabled={!canSave} onClick={onSignUp}>Sign Up</button>
            </form>
        </div>
    )
}


export default Signup