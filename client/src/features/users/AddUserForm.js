import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewUser } from "../../store/usersSlice";
import { selectAllUsers } from "../../store/usersSlice";

const AddUserForm = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const users = useSelector(selectAllUsers);

    const onEmailChanged = e => setEmail(e.target.value)
    const onNameChanged = e => setName(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const canSave = [email, name, password, userId].every(Boolean) && addRequestStatus === 'idle';

    const onAddUserClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewUser({ email, name, password, userId })).unwrap()

                setEmail('')
                setName('')
                setPassword('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

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
                <select id="userEmail" value={userId} onChange={onEmailChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
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
                    onClick={onAddUserClicked}
                    disabled={!canSave}
                >ADD USER</button>
            </form>
        </section>
    )
}

export default AddUserForm;