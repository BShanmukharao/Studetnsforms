import { useState } from 'react'
import './Studentloginform.css'

function Studentloginform() {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const getFormData = (event) => {
        event.preventDefault();
        const newUser = {userName,userPassword}
        console.log(newUser)
        setUserName("")
        setUserPassword("")
    }

    const setUsername = (event) => {
        setUserName(event.target.value)
    }

    const setUserpassword = (event) => {
        setUserPassword(event.target.value)
    }

    return (
        <div className='form-bg-container'>
            <form className='form-container' onSubmit={getFormData}>
                <h1 className='form-main-heading'>LOGIN FORM</h1>
                <div className='each-label-input-container'>
                    <label htmlFor='USERNAME' className='each-label-item'>USERNAME</label><br />
                    <input type="text" id="USERNAME" value={userName} className='each-input-item' placeholder='Enter Username' onChange={setUsername} required/>
                </div>
                <div className='each-label-input-container'>
                    <label htmlFor='PASSWORD' className='each-label-item'>PASSWORD</label><br />
                    <input type="password" id="PASSWORD" value={userPassword} className='each-input-item' placeholder='Enter Password' onChange={setUserpassword} required/>
                </div>
                <div className='each-label-input-container'>
                    <button className="submit-button" type='submit'>SUBMIT</button>
                </div>
                <p className='user-credential-refer'>you don't have an account? <span className='login-register-anchor'> register here</span></p>
            </form>
        </div>
    )
}

export default Studentloginform