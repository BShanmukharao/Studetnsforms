import 'bootstrap/dist/css/bootstrap.min.css';
import './formbuttonheader.css'

const buttonsContent = ["Student","Parents","Fee","Exams","Transport","Descipline","Health","Certificates","Achievements","Notes/Remarks","attendance"];

function Formbuttonheader () {
    return(
        <ul className="formbuttonsul">
            {buttonsContent.map((eachButton,id)=>
                <li key={id}><button type="button" class="btn btn-secondary eachButton">{eachButton}</button></li>
            )}
        </ul>
    )
}

export default Formbuttonheader