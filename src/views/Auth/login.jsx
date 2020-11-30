/* eslint-disable no-use-before-define */
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import useFormValidation from 'hooks/Form/useFormValidation';
import {signin} from 'api/auth'
import {UserContext} from 'context/user'

import './styles.scss';

const INITAIL_STATE = {
  email: '',
  password: '',
};

function SignIn() {
  const { setUser } = useContext(UserContext);
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
  } = useFormValidation(INITAIL_STATE, authenticateUser);

  function authenticateUser() {
    signin(values, setUser)
  }

  return (
    <div className='signin_banner'>
      <div className='main_subtitle'>
        SignIn
      </div>
      <form autoComplete='off' className='signup_form' onSubmit={handleSubmit}>
        <div className='input_banner'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='email'
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.email && 'error-input'}
            autoComplete='none'
          />
          {errors.email && <p className='error-text'>{errors.email}</p>}
        </div>
        <div className='input_banner'>
          <label htmlFor='password'>Password (6 or more characters)</label>
          <input
            name='password'
            type='password'
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.password && 'error-input'}
            autoComplete='off'
          />
          {errors.password && <p className='error-text'>{errors.password}</p>}
        </div>

        <div className='btn_banner'>
          <button disabled={isSubmitting} type='submit'>
            Login
          </button>
        </div>
        <p className='have_account'>
          Don&apos;t have an account?{' '}
          <Link to='/accounts/signup' className='sign_in_link'>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
