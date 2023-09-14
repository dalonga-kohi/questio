import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here, e.g., send the data to an API
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <section className=' flex flex-col  items-center justify-between h-96 mt-36'>
      <p className='text-5xl -mb-15'>Login</p>
      <form onSubmit={formik.handleSubmit}>
        <section className="form-group flex flex-col items-center my-12">
          <label htmlFor="email" className='text-xl mb-2'>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className='dark:bg-black-light bg-white-light rounded py-1 w-52 px-2'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error text-center dark:text-red-500 text-red-600">{formik.errors.email}</div>
          ) : null}
        </section>
        <section className="form-group flex flex-col items-center">
          <label htmlFor="password" className='text-xl mb-2'>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className='dark:bg-black-light bg-white-light rounded py-1 w-52 px-2'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error text-center dark:text-red-500 text-red-600">{formik.errors.password}</div>
          ) : null}
        </section>
        <section className="form-group flex flex-col items-center">
        <button type="submit" className=' w-52 py-2 m-10 rounded dark:bg-black-light bg-white hover:border-green-500 dark:hover:border-accent border-2 transition-colors
        dark:border-white-light border-slate-700 outline-none max-w-2xl dark:active:bg-black-darker active:bg-white-light'>Login</button>
        </section>
        
      </form>
    </section>
  );
};

export default LoginForm;
