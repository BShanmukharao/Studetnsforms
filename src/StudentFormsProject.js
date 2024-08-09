import { useState } from 'react'
//import Studentregistrationform from '../src/StudentFormsProjectComponents/StudentRegistrationForm/Studentregistrationform'
//import Studentloginform from '../src/StudentFormsProjectComponents/StudentLoginForm/Studentloginform'
import Studenteverydetails from '../src/StudentFormsProjectComponents/StudentEveryDetails/Studenteverydetails'
import Formbuttonheader from '../src/StudentFormsProjectComponents/FormButtonsHeader/Formbuttonheader'

function StudentFormsProject() {
    const [buttonId, setButtonId] = useState(0)

    return (
        <div>
            <Formbuttonheader />
            <Studenteverydetails/>
        </div>
    )
}

export default StudentFormsProject