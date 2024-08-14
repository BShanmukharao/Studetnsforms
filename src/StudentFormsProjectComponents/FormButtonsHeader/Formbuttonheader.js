import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import './formbuttonheader.css'
/*
return (
        <nav>
            <div className="formbuttonsul fixed-navbar">
                {buttonsContent.map((eachButton, id) =>
                    <li key={id}><button type="button" class="eachButton">{eachButton}</button></li>
                )}
            </div>
        </nav>
    )
*/

const buttonsContent = ["Student", "Parents", "Fee", "Exams", "Transport", "Descipline", "Health", "Certificates", "Achievements", "Notes/Remarks", "attendance"];

function Formbuttonheader() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <nav className='mobile-nav-bar p-3 fixed-top'>
                <button onClick={toggleNav} className='icons-button'>
                    {isNavOpen ? <i className="fa-solid fa-xmark icons"></i> : <i className="fa-solid fa-bars icons"></i>}
                </button>
                {isNavOpen && (
                    <ul className='navBarUl'>
                        {buttonsContent.map((eachButton, id) =>
                            <li key={id} className='mobileachNavItem'>{eachButton}</li>
                        )}
                    </ul>
                )}
            </nav>
            <nav className='above-mobile-nav-bar fixed-top'>
                <ul className={`navBarUl ${'above-mobile-devices-ul'} p-3`}>
                    {buttonsContent.map((eachButton, id) =>
                        <li key={id} className='aboveMobileachNavItem'><button className='aboveMobileachNavItemButton'>{eachButton}</button></li>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Formbuttonheader