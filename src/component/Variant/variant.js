import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import edgeLanding from '../../assets/images/edge-landing.jpg';
import edgeQuote from '../../assets/images/edge-quote.jpg';
import edgeRed from '../../assets/images/edge-red.png';
import edgeWhite from '../../assets/images/edge-white.png';
import edgeCare from '../../assets/images/care.jpg';
import edgeControl from '../../assets/images/control.jpg';
import edgeBrochure from '../../assets/images/edge-brochure.jpg';
import figo from '../../assets/images/figo.png';

import styles from '../../../src/App.css';
import { useLoginForm } from '../Variant/validation/validationHooks';
import axios from 'axios';
import clsx from 'clsx';

const Variants = () => {
  {
    /*window.scrollTo(0, 0)*/
  }

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobileno: '',
    mailingaddress: '',
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
      url: 'https://charisbrain1.herokuapp.com/charis/fordwebsiteservices/mail/quotation',
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

  return (
    <>
      <div className="row ford-blue-bg navigation-clearance mobile-margin-clearance-banner full-width mROff">
        <div className="variant col-12 col-md-3 text-center ford-royal-blue-bg">
          <h5 className="mOff variant-text"> Explore Edge </h5>
        </div>
        <div className="col-12 col-md-9 pOff">
          <ul
            class="nav nav-tabs variant-menu-padding full-width variant-menu-height ford-font"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item quarter-length" role="presentation">
              <button
                class="nav-link active variant-menu-height full-width variant variant-button"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#overview"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Overview
              </button>
            </li>
            <li class="nav-item quarter-length" role="presentation">
              <button
                class="nav-link variant-menu-height full-width variant variant-button"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#model"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                {' '}
                Specifications{' '}
              </button>
            </li>
            <li class="nav-item quarter-length" role="presentation">
              <button
                class="nav-link variant-menu-height full-width variant variant-button"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#gallery"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Gallery
              </button>
            </li>
            <li class="nav-item quarter-length" role="presentation">
              <button
                class="nav-link variant-menu-height full-width variant variant-button"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#brochure"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Brochure
              </button>
            </li>
            <li class="nav-item quarter-length" role="presentation">
              <button
                class="nav-link variant-menu-height full-width variant variant-button"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#quote"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Request quote
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="row ford-font full-width mOff">
        <div class="tab-content pOff" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="overview"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row full-width mOff">
              <div className="col-12 pOff">
                <img src={edgeLanding} className="pOff img-fluid" />
              </div>
            </div>

            <div className="row white-bg ford-font full-width mOff ">
              <div className="col-12 col-md-5 variant-specs-box variant-specs-border">
                <h6 className="ford-blue-text"> Price Range </h6>
                <h3 className="ford-royal-blue-text">
                  {' '}
                  N9,000,000 - 12,000,0000{' '}
                </h3>
              </div>
              <div className="col-12 col-md-2 variant-specs-box variant-specs-border">
                <h6 className="ford-blue-text"> Transmission </h6>
                <h3 className="ford-royal-blue-text"> Manual</h3>
              </div>
              <div className="col-12 col-md-2 variant-specs-box variant-specs-border">
                <h6 className="ford-blue-text"> Travel Size </h6>
                <h3 className="ford-royal-blue-text"> 5 </h3>
              </div>
              <div className="col-12 col-md-2 variant-specs-box">
                <h6 className="ford-blue-text"> Fuel Economy </h6>
                <h3 className="ford-royal-blue-text"> 4.3 - 5.2 3.3 </h3>
              </div>
            </div>

            <div className="row navigation-clearance-plus ford-font text-center full-width mROff">
              <img
                src={edgeWhite}
                className="pOff leftHighwayPosition img-fluid"
              />
              <img
                src={edgeRed}
                className="pOff rightHighwayPosition img-fluid"
              />
              <div className="col-12 col-md-6 mx-auto">
                <h1 className="ford-blue-text light-font-weight">
                  {' '}
                  Travel Life On The Edge{' '}
                </h1>
                <h6 className="ford-grey-text light-font-weight">
                  Enjoy the thrill of living life on the edge without the risk
                  of falling off with the all new Ford Edge. Built for the
                  moment with a lasting finish the all new Ford Edge is what you
                  need to add a spike of excitement into your everyday drive.
                </h6>
                <div className="col-12 text-center standard-margin-bottom">
                  <button className="btn btn-ford-blue"> Visit Gallery </button>
                </div>
                <div className="col-12 text-center">
                  <Link class="nav-link nav-font-size" to="/test-drive">
                    <button className="btn btn-ford-blue"> Test Drive </button>
                  </Link>
                </div>
              </div>

              <div className="col-12 col-md-9 mx-auto navigation-clearance-plus">
                <h1 className="ford-blue-text light-font-weight">
                  {' '}
                  Carefree but in Control{' '}
                </h1>
                <h6 className="ford-grey-text light-font-weight">
                  Let the child in you take over with the all new Edge from Ford
                </h6>
              </div>

              <div className="col-12">
                <img src={edgeCare} className="pOff img-fluid" />
              </div>
              <div className="col-12">
                <img src={edgeControl} className="pOff img-fluid" />
              </div>
            </div>

            <div className="row navigation-clearance-plus text-center full-width mOff">
              <div className="col-12 ">
                <h3 className="ford-blue-font light-font-weight">
                  {' '}
                  You might also like...{' '}
                </h3>
              </div>

              <div className="col-12 col-md-6 navigation-clearance">
                <figure>
                  <img src={figo} className="pOff img-fluid" width="70%" />
                  <figcaption className="navigation-clearance-democratic-banner">
                    <button className="btn btn-ford-blue"> Overview </button>
                  </figcaption>
                </figure>
              </div>

              <div className="col-12 col-md-6 navigation-clearance">
                <figure>
                  <img src={figo} className="pOff img-fluid" width="70%" />
                  <figcaption className="navigation-clearance-democratic-banner">
                    <button className="btn btn-ford-blue"> Overview </button>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="models"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <img src={edgeLanding} className="pOff img-fluid" />
          </div>

          <div
            class="tab-pane fade navigation-clearance"
            id="gallery"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row full-width mOff">
              <div className="col-12 standard-text-padding-alt ford-grey text-center">
                <h1 className="ford-font ford-grey-text light-font-weight">
                  {' '}
                  PHOTO GALLERY{' '}
                </h1>
                <h6 className="ford-font ford-grey-text light-font-weight">
                  {' '}
                  Provide details to download the official brochure right now!{' '}
                </h6>
              </div>

              <div className="col-12 col-md-4 pOff">
                <img
                  src={edgeCare}
                  className="pOff four full-width img-fluid"
                />
              </div>
              <div className="col-12 col-md-4 pOff">
                <img
                  src={edgeControl}
                  className="pOff four full-width img-fluid"
                />
              </div>
              <div className="col-12 col-md-4 pOff">
                <img
                  src={edgeCare}
                  className="pOff four full-width img-fluid"
                />
              </div>
              <div className="col-12 col-md-4 pOff">
                <img
                  src={edgeControl}
                  className="pOff four full-width img-fluid"
                />
              </div>
              <div className="col-12 col-md-4 pOff">
                <img
                  src={edgeCare}
                  className="pOff four full-width img-fluid"
                />
              </div>
              <div className="col-12 col-md-4 pOff">
                <img
                  src={edgeControl}
                  className="pOff four full-width img-fluid"
                />
              </div>
              <div className="col-12 col-md-4 pOff">
                <img
                  src={edgeCare}
                  className="pOff four full-width img-fluid"
                />
              </div>
              <div className="col-12 col-md-4 pOff">
                <img
                  src={edgeControl}
                  className="pOff four full-width img-fluid"
                />
              </div>
              <div className="col-12 col-md-4 pOff">
                <img
                  src={edgeCare}
                  className="pOff four full-width img-fluid"
                />
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="brochure"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="row mOff full-width">
              <div className="col-12 pOff mOff">
                <img src={edgeBrochure} className="pOff img-fluid" />
              </div>
              <div className="col-12 standard-text-padding-alt ford-grey text-center">
                <h3 className="ford-font ford-grey-text light-font-weight">
                  {' '}
                  Need more information on your new Ford Edge ?{' '}
                </h3>
                <h6 className="ford-font ford-grey-text light-font-weight">
                  {' '}
                  Provide details to download the official brochure right now!{' '}
                </h6>
              </div>

              <div className="col-12">
                <div className="p-5 text-center">
                  <form className="col-12 col-6 mx-auto">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First name"
                    />

                    <input
                      className="form-control"
                      type="text"
                      placeholder="Surname"
                    />

                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                    />

                    <input
                      className="form-control"
                      type="text"
                      placeholder="Mobile No"
                    />

                    <div className="col-12 text-right">
                      <button className="btn btn-ford-blue">
                        {' '}
                        Download Brochure{' '}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="quote"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="row full-width mOff">
              <div className="col-12 mOff pOff">
                <img src={edgeQuote} className="pOff img-fluid" />
              </div>
              <div className="col-12 standard-text-padding-alt ford-grey text-center">
                <h3 className="ford-font ford-grey-text light-font-weight">
                  {' '}
                  Get a price quote for your new Ford Edge{' '}
                </h3>
                <h6 className="ford-font ford-grey-text light-font-weight">
                  {' '}
                  Specify details as they should indicated on official Quotation{' '}
                </h6>
              </div>

              <div className="col-12">
                <div className="p-5 text-center">
                  <form className="mx-auto" onSubmit={onSubmitForm}>
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

                    {/* mailing field*/}
                    <div className="form-control">
                      {errors.mailingaddress.dirty &&
                      errors.mailingaddress.error ? (
                        <p className={styles.formFieldErrorMessage}>
                          {errors.mailingaddress.message}
                        </p>
                      ) : null}

                      <input
                        className={clsx(
                          styles.formControl,
                          styles.formField,
                          errors.mailingaddress.dirty &&
                            errors.mailingaddress.error &&
                            styles.formFieldError
                        )}
                        type="text"
                        name="mailingaddress"
                        value={form.mailingaddress}
                        onChange={updateField}
                        onBlur={onBlurField}
                        placeholder="Mailing address"
                      />
                    </div>

                    <div className="col-12 text-right">
                      <button className="btn btn-ford-blue" type="submit">
                        {' '}
                        Request Quote{' '}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Variants;
