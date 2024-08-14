import { useState } from 'react'
import Studentloginform from '../StudentLoginForm/Studentloginform';
import './Studentregistrationform.css'

function Studentregistrationform() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userConfirmPassword, setConfirmPassword] = useState("");
    const [userPhone, setUserPhone] = useState("");

    const getFormData = (event) => {
        event.preventDefault();
        if (userPassword !== userConfirmPassword) {
            alert("password and confirmpassword didn't match");
        }

        const phoneNumberRegex = /^(\+1\s?)?\(?(\d{3})\)?[\s.-]?(\d{3})[\s.-]?(\d{4})$/;
        if (!phoneNumberRegex.test(userPhone)) {
            alert('Invalid phone number format');
        }

        const newUser = { userName, userEmail, userPassword, userConfirmPassword, userPhone }
        console.log(newUser)
        setUserName("")
        setUserEmail("")
        setPassword("")
        setConfirmPassword("")
        setUserPhone("")
}

return (
    <div className='form-bg-container'>
        <form className='form-container' onSubmit={getFormData}>
            <h1 className='form-main-heading'>REGISTRATION FORM</h1>
            <div className="form-floating mb-3">
                <input type="text" onChange={(event) => setUserName(event.target.value)} value={userName} id="RegistrationUserNameInput" className="form-control" placeholder="fullname" required />
                <label htmlFor="RegistrationUserNameInput">Full Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" onChange={(event) => setUserEmail(event.target.value)} value={userEmail} id="RegistrationEmailInput" className="form-control" placeholder="sample@gmail.com" required />
                <label htmlFor="RegistrationEmailInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" onChange={(event) => setPassword(event.target.value)} value={userPassword} id="RegistrationPasswordInput" className="form-control" placeholder="password" required />
                <label htmlFor="RegistrationPasswordInput">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" onChange={(event) => setConfirmPassword(event.target.value)} value={userConfirmPassword} id="RegistrationComfirmPasswordInput" className="form-control" placeholder="confirmpassword" required />
                <label htmlFor="RegistrationComfirmPasswordInput">Confirm Password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="tel" onChange={(event) => setUserPhone(event.target.value)} value={userPhone} id="RegistrationPhoneInput" className="form-control" placeholder="phonenumber" required />
                <label htmlFor="RegistrationPhoneInput">Phone No</label>
            </div>
            <div className='submit-button-container mb-3'>
                <button className="submit-button" type='submit'>SUBMIT</button>
            </div>
            <p className='user-credential-refer'>Already you have an account? <span className='login-register-anchor'> login here</span></p>
        </form>
    </div>
)
}

export default Studentregistrationform