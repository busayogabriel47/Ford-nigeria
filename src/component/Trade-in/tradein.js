import React, { Component } from 'react';
import '../blog/blog.css';
import timetrack from '../../assets/images/k.jpg';
import tradein from '../../assets/images/ecosport.jpg';
import engine from '../../assets/images/engine.png';
import ecosportMob from '../../assets/images/ecosport-mob.jpg';


import {Link} from 'react-scroll';
import axios from 'axios'

import  {useLoginForm} from '../validation/validationHooks'
import styles from '../../../src/App.css'
import clsx from 'clsx';




const TradeIn = () => {


    const [form, setForm] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        mobileno:"",
        mileage: "",
        variant: null,
        model: "",
        vehicle: "figo"
    });


    const { errors, validateForm, onBlurField } = useLoginForm(form);


    const updateField = e => {
        const field = e.target.name;
        const nextFormState = {
            ...form, 
            [field]: e.target.value
    
        };
    
    
        
        setForm(nextFormState);
        if(errors[field].dirty)
            validateForm({
                form: nextFormState,
                errors,
                field,
            })
    
    }
    
    
    
    
    const onSubmitForm = async(e) => {
        e.preventDefault();
    
        const { isValid } = validateForm({ form, errors, forceTouchErrors: true});
    
        if(!isValid) return;
        alert(JSON.stringify(form, null, 2));
    
         await axios({
                method: "post",
                url: "https://charisbrain1.herokuapp.com/charis/fordwebsiteservices/mail/trade-in",
                data: form,
    
                headers: {
                    'Content-Type': 'application/json'
                  }
            }).then((response) => {
                    console.log(response);
            }).catch((response) => {
                console.log(response)
            });
        }


    {/*window.scrollTo(0, 0)*/}

    return (
        <>
            <div className="forBlog navigation-clearance mobile-margin-clearance-banner">
                <h5 className="mBOff ford-font">Ford Vehicle Swap</h5>
            </div>
            <div className='row full-width mOff'>
                <div className='col-12 pOff d-none d-sm-block'>
                    <img src={tradein}  alt="" width="100%"/>
                </div>

                <div className='col-12 pOff d-block d-sm-none'>
                    <img src={ecosportMob}  alt="" width="100%"/>
                </div>
                <div className='col-12 track text-center p-5'>
                    <p className='ford-text ford-grey-text'>Finance your next Ford vehicle purchase through a trade-in.</p>
                    <button className='btn btn-ford-blue ford-font'><Link to="application" spy={true} smooth={true}>Apply Now</Link></button>
                </div>
            </div>


                <div className='row mb-5 blogContent readMore container-fluid mt-5 mROff'>
                    <div className='col-12 col-md-6'>
                        <img src={timetrack} alt="blogimage" width="100%"/>
                    </div>

                    <div className='col-12 col-md-6 p-4'>
                        <h2 className='ford-font ford-blue-text'>Mileage is a key factor we  consider before approving trade-in finance</h2>  
                        <p className='ford-font ford-grey-text light-font-weight'>Your vehicle health history is the record of all maintainance activity around 
                            your ownership of our Ford vehicles. This information helps us certify that the 
                            re-use value for our pre-owned sales. the more detailed your vehicle history, the
                            more value you can protect within your equity.
                        </p>

                    </div>
                </div>

                <div className='track text-center p-5'>
                    
                </div>

                <div className='row mb-5 blogContent readMore container-fluid mt-5 mROff'>

                    <div className='col-12 col-md-6 p-4'>
                        <h2 className='ford-font ford-blue-text'>Health history is more critical to the trade-in finance process for your Ford car</h2>  
                        <p className='ford-font ford-grey-text light-font-weight'>Your vehicle health history is the record of all maintainance activity around 
                            your ownership of our Ford vehicles. This information helps us certify that the 
                            re-use value for our pre-owned sales. the more detailed your vehicle history, the
                            more value you can protect within your equity.
                        </p>

                    </div>

                    <div className='col-12 col-md-6'>
                        <img src={engine} alt="blogimage" width="100%"/>
                    </div>

                </div>

                <div className='track text-center p-5' id="application">
                    <p className='ford-font ford-grey-text'>Apply for a car valuation with your health history and authentic mileage below and we will
                        let you know if you vehicle passes for trade-in finance
                    </p>
                </div>

                <div className='p-5 text-center'>
                    <form className='col-12 col-md-6 mx-auto' onSubmit={onSubmitForm}>

                            {/* Firstname field */}
                            <div className="form-control">
                                {errors.firstname.dirty && errors.firstname.error ? (
                                <p className={styles.formFieldErrorMessage}>{errors.firstname.message}</p>
                                                                    ) : null}
                                <input 
                                className={clsx(
                                    styles.formField,
                                    errors.firstname.dirty &&
                                    errors.firstname.error &&
                                    styles.formFieldError
                                )}
                                type="text"
                                name="firstname" 
                                value={form.firstname} 
                                onChange={updateField}
                                onBlur={onBlurField}
                                placeholder='firstname'
                                />

                             </div>

                            {/* Lastname field */}
                            <div className="form-control">
                                {errors.lastname.dirty && errors.lastname.error ? (
                            <p className={styles.formFieldErrorMessage}>{errors.lastname.message}</p>
                                                                ) : null}
                            <input 
                            className={clsx(
                                styles.formControl,
                                styles.formField,
                                errors.lastname.dirty &&
                                errors.lastname.error &&
                                styles.formFieldError

                            )} 
                            type="text"
                             name="lastname" 
                             value={form.lastname} 
                             onChange={updateField}
                             onBlur={onBlurField}
                             placeholder='lastname'/>
                            </div>

                            {/* email field */}
                            <div className="form-control">
                                {errors.email.dirty && errors.email.error ? (
                                <p className={styles.formFieldErrorMessage}>{errors.email.message}</p>
                                                                    ) : null}
                                <input  
                                className={clsx(
                                    styles.formControl,
                                    styles.formField,
                                    errors.email.dirty &&
                                    errors.email.error &&
                                    styles.formFieldError
    
                                )}
                                type="text"
                                name="email" 
                                value={form.email} 
                                onChange={updateField}
                                onBlur={onBlurField}
                                placeholder='Email'/>

                            </div>

                            {/* Mobileno field */}
                            <div className="form-control">
                                    {errors.mobileno.dirty && errors.mobileno.error ? (
                                <p className={styles.formFieldErrorMessage}>{errors.mobileno.message}</p>
                                                                    ) : null}
                                <input 
                                className={clsx(
                                    styles.formControl,
                                    styles.formField,
                                    errors.mobileno.dirty &&
                                    errors.mobileno.error &&
                                    styles.formFieldError
    
                                )} 
                                type="text"
                                name="mobileno" 
                                value={form.mobileno} 
                                onChange={updateField}
                                onBlur={onBlurField}
                                placeholder='mobileno'
                                />
                            </div>


                            {/* Mileage field */}
                            <div className="form-control">
                                {errors.mileage.dirty && errors.mileage.error ? (
                            <p className={styles.formFieldErrorMessage}>{errors.mileage.message}</p>
                                                                ) : null}
                            <input 
                            className={clsx(
                                styles.formControl,
                                styles.formField,
                                errors.mileage.dirty &&
                                errors.mileage.error &&
                                styles.formFieldError

                            )} 
                            type="text"
                             name="mileage" 
                             value={form.mileage} 
                             onChange={updateField}
                             onBlur={onBlurField}
                             placeholder='Mileage'/>

                            </div>

                            {/* Variant field */}
                            <div className="form-control">
                                    {errors.variant.dirty && errors.variant.error ? (
                            <p className={styles.formFieldErrorMessage}>{errors.variant.message}</p>
                                                                ) : null}
                            
                                <select className={clsx(
                                    styles.formControl,
                                    styles.formField,
                                    errors.variant.dirty &&
                                    errors.variant.error &&
                                    styles.formFieldError

                                )}
                                    aria-label=".form-select-lg example"
                                    onChange={updateField} onBlur={onBlurField} value={form.variant} name="variant">
                                        <option selected>Variant</option>
                                        <option value="figo">Figo</option>
                                        <option value="ecosport">Ecosport</option>
                                        <option value="territory edge">Territory Edge</option>
                                        <option value="everest">Everest</option>
                                        <option value="bronco">Bronco</option>
                                        <option value="ranger">Ranger</option>
                                        <option value="f150">F150</option>
                                        <option value="transit">Transit</option>
                                </select>
                            </div>


                            {/* Model field */}
                            <div className="form-control">
                                        {errors.model.dirty && errors.model.error ? (
                                <p className={styles.formFieldErrorMessage}>{errors.model.message}</p>
                                                            ) : null}
                                <input 
                                type="text"
                                name="model" 
                                value={form.model} 
                                onChange={updateField}
                                onBlur={onBlurField}
                                placeholder='Model (e.g., 2017 model)'/>
                            </div>

                            {/* Submit button */}
                            <div className='col-12 text-right'>
                                <button className='btn btn-ford-blue ford-font' type='submit'> Apply for valuation </button>
                            </div>
                    </form>
                </div>
        </>
    )
}


export default TradeIn;