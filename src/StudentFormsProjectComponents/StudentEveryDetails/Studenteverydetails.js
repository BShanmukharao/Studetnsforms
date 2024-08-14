import Formbuttonheader from '../FormButtonsHeader/Formbuttonheader'
import Webcam from 'react-webcam';
import Webcamera from '../Webcamera'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Studenteverydetails.css'

const buttonContent = ["First", "Last", "Next", "Previous", "Find", "Graphs", "Save", "Cancel", "Quit"]

function Studenteverydetails() {
    return (
        <>
            <Formbuttonheader />
            <div className='container-fluid students-container mt-5'>
                <form className='form-top-container row'>
                    <div className='students-form-left-container col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='ADMISSIONNO'>ADMISSION NO :</label><br />
                            <input type='number' id="ADMISSIONNO" className="input-item" min={0} placeholder='ADMISSION NO' />
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='PE NO'>PE NO :</label><br />
                            <input type='number' id="PE NO" className="input-item" min={0} placeholder='PE NO' />
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='SECTION'>SELECT SECTION :</label><br />
                            <select id='SECTION' className="input-item">
                                <option value="" disabled selected>SELECT SECTION</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='DATEOFBIRTH'>DATE OF BIRTH :</label><br />
                            <input type="date" id="DATEOFBIRTH" className="input-item" placeholder='DATE OF BIRTH :' />
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='1STSUBJECT'>SELECT 1ST SUBJECT :</label><br />
                            <select id="1STSUBJECT" className="input-item">
                                <option value="" disabled selected>SELECT 1ST SUBJECT</option>
                                <option value="TELUGU">TELUGU</option>
                                <option value="ENGLISH">ENGLISH</option>
                                <option value="HINDI">HINDI</option>
                                <option value="MATHS">MATHS</option>
                            </select>
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='NATIONALITY'>NATIONALITY :</label><br />
                            <input type='text' id="NATIONALITY" className="input-item" placeholder='NATIONALITY' />
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='HOUSE'>SELECT HOUSE NO :</label><br />
                            <select id="HOUSE" className="input-item">
                                <option value="" disabled selected>SELECT HOUSE NO</option>
                                <option value="HOUSE-1">HOUSE-1</option>
                                <option value="HOUSE-2">HOUSE-2</option>
                                <option value="HOUSE-3">HOUSE-3</option>
                                <option value="HOUSE-4">HOUSE-4</option>
                            </select>
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='OLDCLASS'>SELECT OLD CLASS :</label><br />
                            <select id="OLDCLASS" className="input-item">
                                <option value="" disabled selected>SELECT OLD CLASS</option>
                                <option value="OLD-CLASS-1">OLD-CLASS-1</option>
                                <option value="OLD-CLASS-2">OLD-CLASS-2</option>
                                <option value="OLD-CLASS-3">OLD-CLASS-3</option>
                                <option value="OLD-CLASS-4">OLD-CLASS-4</option>
                            </select>
                        </div>
                        <div className="label-input-container">
                            <label className='each-label-item' htmlFor='SELECT1STSUBJECT'>SELECT 1ST SUBJECT :</label><br />
                            <select id="SELECT1STSUBJECT" className="input-item">
                                <option value="" disabled selected>SELECT 1ST SUBJECT</option>
                                <option value="TELUGU">TELUGU</option>
                                <option value="ENGLISH">ENGLISH</option>
                                <option value="HINDI">HINDI</option>
                                <option value="MATHS">MATHS</option>
                            </select>
                        </div>
                    </div>
                    <div className='students-form-center-container col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='STUDENTNAME'>STUDENT NAME :</label><br />
                            <input type="text" id="STUDENTNAME" className='input-item' placeholder='STUDENT NAME' />
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='STUDENTLONGNAME'>STUDENT LONG NAME :</label><br />
                            <input type="text" id="STUDENTLONGNAME" className='input-item' placeholder='STUDENT LONG NAME' />
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='ROLLNO'>ROLL NO :</label><br />
                            <input type='number' min={0} id="ROLLNO" className="input-item" placeholder='ROLL NO' />
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='ADMISSIONDT'>ADMISSION DATE :</label><br />
                            <input type="date" id="ADMISSIONDT" className='input-item' placeholder='ADMISSION DATE' />
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='2NDSUBJECT'>SELECT 2ND SUBJECT :</label><br />
                            <select id="2NDSUBJECT" className='input-item'>
                                <option value="" disabled selected>SELECT 2ND SUBJECT</option>
                                <option value="HINDI">HINDI</option>
                                <option value="ENGLISH">ENGLISH</option>
                                <option value="TELUGU">TELUGU</option>
                                <option value="MATHS">MATHS</option>
                            </select>
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='MOTHERTONGUE'>SELECT MOTHER TONGUE :</label><br />
                            <select id="MOTHERTONGUE" className='input-item'>
                                <option value="" disabled selected>SELECT MOTHER TONGUE</option>
                                <option value="TELUGU">TELUGU</option>
                                <option value="ENGLISH">ENGLISH</option>
                                <option value="HINDI">HINDI</option>
                                <option value="MARATHI">MARATHI</option>
                            </select>
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='FEEGROUP'>SELECT FEE GROUP :</label><br />
                            <select id="FEEGROUP" className='input-item'>
                                <option value="" disabled selected>SELECT FEE GROUP</option>
                                <option value="SAMPLE-1">SAMPLE-1</option>
                                <option value="SAMPLE-2">SAMPLE-2</option>
                            </select>
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='IDMARK1'>ID MARK-1 :</label><br />
                            <input type="text" id="IDMARK1" className='input-item' placeholder='ID MARK-1' />
                        </div>
                        <div className="label-input-container">
                            <label className='each-label-item' htmlFor='CASTE'>SELECT CASTE :</label><br />
                            <select id="CASTE" className="input-item">
                                <option value="" disabled selected>SELECT CASTE</option>
                                <option value="BC-A">BC-A</option>
                                <option value="BC-B">BC-B</option>
                                <option value="BC-C">BC-C</option>
                                <option value="BC-D">BC-D</option>
                                <option value="S.T">S.T</option>
                            </select>
                        </div>
                    </div>
                    <div className='students-form-right-container col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='CLASS'>SELECT CLASS :</label><br />
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
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='ADMITIN'>SELECT ADMIT IN :</label><br />
                            <select id="ADMITIN" className='input-item'>
                                <option value="" disabled selected>SELECT ADMIT IN</option>
                                <option value="SAMPLE-1">SAMPLE-1</option>
                                <option value="SAMPLE-2">SAMPLE-2</option>
                            </select>
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='MEDIUM'>SELECT MEDIUM :</label><br />
                            <select id='MEDIUM' className='input-item'>
                                <option value="" disabled selected>SELECT MEDIUM</option>
                                <option value="TELUGU">TELUGU</option>
                                <option value="ENGLISH">ENGLISH</option>
                            </select>
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='RELIGION'>SELECT RELIGION :</label><br />
                            <select id='RELIGION' className='input-item'>
                                <option value="" disabled selected>SELECT RELIGION</option>
                                <option value="HINDU">HINDU</option>
                                <option value="CHRISTIAN">CHRISTIAN</option>
                                <option value="MUSLIM">MUSLIM</option>
                            </select>
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='RELIGION'>SELECT SUB CASE :</label><br />
                            <select id="RELIGION" className='input-item'>
                                <option value="" disabled selected>SELECT SUB CASE</option>
                                <option value="SAMPLE-1">SAMPLE-1</option>
                                <option value="SAMPLE-2">SAMPLE-2</option>
                                <option value="SAMPLE-3">SAMPLE-3</option>
                                <option value="SAMPLE-4">SAMPLE-4</option>
                            </select>
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='OLDINST'>OLD INST :</label><br />
                            <input type='text' id="OLDINST" className='input-item' placeholder='OLD INST' />
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='IDMARK-2'>ID MARK-2 :</label><br />
                            <input type='text' id="IDMARK-2" className='input-item' placeholder='ID MARK-2' />
                        </div>
                        <div className='label-input-container'>
                            <label className='each-label-item' htmlFor='AADHAARNO'>AADHAAR NO :</label><br />
                            <input type="text" id="AADHAARNO" className="input-item" placeholder='AADHAAR NO' />
                        </div>
                        <div className="label-input-container">
                            <label className='each-label-item' htmlFor='CATEGORY'>SELECT CATEGORY :</label><br />
                            <select id="CATEGORY" className="input-item">
                                <option value="" disabled selected>SELECT CATEGORY</option>
                                <option value="REGULAR">REGULAR</option>
                                <option value="DISTANCE">DISTANCE</option>
                            </select>
                        </div>
                    </div>
                    <div className='students-form-webcamera-container col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                        <Webcamera />
                    </div>
                </form>
                <form className='form-center-container'>
                    <p className='student-of-same-family-heading'>STUDENT OF SAME FAMILY :</p>
                    <div className='row'>
                        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
                            <div className='second-label-input-conteiner'>
                                <label className='each-label-item' htmlFor='ONE'>ADMISSION NO 1 :</label><br />
                                <input type="text" value={0} id="ONE" className="second-form-input-item" />
                            </div>
                        </div>
                        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
                            <div className='second-label-input-conteiner'>
                                <label className='each-label-item' htmlFor='TWO'>ADMISSION NO 2 :</label><br />
                                <input type="text" value={0} id="TWO" className="second-form-input-item" />
                            </div>
                        </div>
                        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
                            <div className='second-label-input-conteiner'>
                                <label className='each-label-item' htmlFor='THREE'>ADMISSION NO 3 :</label><br />
                                <input type="text" value={0} id="THREE" className="second-form-input-item" />
                            </div>
                        </div>
                        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
                            <div className='second-label-input-conteiner'>
                                <label className='each-label-item' htmlFor='FOUR'>ADMISSION NO 4 :</label><br />
                                <input type="text" value={0} id="FOUR" className="second-form-input-item" />
                            </div>
                        </div>
                        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
                            <div className='second-label-input-conteiner'>
                                <label className='each-label-item' htmlFor='FIFTH'>ADMISSION NO 5 :</label><br />
                                <input type="text" value={0} id="FIFTH" className="second-form-input-item" />
                            </div>
                        </div>
                    </div>
                </form>
                <form className='form-center-container'>
                    <div className='row'>
                        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
                            <div className='second-label-input-conteiner'>
                                <label className='each-label-item' htmlFor='STUDENT MOBILE'>STUDENT MOBILE :</label><br />
                                <input type='text' id="STUDENT MOBILE" className="third-form-input-item" placeholder='STUDENT MOBILE' />
                            </div>
                        </div>
                        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
                            <div className='second-label-input-conteiner'>
                                <label className='each-label-item' htmlFor='LEFT TO DATE'>LEFT TO DATE :</label><br />
                                <input type="date" id='LEFT TO DATE' className="third-form-input-item" placeholder='LEFT TO DATE' />
                            </div>
                        </div>
                        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
                            <div className='second-label-input-conteiner'>
                                <label className='each-label-item' htmlFor='OUR TC NO'>OUR TC NO :</label><br />
                                <input type="text" id='OUR TC NO' className="third-form-input-item" placeholder='OUR TC NO' />
                            </div>
                        </div>
                        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
                            <div className='second-label-input-conteiner'>
                                <label className='each-label-item' htmlFor='OUR TC NO'>DATE :</label><br />
                                <input type="date" id='DATE' className="third-form-input-item" placeholder='DATE' />
                            </div>
                        </div>
                        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
                            <div className='second-label-input-conteiner'>
                                <label className='each-label-item' htmlFor='REASON'>OUR TC NO :</label><br />
                                <input type="text" id='REASON' className="third-form-input-item" placeholder='REASON' />
                            </div>
                        </div>
                    </div>
                </form>
                <ul className='form-bottom-container-ul'>{buttonContent.map((content, ID) => (
                    <a key={ID} className='each-bottom-anchor'>{content}</a>
                ))}</ul>
            </div>
        </>
    )
}

export default Studenteverydetails