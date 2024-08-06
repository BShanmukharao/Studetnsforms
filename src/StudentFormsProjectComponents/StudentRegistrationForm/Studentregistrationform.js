import { useState } from 'react'
import Studentloginform from '../StudentLoginForm/Studentloginform';
import './Studentregistrationform.css'

function Studentregistrationform() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userConfirmPassword, setConfirmPassword] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [isPasswordCorrect, setPasswordvalue] = useState(false)

    const getFormData = (event) => {
        event.preventDefault();
        if (userPassword !== userConfirmPassword) {
            setPasswordvalue(true);
        }
        else {
            setPasswordvalue(false);
            const newUser = { userName, userEmail, userPassword, userConfirmPassword, userPhone }
            console.log(newUser)
            setUserName("")
            setUserEmail("")
            setPassword("")
            setConfirmPassword("")
            setUserPhone("")
        }
    }

    return (
        <div className='form-bg-container'>
            <form className='form-container' onSubmit={getFormData}>
                <h1 className='form-main-heading'>REGISTRATION FORM</h1>
                <div className='each-label-input-container'>
                    <label htmlFor='FULLNAME' className='each-label-item'>FULL NAME</label><br />
                    <input type="text" id="FULLNAME" value={userName} onChange={(event) => setUserName(event.target.value)} className='each-input-item' placeholder='Enter fullname' required />
                </div>
                <div className='each-label-input-container'>
                    <label htmlFor='EMAIL' className='each-label-item'>EMAIL</label><br />
                    <input type="email" id="EMAIL" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} className='each-input-item' placeholder='Enter email' required />
                </div>
                <div className='each-label-input-container'>
                    <label htmlFor='PASSWORD' className='each-label-item'>PASSWORD</label><br />
                    <input type="password" id="PASSWORD" value={userPassword} onChange={(event) => setPassword(event.target.value)} className='each-input-item' placeholder='Enter password' required />
                </div>
                <div className='each-label-input-container'>
                    <label htmlFor='CONFIRMPASSWORD' className='each-label-item'>CONFIRM PASSWORD</label><br />
                    <input type="password" id="CONFIRMPASSWORD" value={userConfirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className='each-input-item' placeholder='Enter confirm password' required />
                </div>
                <div className='each-label-input-container'>
                    <label htmlFor='PHONENUMBER' className='each-label-item'>PHONE NUMBER</label><br />
                    <input type="tel" id="PHONENUMBER" value={userPhone} onChange={(event) => setUserPhone(event.target.value)} className='each-input-item' placeholder='Enter phone' required />
                </div>
                <div className='each-label-input-container'>
                    <button className="submit-button" type='submit'>SUBMIT</button>
                </div>
                {isPasswordCorrect && <p className={`user-credential-refer ${'error'}`}>password didn't match</p>}
                <p className='user-credential-refer'>do you have an account? <a className='login-register-anchor' > login here</a></p>
            </form>
        </div>
    )
}

export default Studentregistrationform