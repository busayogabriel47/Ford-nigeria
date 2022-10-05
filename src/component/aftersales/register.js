import React, { useState, useEffect, Component } from 'react';
import registerBanner from '../../assets/images/register-banner.jpg';
import $ from 'jquery';
import axios from 'axios';

import clsx from 'clsx';

import { useLoginForm } from '../aftersales/validation/validationHooks';
import styles from '../../../src/App.css';

const Register = () => {
  const [variant, setVariant] = useState('');

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobileno: '',
    variant: null,
    year: null,
    vin: '',
  });

  const { errors, validateForm, onBlurField } = useLoginForm(form);

  const updateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };

    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });

    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));

    await axios({
      method: 'post',
      url: 'https://charisbrain1.herokuapp.com/charis/fordwebsiteservices/mail/finance',
      data: form,

      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  function handleChange(event) {
    setVariant(event.target.value);
  }

  async function handleVariantChange(event) {
    let selectedVariant = $('.variantType').val();

    if (selectedVariant === 'others') {
      $('.variantAlt').fadeIn('slow');
    } else {
      $('.variantAlt').fadeOut('fast');
    }
  }

  return (
    <>
      <div className="col-12 grey-strip-height ford-grey navigation-clearance mobile-margin-clearance"></div>
      <div className="row ford-font full-width mROff">
        <img src={registerBanner} className="pOff" />
      </div>

      <div className="row ford-font full-width navigation-clearance-democratic-banner mROff">
        <div className="col-12 col-md-8 mx-auto standard-margin-bottom text-center">
          <h4 className="ford-royal-blue-text">
            {' '}
            By registering your Ford vehicle officially, you get access to
            limited time discounts, invitation to community events and freebies
            from Ford.{' '}
          </h4>
          <h6 className="ford-royal-blue-text light-font-weight">
            {' '}
            Provide basic details about your vehicle and a service advisor will
            contact after verification{' '}
          </h6>
        </div>

        <div className="col-12">
          <div className="p-5 text-center">
            <form className="financeForm mx-auto" onSubmit={onSubmitForm}>
              {/* First name field*/}
              <div className="form-control">
                {errors.firstname.dirty && errors.firstname.error ? (
                  <p className={styles.formFieldErrorMessage}>
                    {errors.firstname.message}
                  </p>
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
                  placeholder="firstname"
                />
              </div>

              {/* lastname field*/}
              <div className="form-control">
                {errors.lastname.dirty && errors.lastname.error ? (
                  <p className={styles.formFieldErrorMessage}>
                    {errors.lastname.message}
                  </p>
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
                  placeholder="lastname"
                />
              </div>

              {/* email field*/}
              <div className="form-control">
                {errors.email.dirty && errors.email.error ? (
                  <p className={styles.formFieldErrorMessage}>
                    {errors.email.message}
                  </p>
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
                  placeholder="Email"
                />
              </div>

              {/* mobileno field*/}
              <div className="form-control">
                {errors.mobileno.dirty && errors.mobileno.error ? (
                  <p className={styles.formFieldErrorMessage}>
                    {errors.mobileno.message}
                  </p>
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
                  placeholder="mobileno"
                />
              </div>

              {/* Variant field */}
              <div className="form-control">
                {errors.variant.dirty && errors.variant.error ? (
                  <p className={styles.formFieldErrorMessage}>
                    {errors.variant.message}
                  </p>
                ) : null}

                <select
                  className={clsx(
                    styles.formControl,
                    styles.formField,
                    errors.variant.dirty &&
                      errors.variant.error &&
                      styles.formFieldError
                  )}
                  aria-label=".form-select-lg example"
                  onChange={updateField}
                  onBlur={onBlurField}
                  value={form.variant}
                  name="variant"
                >
                  <option selected>Select a Variant</option>
                  <option value="figo">Figo</option>
                  <option value="ecosport">Ecosport</option>
                  <option value="territory edge">Territory Edge</option>
                  <option value="everest">Everest</option>
                  <option value="bronco">Bronco</option>
                  <option value="ranger">Ranger</option>
                  <option value="f150">F150</option>
                  <option value="transit">Explorer</option>
                  <option value="transit">Fusion</option>
                </select>
              </div>

              {/* Model field */}

              <div className="form-control">
                {errors.year.dirty && errors.year.error ? (
                  <p className={styles.formFieldErrorMessage}>
                    {errors.year.message}
                  </p>
                ) : null}

                <select
                  className={clsx(
                    styles.formControl,
                    styles.formField,
                    errors.year.dirty &&
                      errors.year.error &&
                      styles.formFieldError
                  )}
                  aria-label=".form-select-lg example"
                  onChange={updateField}
                  onBlur={onBlurField}
                  value={form.year}
                  name="year"
                >
                  <option selected>Select a Model Year </option>
                  <option value="1"> 2022 </option>
                  <option value="2"> 2021 </option>
                  <option value="3"> 2020 </option>
                  <option value="4"> 2019 </option>
                  <option value="1"> 2018 </option>
                  <option value="2"> 2017 </option>
                  <option value="3"> 2016 </option>
                  <option value="4"> 2015 </option>
                  <option value="1"> 2014 </option>
                  <option value="2"> 2013 </option>
                  <option value="3"> 2012 </option>
                  <option value="4"> 2011 </option>
                  <option value="3"> 2010 </option>
                  <option value="4"> 2009 </option>
                  <option value="1"> 2008 </option>
                </select>
              </div>

              {/* VIN field*/}
              <div className="form-control">
                {errors.mobileno.dirty && errors.vin.error ? (
                  <p className={styles.formFieldErrorMessage}>
                    {errors.vin.message}
                  </p>
                ) : null}

                <input
                  className={clsx(
                    styles.formControl,
                    styles.formField,
                    errors.vin.dirty &&
                      errors.vin.error &&
                      styles.formFieldError
                  )}
                  type="text"
                  name="vin"
                  value={form.vin}
                  onChange={updateField}
                  onBlur={onBlurField}
                  placeholder="VIN"
                />
              </div>

              <div className="col-12 text-right">
                <button className="btn btn-ford-blue">Submit request</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
