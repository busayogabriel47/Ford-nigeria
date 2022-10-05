import React, { Component } from 'react';
import '../testdrive/testdrive.css';
import figo from '../../assets/images/testdrive1.png'
import ecosport from '../../assets/images/testdrive2.png'
import edge from '../../assets/images/testdrive3.png'
import explorer from '../../assets/images/testdrive4.png'
import mustang from '../../assets/images/testdrive5.png'
import ranger from '../../assets/images/testdrive6.png'





const TestDrive = () =>{


    window.scrollTo(0, 0)

    return (
        <>
            <div className='track text-center p-5 testDrive'>
                    <h5 className='ford-font ford-blue-text light-font-weight'> REQUEST A TEST DRIVE </h5>
            </div>

            <div className='testDrive1 container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-6 testDriveCol1 p-3'>
                        <h4 className='ford-font ford-blue-text light-font-weight'>1 SELECT A VEHICLE</h4>
                        {/*--------Row-one---------*/}
                        <div className='row'>
                            <div className='col-3 form-check'>
                                <div className='row text-center'>
                                        <div className='col-12 text-center'>
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        </div>
                                        <div className='col-12'>
                                            <img src={figo} alt="figo" width="120px"/>
                                        </div>
                                        <div className='col-12'>
                                            <label class="form-check-label" for="inlineRadio1">FIGO</label>
                                        </div>
                                </div>
                            </div>

                            <div className='col-3 form-check'>
                                <div className='row text-center'>
                                        <div className='col-12 text-center'>
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        </div>
                                        <div className='col-12'>
                                            <img src={ecosport} alt="figo" width="120px"/>
                                        </div>
                                        <div className='col-12'>
                                            <label class="form-check-label" for="inlineRadio1">ECOSPORT</label>
                                        </div>
                                </div>
                            </div>


                            <div className='col-3 form-check'>
                                <div className='row text-center'>
                                        <div className='col-12 text-center'>
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        </div>
                                        <div className='col-12'>
                                            <img src={edge} alt="figo" width="120px"/>
                                        </div>
                                        <div className='col-12'>
                                            <label class="form-check-label" for="inlineRadio1">EDGE</label>
                                        </div>
                                </div>
                            </div>
                        </div>


                        {/*-----------Row---two----------------*/}



                        <div className='row'>
                            <div className='col-3 form-check'>
                                <div className='row text-center'>
                                        <div className='col-12 text-center'>
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        </div>
                                        <div className='col-12'>
                                            <img src={explorer} alt="figo" width="120px"/>
                                        </div>
                                        <div className='col-12'>
                                            <label class="form-check-label" for="inlineRadio1">EXPLORER</label>
                                        </div>
                                </div>
                            </div>

                            <div className='col-3 form-check'>
                                <div className='row text-center'>
                                        <div className='col-12 text-center'>
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        </div>
                                        <div className='col-12'>
                                            <img src={mustang} alt="figo" width="120px"/>
                                        </div>
                                        <div className='col-12'>
                                            <label class="form-check-label" for="inlineRadio1">MUSTANG</label>
                                        </div>
                                </div>
                            </div>


                            <div className='col-3 form-check'>
                                <div className='row text-center'>
                                        <div className='col-12 text-center'>
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        </div>
                                        <div className='col-12'>
                                            <img src={ranger} alt="figo" width="120px"/>
                                        </div>
                                        <div className='col-12'>
                                            <label class="form-check-label" for="inlineRadio1">RANGER</label>
                                        </div>
                                </div>
                            </div>
                        </div>

                        {/*-----------Row-three-------------*/}


                        <div className='row'>
                            <div className='col-3 form-check'>
                                <div className='row text-center'>
                                        <div className='col-12 text-center'>
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        </div>
                                        <div className='col-12'>
                                            <img src={explorer} alt="figo" width="120px"/>
                                        </div>
                                        <div className='col-12'>
                                            <label class="form-check-label" for="inlineRadio1">EXPLORER</label>
                                        </div>
                                </div>
                            </div>

                            <div className='col-3 form-check'>
                                <div className='row text-center'>
                                        <div className='col-12 text-center'>
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        </div>
                                        <div className='col-12'>
                                            <img src={mustang} alt="figo" width="120px"/>
                                        </div>
                                        <div className='col-12'>
                                            <label class="form-check-label" for="inlineRadio1">MUSTANG</label>
                                        </div>
                                </div>
                            </div>


                            <div className='col-3 form-check'>
                                <div className='row text-center'>
                                        <div className='col-12 text-center'>
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        </div>
                                        <div className='col-12'>
                                            <img src={ranger} alt="figo" width="120px"/>
                                        </div>
                                        <div className='col-12'>
                                            <label class="form-check-label" for="inlineRadio1">RANGER</label>
                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>

                        

                    <div className='col-12 col-md-6 p-3 detailsCol'>
                        <h4 className='mb-5 ford-font ford-blue-text light-font-weight'>2 YOUR DETAILS</h4>

                        <p className='ford-text ford-grey-text'>
                            Ford Motor Company Limited will be use the information
                            below to verify your selected dealer. We will share your
                            details with that dealer to enable them to fulfil your details
                            with that dealers to enable them to fulful your request using one of the
                            methods below.
                        </p>
                        <p className='ford-text ford-grey-text'>
                            For further information on how we use your data. international data
                            transfers. and your rights please see Full Privacy details.
                        </p>

                        <p className='ford-text ford-grey-text'>
                            To enable us to handle your request in the best way. Please select your next
                            vehicle type. For more information please click here.
                        </p>



                        <div className='p-5 text-center'>
                                <form className='mx-auto testDriveForm'>

                                        <input className='form-control' type="text" placeholder='First name'/>

                                        <input className='form-control' type="text" placeholder='Surname'/>

                                        <input className='form-control' type="email" placeholder='Email'/>

                                        <input className='form-control' type="text" placeholder='Mobile No'/>

                                        <select className='form-control'>
                                              <option value="none">When will you purchase</option>
                                              <option value="figo">Immediately</option>
                                              <option value="focus">4 weeks </option>
                                              <option value="fusion">12 weeks </option>
                                    
                                        </select>

                                      

                                        <button className='btn btn-ford-blue ford-font'>Submit Request</button>
                                </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default TestDrive;