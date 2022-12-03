import { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewUser } from "../../store/usersSlice";

const AddUserForm = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onEmailChanged = e => setEmail(e.target.value)
    const onNameChanged = e => setName(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const canSave = [email, name, password].every(Boolean) && addRequestStatus === 'idle';

    const onAddUserClicked = () => {
        try {
            setAddRequestStatus('pending')
            dispatch(addNewUser({ email, name, password })).unwrap()

            setEmail('')
            setName('')
            setPassword('')
        } catch (err) {
            console.error('Failed to save the post', err)
        } finally {
            setAddRequestStatus('idle')
        }        
    }

    return (
        <section>
            <h2>NEW USER</h2>
            <form>
                <label htmlFor="userEmail">EMAIL:</label>
                <input 
                    type="text"
                    id="userEmail"
                    name="userEmail"
                    value={email}
                    onChange={onEmailChanged}
                />
               
                <label htmlFor="userName">NAME:</label>
                <textarea
                    id="userName"
                    name="userName"
                    value={name}
                    onChange={onNameChanged}
                />
                <label htmlFor="userPassword">PASSWORD:</label>
                <textarea
                    id="userPassword"
                    name="userPassword"
                    value={password}
                    onChange={onPasswordChanged}
                />
                <button 
                    type="button"
                    disabled={!canSave}
                    onClick={onAddUserClicked}
                >ADD USER</button>
            </form>
        </section>
    )
}

export default AddUserForm;