import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Studentloginform.css'

function Studentloginform(props) {
    const [getUserName, setUserName] = useState("");
    const [getUserPassword, setUserPassword] = useState("");

    const navigate = useNavigate();

    const getFormData = (event) => {
        event.preventDefault();
        const newUser = { getUserName, getUserPassword }
        if ((getUserName !== "asc") && (getUserPassword !== "1230")) {
            alert("Invalid username and password")
        }
        if ((getUserName !== "asc") && (getUserPassword === "1230")) {
            alert("Invalid username")
        }
        if ((getUserName === "asc") && (getUserPassword !== "1230")) {
            alert("Invalid password")
        }
        if ((getUserName === "asc") && (getUserPassword === "1230")) {

            navigate('/home');

            setUserName("")
            setUserPassword("")
        }
    }

    return (
        <div className='form-bg-container'>
            <form className='form-container' onSubmit={getFormData}>
                <h1 className='form-main-heading'>LOGIN FORM</h1>
                <div className="form-floating mb-4">
                    <input type="text" onChange={(event) => setUserName(event.target.value)} value={getUserName} id="LoginUserNameInput" className="form-control" placeholder="fullname" required />
                    <label htmlFor="LoginUserNameInput">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" onChange={(event) => setUserPassword(event.target.value)} value={getUserPassword} id="LoginPasswordInput" className="form-control" placeholder="Password" required />
                    <label htmlFor="LoginPasswordInput">Password</label>
                </div>
                <div className='submit-button-container mb-3'>
                    <button className="submit-button" type='submit'>SUBMIT</button>
                </div>
                <p className='user-credential-refer'>you don't have an account? <span className='login-register-anchor'> register here</span></p>
            </form>
        </div>
    )
}

export default Studentloginform