import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import finance1 from '../../assets/images/bronco.jpg';
import broncoMob from '../../assets/images/bronco-mob.jpg';
import financecar from '../../assets/images/t-edge.jpg';
import processcar from '../../assets/images/f-edge.jpg';
import '../finance/finance.css';

import axios from 'axios';
import clsx from 'clsx';

import { useLoginForm } from '../finance/validation/validationHooks';
import styles from '../../../src/App.css';

const Finance = () => {
  window.scrollTo(0, 0);

  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState('');

  function handleChange(event) {
    setVariant(event.target.value);
  }

  const [form, setForm] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    mobileno: '',
    variant: null,
    employment: null,
    organization: '',
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ford-font ford-blue-text">
            <h4 className="ford-font ford-blue-text">
              Getting started with vehicle finance
            </h4>
            <h6 className="ford-font ford-grey-text">
              {' '}
              Provide your details below to start the process and we will
              contact you on next steps{' '}
            </h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-12 grey-strip-height ford-grey"></div>

          <div className="col-12">
            <div className="p-5 text-center">
              <form className="financeForm" onSubmit={onSubmitForm}>
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

                {/* Employment field */}

                <div className="form-control">
                  {errors.employment.dirty && errors.employment.error ? (
                    <p className={styles.formFieldErrorMessage}>
                      {errors.employment.message}
                    </p>
                  ) : null}

                  <select
                    className={clsx(
                      styles.formControl,
                      styles.formField,
                      errors.employment.dirty &&
                        errors.employment.error &&
                        styles.formFieldError
                    )}
                    aria-label=".form-select-lg example"
                    onChange={updateField}
                    onBlur={onBlurField}
                    value={form.employment}
                    name="employment"
                  >
                    <option selected>Employment Status</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="employed">Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="between-jobs">Between Jobs</option>
                  </select>
                </div>

                {/* Organization field */}
                <div className="form-control">
                  {errors.organization.dirty && errors.organization.error ? (
                    <p className={styles.formFieldErrorMessage}>
                      {errors.organization.message}
                    </p>
                  ) : null}

                  <input
                    className={clsx(
                      styles.formField,
                      errors.organization.dirty &&
                        errors.organization.error &&
                        styles.formFieldError
                    )}
                    type="text"
                    name="organization"
                    value={form.organization}
                    onChange={updateField}
                    onBlur={onBlurField}
                    placeholder="Organization name"
                  />
                </div>

                <div className="col-12 text-right">
                  <button className="btn btn-ford-blue">Submit request</button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-ford-blue" variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row mobile-margin-clearance-banner">
        <div className="col-12 d-none d-sm-block">
          <img src={finance1} alt="" width="100%" />
        </div>
        <div className="col-12 d-block d-sm-none">
          <img src={broncoMob} alt="" width="100%" />
        </div>
        <div className="col-12 track text-center p-5">
          <h3 className="ford-font ford-blue-text light-font-weight">
            Finance Tracks
          </h3>
          <p className="ford-font ford-grey-text light-font-weight">
            We offer you value-added service to assist in getting your new Ford
            without a 100% cash payment
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 finance-padding">
          <div className="row container-fluid">
            <div className="col-12 col-md-4 carKey">
              <i class="fa-solid fa-key"></i>
            </div>
            <div className="col-12 col-md-8 swapHeading">
              <h4 className="ford-font ford-blue-text">Car Lease Scheme</h4>
              <p className="ford-font ford-grey-text light-font-weight">
                Apply for qualification for a car lease requiring a minimum of
                10% down-payment and security deposit with payment spread of up
                to 3years with our finance partners
              </p>

              <a href="#">
                Read More <i class="fa-solid fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 finance-padding">
          <div className="row container-fluid">
            <div className="col-12 col-md-4 carKey">
              <i class="fa-solid fa-arrows-rotate"></i>
            </div>
            <div className="col-12 col-md-8 swapHeading">
              <h4 className="ford-font ford-blue-text">Car Swap Service</h4>
              <p className="ford-font ford-grey-text light-font-weight">
                Through our vehicle valuation unit, you can submit specific
                details about your current Ford to find out if you qualify for a
                trade-in finance..
              </p>

              <a href="#">
                Read More <i class="fa-solid fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <img src={financecar} alt="" width="100%" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 track text-center p-5">
          <h3 className="ford-font ford-blue-text light-font-weight">
            Car Lease Scheme
          </h3>
          <p className="ford-font ford-grey-text light-font-weight">
            Make a 10% minimum deposit and security deposit to drive away with
            any Ford vehicle today.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row container-fluid">
          <div className="col-12 equity">
            <h4 className="ford-font ford-blue-text ">
              Build Equity With Each Payment
            </h4>
            <p className="ford-font ford-grey-text light-font-weight">
              With terms ranging from 12 - 36 months, you can choose the payment
              schedule that best fits your needs. Equityis built with each
              payment, lowering the purchase price your next Ford.
            </p>
          </div>
          <div className="col-12 equity">
            <h4 className="ford-font ford-blue-text light-font-weight">
              The Benefits
            </h4>
            <ul>
              <li className="ford-font ford-grey-text light-font-weight">
                Drive away with car immediately
              </li>
              <li className="ford-font ford-grey-text light-font-weight">
                Predictable monthly rates
              </li>
              <li className="ford-font ford-grey-text light-font-weight">
                Build equity with each payment
              </li>
              <li className="ford-font ford-grey-text light-font-weight">
                Enjoy owner benefits from day one
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="startProcess text-center m-5">
        <button onClick={handleShow} className="btn btn-ford-blue ford-font">
          Start Application Process
        </button>
      </div>

      <div className="row">
        <div className="col-12">
          <img src={processcar} alt="" width="100%" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 track text-center p-5">
          <h3 className="ford-font ford-blue-text light-font-weight">
            Car Swap Service
          </h3>
          <p className="ford-font ford-grey-text light-font-weight">
            Trade-in your vehicle and pay only the net cost minus your cars
            value
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row container-fluid">
          <div className="col-12 equity">
            <h4 className="ford-font ford-blue-text">
              Commercialize yours asset with Ford
            </h4>
            <p className="ford-font ford-grey-text light-font-weight">
              Use your current Ford vehicle as leverage to purchase your brand
              new Ford today. Simply provide information about your current Ford
              to our valuation team to get started
            </p>
          </div>
          <div className="col-12 equity">
            <h4 className="ford-font ford-blue-text">The Benefits</h4>
            <ul>
              <li className="ford-font ford-grey-text light-font-weight">
                Save 20% - 50% on your purchase
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="startProcess text-center m-5">
        <Link to="/trade-in">
          <button className="btn btn-ford-blue ford-font">
            Submit Valuation Request
          </button>
        </Link>
      </div>
    </>
  );
};

export default Finance;
