/* eslint-disable no-use-before-define */
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import useFormValidation from 'hooks/Form/useFormValidation';
import {signup} from 'api/auth'
import {UserContext} from 'context/user'
import './styles.scss';

const INITAIL_STATE = {
  email: '',
  password: '',
};

function SignUp() {
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
    signup(values, setUser);
  }

  return (
    <div className='signup_banner'>
      <div className='main_subtitle'>
        SIGN UP
      </div>
      <form autoComplete='off' className='signup_form' onSubmit={handleSubmit}>
        <div className='input_banner'>
          <input
            placeholder='Full Name'
            name='name'
            type='text'
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors?.name && 'error-input'}
            autoComplete='none'
          />
          {errors?.name && <p className='error-text'>{errors?.name}</p>}
        </div>
        <div className='input_banner'>
          <input
            placeholder='Email Address'
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
          <input
            placeholder='Password'
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

        <div className='input_banner'>
          <input
            placeholder='Confirm Password'
            name='confirmPassword'
            type='password'
            value={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.confirmPassword && 'error-input'}
            autoComplete='off'
          />
          {errors?.confirmPassword && <p className='error-text'>{errors?.confirmPassword}</p>}
        </div>

        <div className='btn_banner'>
          <button disabled={isSubmitting} type='submit'>
            Join
          </button>
        </div>
        <p className='have_account'>
          Already on Our Page?{' '}
          <Link to='/accounts/signin' className='sign_in_link'>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
