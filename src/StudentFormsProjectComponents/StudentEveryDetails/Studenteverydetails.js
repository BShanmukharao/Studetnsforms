import Formbuttonheader from '../FormButtonsHeader/Formbuttonheader'
import Formbelowbuttons from '../FormBelowButtons/Formbelowbuttons'
import './Studenteverydetails.css'

function Studenteverydetails() {
    return (
        <div>
            <Formbuttonheader />
            <div className='students-container'>
                <form className='form-top-container'>
                    <div className='students-form-left-container'>
                        <div className='each-label-input-container'>
                            <div className='label-container-left'>
                                <label htmlFor='ADMINNO' className='label-item'>ADMIN NO :  </label>
                            </div>
                            <div className='input-container-left'>
                                <input type="number" id="ADMINNO" min={0} className={`input-item ${'inputmaxwidth'}`} />
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-left'>
                                <label htmlFor='PENO' className='label-item'>PE NO :  </label>
                            </div>
                            <div className='input-container-left'>
                                <input type="number" id="PENO" min={0} className={`input-item ${'inputmaxwidth'}`} />
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-left'>
                                <label htmlFor='SECTION' className='label-item'>SECTION :  </label>
                            </div>
                            <div className='input-container-left'>
                                <select id='SECTION' className={`input-item ${'inputmaxwidth'}`}>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-left'>
                                <label htmlFor='DATEOFBIRTH' className='label-item'>DATE OF BIRTH :  </label>
                            </div>
                            <div className='input-container-left'>
                                <input type="date" id="DATEOFBIRTH" className={`input-item ${'inputmaxwidth'}`} />
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-left'>
                                <label htmlFor='1STSUBJECT' className='label-item'>1 ST SUBJECT :  </label>
                            </div>
                            <div className='input-container-left'>
                                <select id="1STSUBJECT" className={`input-item ${'inputmaxwidth'}`}>
                                    <option value="TELUGU">TELUGU</option>
                                    <option value="ENGLISH">ENGLISH</option>
                                    <option value="HINDI">HINDI</option>
                                    <option value="MATHS">MATHS</option>
                                </select>
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-left'>
                                <label htmlFor='NATIONALITY' className='label-item'>NATIONALITY :  </label>
                            </div>
                            <div className='input-container-left'>
                                <input type='text' value="INDIAN" id="NATIONALITY" className={`input-item ${'inputmaxwidth'}`} />
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-left'>
                                <label htmlFor='HOUSE' className='label-item'>HOUSE :  </label>
                            </div>
                            <div className='input-container-left'>
                                <select id="HOUSE" className={`input-item ${'inputmaxwidth'}`}>
                                    <option value="HOUSE-1">HOUSE-1</option>
                                    <option value="HOUSE-2">HOUSE-2</option>
                                    <option value="HOUSE-3">HOUSE-3</option>
                                    <option value="HOUSE-4">HOUSE-4</option>
                                </select>
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-left'>
                                <label htmlFor='OLDCLASS' className='label-item'>OLD CLASS :  </label>
                            </div>
                            <div className='input-container-left'>
                                <select id="OLDCLASS" className={`input-item ${'inputmaxwidth'}`}>
                                    <option value="OLD-CLASS-1">OLD-CLASS-1</option>
                                    <option value="OLD-CLASS-2">OLD-CLASS-2</option>
                                    <option value="OLD-CLASS-3">OLD-CLASS-3</option>
                                    <option value="OLD-CLASS-4">OLD-CLASS-4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='students-form-middle-container'>
                        <div className='each-label-input-container'>
                            <div className='label-container-center'>
                                <label htmlFor='STUDENTNAME' className='label-item'>STUDENT NAME :  </label>
                            </div>
                            <div className='input-container-center'>
                                <input type="text" id="STUDENTNAME" className='input-item' />
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-center'>
                                <label htmlFor='STUDENTLONGNAME' className='label-item'>STUDENT LONG NAME :  </label>
                            </div>
                            <div className='input-container-center'>
                                <input type="text" id="STUDENTLONGNAME" className='input-item' />
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className="twice-input-container">
                                <label htmlFor='ROLLNO' className='label-item'>ROLL NO :  </label>
                                <input type='number' min={0} id="ROLLNO" className={`input-item ${'rollNo'}`} />
                            </div>
                            <div className="twice-input-container">
                                <label htmlFor='1STSUBJECT' className={`label-item ${'twice-input-label'}`}>1 ST SUBJECT :  </label>
                                <select id="1STSUBJECT" className='input-item'>
                                    <option value="TELUGU">TELUGU</option>
                                    <option value="ENGLISH">ENGLISH</option>
                                    <option value="HINDI">HINDI</option>
                                    <option value="MATHS">MATHS</option>
                                </select>
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-center'>
                                <label htmlFor='ADMISSIONDT' className='label-item'>ADMISSION DT :  </label>
                            </div>
                            <div className='input-container-center'>
                                <input type="date" id="ADMISSIONDT" className='input-item' />
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className="twice-input-container">
                                <label htmlFor='2NDSUBJECT' className='label-item'>2 ND SUBJECT :  </label>
                                <select id="2NDSUBJECT" className='input-item'>
                                    <option value="HINDI">HINDI</option>
                                    <option value="ENGLISH">ENGLISH</option>
                                    <option value="TELUGU">TELUGU</option>
                                    <option value="MATHS">MATHS</option>
                                </select>
                            </div>
                            <div className="twice-input-container">
                                <label htmlFor='CASTE' className={`label-item ${'twice-input-label'}`}>CASTE :  </label>
                                <select id="CASTE" className='input-item'>
                                    <option value="BC-A">BC-A</option>
                                    <option value="BC-B">BC-B</option>
                                    <option value="BC-C">BC-C</option>
                                    <option value="BC-D">BC-D</option>
                                    <option value="S.T">S.T</option>
                                </select>
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className="twice-input-container">
                                <label htmlFor='MOTHERTONGUE' className='label-item'>MOTHER TONGUE :  </label>
                                <select id="MOTHERTONGUE" className='input-item'>
                                    <option value="TELUGU">TELUGU</option>
                                    <option value="ENGLISH">ENGLISH</option>
                                    <option value="HINDI">HINDI</option>
                                    <option value="MARATHI">MARATHI</option>
                                </select>
                            </div>
                            <div className="twice-input-container">
                                <label htmlFor='CATEGORY' className={`label-item ${'twice-input-label'}`}>CATEGORY :  </label>
                                <select id="CATEGORY" className='input-item'>
                                    <option value="REGULAR">REGULAR</option>
                                    <option value="DISTANCE">DISTANCE</option>
                                </select>
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <label htmlFor='FEEGROUP' className='label-item'>FEE GROUP :  </label>
                            <select id="FEEGROUP" className='input-item'>
                                <option value="SAMPLE-1">SAMPLE-1</option>
                                <option value="SAMPLE-2">SAMPLE-2</option>
                            </select>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-center'>
                                <label htmlFor='IDMARK1' className='label-item'>ID MARK-1 :  </label>
                            </div>
                            <div className='input-container-center'>
                                <input type="text" id="IDMARK1" className='input-item' />
                            </div>
                        </div>
                    </div>
                    <div className='students-form-right-container'>
                        <div>
                            <div className='each-label-input-container'>
                                <div className='label-container-end'>
                                    <label htmlFor='CLASS' className='label-item'>CLASS :  </label>
                                </div>
                                <div className='input-container-end'>
                                    <select id="CLASS" className='input-item'>
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
                                <div className='label-container-end'>
                                    <label htmlFor='ADMITIN' className='label-item'>ADMIT IN :  </label>
                                </div>
                                <div className='input-container-end'>
                                    <select id="ADMITIN" className='input-item'>
                                        <option value="SAMPLE-1">SAMPLE-1</option>
                                        <option value="SAMPLE-2">SAMPLE-2</option>
                                    </select>
                                </div>
                            </div>
                            <div className='each-label-input-container'>
                                <div className='label-container-end'>
                                    <label htmlFor='MEDIUM' className='label-item'>MEDIUM :  </label>
                                </div>
                                <div className='input-container-end'>
                                    <select id='MEDIUM' className='input-item'>
                                        <option value="TELUGU">TELUGU</option>
                                        <option value="ENGLISH">ENGLISH</option>
                                    </select>
                                </div>
                            </div>
                            <div className='each-label-input-container'>
                                <div className='label-container-end'>
                                    <label htmlFor='RELIGION' className='label-item'>RELIGION :  </label>
                                </div>
                                <div className='input-container-end'>
                                    <select id='RELIGION' className='input-item'>
                                        <option value="HINDU">HINDU</option>
                                        <option value="CHRISTIAN">CHRISTIAN</option>
                                        <option value="MUSLIM">MUSLIM</option>
                                    </select>
                                </div>
                            </div>
                            <div className='each-label-input-container'>
                                <div className='label-container-end'>
                                    <label htmlFor='SUBCASE' className='label-item'>SUB CASE :  </label>
                                </div>
                                <div className='input-container-end'>
                                    <select id="SUBCASE" className='input-item'>
                                        <option value="SAMPLE-1">SAMPLE-1</option>
                                        <option value="SAMPLE-2">SAMPLE-2</option>
                                        <option value="SAMPLE-3">SAMPLE-3</option>
                                        <option value="SAMPLE-4">SAMPLE-4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>sample</label>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-end'>
                                <label htmlFor='OLDINST' className='label-item'>OLD INST :  </label>
                            </div>
                            <div className='input-container-end'>
                                <input type='text' id="OLDINST" className='input-item' />
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-end'>
                                <label htmlFor='IDMARK-2' className='label-item'>ID MARK-2 :  </label>
                            </div>
                            <div className='input-container-end'>
                                <input type='text' id="IDMARK-2" className='input-item' />
                            </div>
                        </div>
                        <div className='each-label-input-container'>
                            <div className='label-container-end'>
                                <label htmlFor='AADHAARNO' className='label-item'>AADHAAR NO :  </label>
                            </div>
                            <div className='input-container-end'>
                                <input type="text" id="AADHAARNO" className='input-item' />
                            </div>
                        </div>
                    </div>
                </form>
                <form>
                    <p className='five-cards-heading'>STUDENT OF SAME FAMILY :</p>
                    <div className='students-form-bottom-container'>
                        <div className='short-label-input-container'>
                            <label htmlFor='ONE' className='label-item'>1) </label>
                            <input type="text" value="0" id="ONE" className={`input-item ${'shortinput'}`} />
                        </div>
                        <div className='short-label-input-container'>
                            <label htmlFor='TWO' className='label-item'>2) </label>
                            <input type="text" value="0" id="TWO" className={`input-item ${'shortinput'}`} />
                        </div>
                        <div className='short-label-input-container'>
                            <label htmlFor='THREE' className='label-item'>3) </label>
                            <input type="text" value="0" id="THREE" className={`input-item ${'shortinput'}`} />
                        </div>
                        <div className='short-label-input-container'>
                            <label htmlFor='FOUR' className='label-item'>4) </label>
                            <input type="text" value="0" id="FOUR" className={`input-item ${'shortinput'}`} />
                        </div>
                        <div className='short-label-input-container'>
                            <label htmlFor='FIFTH' className='label-item'>5) </label>
                            <input type="text" value="0" id="FIFTH" className={`input-item ${'shortinput'}`} />
                        </div>
                    </div>
                </form>
                <form className='bottom-form-container'>
                    <div className='bottom-form-left-container'>
                        <label className={`label-item ${'five-cards-heading'}`}>STUDENT MOBILE # :</label><br />
                        <input type='text' className={`input-item ${'student-mobile-input'}`} />
                    </div>
                    <div className='bottom-form-right-container'>
                        <div className='bottom-form-right-four-container'>
                            <label htmlFor='LEFTTODATE' className='label-item'>LEFT TO DATE</label>
                            <input type="text" id='LEFTTODATE' className={`input-item ${'student-four-inputs'}`} />
                        </div>
                        <div className='bottom-form-right-four-container'>
                            <label htmlFor='LEFTTODATE' className='label-item'>OUR TC NO</label>
                            <input type="text" id='LEFTTODATE' className={`input-item ${'student-four-inputs'}`} />
                        </div>
                        <div className='bottom-form-right-four-container'>
                            <label htmlFor='LEFTTODATE' className='label-item'>DATE</label>
                            <input type="text" id='LEFTTODATE' className={`input-item ${'student-four-inputs'}`} />
                        </div>
                        <div className='bottom-form-right-four-container'>
                            <label htmlFor='LEFTTODATE' className='label-item'>REASON</label>
                            <input type="text" id='LEFTTODATE' className={`input-item ${'student-four-inputs'}`} />
                        </div>
                    </div>
                </form>
            </div>
            <Formbelowbuttons />
        </div >
    )
}

export default Studenteverydetails