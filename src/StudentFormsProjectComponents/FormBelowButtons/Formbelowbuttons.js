import './Formbelowbuttons.css'

const buttons1 = ["First", "Last", "Next", "Previous", "Find", "Graphs", "Save", "Cancel", "Quit"]

function Formbelowbuttons() {
    return (
        <ul className='formbuttonsul'>
            {buttons1.map((eachButton, id) =>
                <li key={id}><button className='eachButton'>{eachButton}</button></li>
            )}
        </ul>
    )
}

export default Formbelowbuttons  