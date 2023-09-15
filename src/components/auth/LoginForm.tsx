import { useFormik } from 'formik'
import * as Yup from 'yup'
import Field from './features/Field'
import LoginLinks from './features/LoginLinks'
import Submit from './features/Submit'
import Heading from './features/Heading'

const LoginForm = () => {
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
      className="h-screen sm:h-max pb-12 pt-24 sm:pt-12 px-8 sm:px-14 flex flex-col w-full max-w-3xl shadow rounded-lg divide-y dark:divide-gray-200 divide-gray-500 dark:bg-black bg-gray-300 md:rounded-xl"
    >
      <div className="h-full w-full flex flex-col">
        <Heading>Welcome Back!</Heading>

        <Field caption="email" change={formik.handleChange} blur={formik.handleBlur} error={formik.errors.email} touched={formik.touched.email} value={formik.values.email} />

        <span className='mt-6'></span>

        <Field caption="password" change={formik.handleChange} blur={formik.handleBlur} error={formik.errors.password} touched={formik.touched.password} value={formik.values.password} />

        <Submit value='sign in'/>
      </div>
      <LoginLinks />
    </form>
  )
}

export default LoginForm
