import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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
      console.log('Form submitted with values:', values)
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="h-full py-20 px-8 sm:px-14 flex flex-col w-full sm:w-10/12 lg:w-8/12 shadow-md dark:bg-black bg-gray-300 md:rounded-xl"
    >
      <h1 className="text-5xl mb-10 font-semibold">SIGN IN</h1>
      <label htmlFor="email" className="text-md mb-1">
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        className="input rounded w-full text-xl"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-center dark:text-red-500 text-red-600">
          {formik.errors.email}
        </div>
      ) : null}
      <label htmlFor="password" className="text-md mb-1 mt-4">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="input rounded w-full text-xl"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="text-center dark:text-red-500 text-red-600">
          {formik.errors.password}
        </div>
      ) : null}
      <span className="w-full flex justify-center">
        <input
          type="submit"
          value="sign in"
          className="input rounded-xl py-2.5 w-full sm:max-w-md mt-12 focus:border-gray-600 dark:focus:border-gray-100 focus:border-2 uppercase dark:bg-accent bg-green-500 dark:text-black-darker border-0 shadow-sm font-medium cursor-pointer text-xl"
        />
      </span>
    </form>
  )
}

export default LoginForm
