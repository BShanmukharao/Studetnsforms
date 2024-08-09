import Formbuttonheader from '../FormButtonsHeader/Formbuttonheader'
import Formbelowbuttons from '../FormBelowButtons/Formbelowbuttons'
import Webcam from 'react-webcam';
import Webcamera from '../Webcamera'
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Studenteverydetails.css'

function Studenteverydetails() {
    return (
        <div className='students-container'>
            <form className='form-top-container'>
                <div className='students-form-left-container'>
                    <div className="each-label-input-container">
                        <input type="number" id="ADMINSSIONNO" className="input-item" min={0} placeholder='ADMISSION NO' />
                    </div>
                    <div className='each-label-input-container'>
                        <input type="number" id="PENO" min={0} className="input-item" placeholder='PE NO' />
                    </div>
                    <div className='each-label-input-container'>
                        <select id='SECTION' className="input-item">
                            <option value="" disabled selected>SELECT SECTION</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                    <div className='each-label-input-container'>
                        <input type="date" id="DATEOFBIRTH" className="input-item" placeholder='DATE OF BIRTH :' />
                    </div>
                    <div className='each-label-input-container'>
                        <select id="1STSUBJECT" className="input-item">
                            <option value="" disabled selected>SELECT 1ST SUBJECT</option>
                            <option value="TELUGU">TELUGU</option>
                            <option value="ENGLISH">ENGLISH</option>
                            <option value="HINDI">HINDI</option>
                            <option value="MATHS">MATHS</option>
                        </select>
                    </div>
                    <div className='each-label-input-container'>
                        <input type='text' id="NATIONALITY" className="input-item" placeholder='NATIONALITY' />
                    </div>
                    <div className='each-label-input-container'>
                        <select id="HOUSE" className="input-item">
                            <option value="" disabled selected>SELECT HOUSE NO</option>
                            <option value="HOUSE-1">HOUSE-1</option>
                            <option value="HOUSE-2">HOUSE-2</option>
                            <option value="HOUSE-3">HOUSE-3</option>
                            <option value="HOUSE-4">HOUSE-4</option>
                        </select>
                    </div>
                    <div className='each-label-input-container'>
                        <select id="OLDCLASS" className="input-item">
                            <option value="" disabled selected>SELECT OLD CLASS</option>
                            <option value="OLD-CLASS-1">OLD-CLASS-1</option>
                            <option value="OLD-CLASS-2">OLD-CLASS-2</option>
                            <option value="OLD-CLASS-3">OLD-CLASS-3</option>
                            <option value="OLD-CLASS-4">OLD-CLASS-4</option>
                        </select>
                    </div>
                </div>
                <div className='students-form-center-container'>
                    <div className='each-label-input-container'>
                        <div className='input-container-center'>
                            <input type="text" id="STUDENTNAME" className='input-item' placeholder='STUDENT NAME' />
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div className='input-container-center'>
                            <input type="text" id="STUDENTLONGNAME" className='input-item' placeholder='STUDENT LONG NAME' />
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div>
                            <input type='number' min={0} id="ROLLNO" className="input-item" placeholder='ROLL NO' />
                        </div>
                        <div className="twice-input-container">
                            <select id="1STSUBJECT" className='input-item'>
                                <option value="" disabled selected>SELECT 1ST SUBJECT</option>
                                <option value="TELUGU">TELUGU</option>
                                <option value="ENGLISH">ENGLISH</option>
                                <option value="HINDI">HINDI</option>
                                <option value="MATHS">MATHS</option>
                            </select>
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div className='input-container-center'>
                            <input type="date" id="ADMISSIONDT" className='input-item' placeholder='ADMISSION DATE' />
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div>
                            <select id="2NDSUBJECT" className='input-item'>
                                <option value="" disabled selected>SELECT 2ND SUBJECT</option>
                                <option value="HINDI">HINDI</option>
                                <option value="ENGLISH">ENGLISH</option>
                                <option value="TELUGU">TELUGU</option>
                                <option value="MATHS">MATHS</option>
                            </select>
                        </div>
                        <div className="twice-input-container">
                            <select id="CASTE" className='input-item'>
                                <option value="" disabled selected>SELECT CASTE</option>
                                <option value="BC-A">BC-A</option>
                                <option value="BC-B">BC-B</option>
                                <option value="BC-C">BC-C</option>
                                <option value="BC-D">BC-D</option>
                                <option value="S.T">S.T</option>
                            </select>
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div>
                            <select id="MOTHERTONGUE" className='input-item'>
                                <option value="" disabled selected>SELECT MOTHER TONGUE</option>
                                <option value="TELUGU">TELUGU</option>
                                <option value="ENGLISH">ENGLISH</option>
                                <option value="HINDI">HINDI</option>
                                <option value="MARATHI">MARATHI</option>
                            </select>
                        </div>
                        <div className="twice-input-container">
                            <select id="CATEGORY" className='input-item'>
                                <option value="" disabled selected>SELECT CATEGORY</option>
                                <option value="REGULAR">REGULAR</option>
                                <option value="DISTANCE">DISTANCE</option>
                            </select>
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <select id="FEEGROUP" className='input-item'>
                            <option value="" disabled selected>SELECT FEE GROUP</option>
                            <option value="SAMPLE-1">SAMPLE-1</option>
                            <option value="SAMPLE-2">SAMPLE-2</option>
                        </select>
                    </div>
                    <div className='each-label-input-container'>
                        <div className='input-container-center'>
                            <input type="text" id="IDMARK1" className='input-item' placeholder='ID MARK-1' />
                        </div>
                    </div>
                </div>
                <div className='students-form-right-container'>
                    <div className='each-label-input-container'>
                        <div className='input-container-end'>
                            <select id="CLASS" className='input-item'>
                                <option value="" disabled selected>SELECT CLASS</option>
                                <option value="NURSARY">NURSARY</option>
                                <option value="U.K.G">U.K.G</option>
                                <option value="L.K.G">L.K.G</option>
                                <option value="CLASS-1">CLASS-1</option>
                                <option value="CLASS-2">CLASS-2</option>
                                <option value="CLASS-3">CLASS-3</option>
                                <option value="CLASS-4">CLASS-4</option>
                                <option value="CLASS-5">CLASS-5</option>
                                <option value="CLASS-6">CLASS-6</option>
                                <option value="CLASS-7">CLASS-7</option>
                                <option value="CLASS-8">CLASS-8</option>
                                <option value="CLASS-9">CLASS-9</option>
                                <option value="CLASS-10">CLASS-10</option>
                            </select>
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div className='input-container-end'>
                            <select id="ADMITIN" className='input-item'>
                                <option value="" disabled selected>SELECT ADMIT IN</option>
                                <option value="SAMPLE-1">SAMPLE-1</option>
                                <option value="SAMPLE-2">SAMPLE-2</option>
                            </select>
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div className='input-container-end'>
                            <select id='MEDIUM' className='input-item'>
                                <option value="" disabled selected>SELECT MEDIUM</option>
                                <option value="TELUGU">TELUGU</option>
                                <option value="ENGLISH">ENGLISH</option>
                            </select>
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div className='input-container-end'>
                            <select id='RELIGION' className='input-item'>
                                <option value="" disabled selected>SELECT RELIGION</option>
                                <option value="HINDU">HINDU</option>
                                <option value="CHRISTIAN">CHRISTIAN</option>
                                <option value="MUSLIM">MUSLIM</option>
                            </select>
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div className='input-container-end'>
                            <select id="SUBCASE" className='input-item'>
                                <option value="" disabled selected>SELECT SUB CASE</option>
                                <option value="SAMPLE-1">SAMPLE-1</option>
                                <option value="SAMPLE-2">SAMPLE-2</option>
                                <option value="SAMPLE-3">SAMPLE-3</option>
                                <option value="SAMPLE-4">SAMPLE-4</option>
                            </select>
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div className='input-container-end'>
                            <input type='text' id="OLDINST" className='input-item' placeholder='OLD INST' />
                        </div>
                    </div>
                    <div className='each-label-input-container'>
                        <div className='input-container-end'>
                            <input type='text' id="IDMARK-2" className='input-item' placeholder='ID MARK-2' />
                        </div>
                    </div>
                    <div className="each-label-input-container">
                        <div className='input-container-end'>
                            <input type="text" id="AADHAARNO" className="input-item" placeholder='AADHAAR NO' />
                        </div>
                    </div>
                </div>
                <div className='students-form-webcameraa-container'>
                    <Webcamera />
                </div>
            </form>
            <form className='form-center-container'>
                <p className='student-of-same-family-heading'>STUDENT OF SAME FAMILY :</p>
                <div className='students-form-bottom-container'>

                    <input type="text" value={0} id="ONE" className="second-form-input-item" />

                    <input type="text" value={0} id="TWO" className="second-form-input-item" />

                    <input type="text" value={0} id="THREE" className="second-form-input-item" />

                    <input type="text" value={0} id="FOUR" className="second-form-input-item" />

                    <input type="text" value={0} id="FIFTH" className="second-form-input-item" />
                    
                </div>
            </form>
            <form className='form-bottom-container'>

                <input type='text' className="third-form-input-item" placeholder='STUDENT MOBILE' />

                <input type="text" id='LEFTTODATE' className="third-form-input-item" placeholder='LEFT TO DATE' />

                <input type="text" id='LEFTTODATE' className="third-form-input-item" placeholder='OUR TC NO' />

                <input type="text" id='LEFTTODATE' className="third-form-input-item" placeholder='DATE' />

                <input type="text" id='LEFTTODATE' className="third-form-input-item" placeholder='REASON' />

            </form>
        </div>
    )
}

export default Studenteverydetails