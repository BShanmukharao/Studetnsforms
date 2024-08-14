import Studenteverydetails from '../src/StudentFormsProjectComponents/StudentEveryDetails/Studenteverydetails'
import Studentloginform from '../src/StudentFormsProjectComponents/StudentLoginForm/Studentloginform'
import Studentregistrationform from '../src/StudentFormsProjectComponents/StudentRegistrationForm/Studentregistrationform';
import Formbuttonheader from './StudentFormsProjectComponents/FormButtonsHeader/Formbuttonheader';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function StudentFormsProject() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Studentloginform />} />
                <Route path="/home" element={<Studenteverydetails />} />
            </Routes>
        </Router>
    )
}

export default StudentFormsProject