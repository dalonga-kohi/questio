import Field from './features/Field'
import RegisterLinks from './features/RegisterLinks'
import Submit from './features/Submit'
import Heading from './features/Heading'
import { useRegisterFormik } from '../../hooks/useRegisterFormik'

const RegisterForm = () => {
  const registerFormik = useRegisterFormik()

  return (
    <form
      onSubmit={registerFormik.handleSubmit}
      className="h-screen sm:h-max pb-12 pt-24 sm:pt-12 px-8 sm:px-14 flex flex-col w-full max-w-3xl shadow rounded-lg divide-y dark:divide-gray-200 divide-gray-500 dark:bg-black bg-gray-300 md:rounded-xl"
    >
      <div className="h-full w-full flex flex-col">
        <Heading>Create an Account</Heading>

        <Field
          caption="email"
          title="Email"
          type="email"
          change={registerFormik.handleChange}
          blur={registerFormik.handleBlur}
          error={registerFormik.errors.email}
          touched={registerFormik.touched.email}
          value={registerFormik.values.email}
        />

        <span className="mt-6"></span>

        <Field
          caption="password"
          title="Password"
          type="password"
          change={registerFormik.handleChange}
          blur={registerFormik.handleBlur}
          error={registerFormik.errors.password}
          touched={registerFormik.touched.password}
          value={registerFormik.values.password}
        />

        <span className="mt-6"></span>

        <Field
          caption="passwordConfirmation"
          title="Confirm Password"
          type="password"
          change={registerFormik.handleChange}
          blur={registerFormik.handleBlur}
          error={registerFormik.errors.passwordConfirmation}
          touched={registerFormik.touched.passwordConfirmation}
          value={registerFormik.values.passwordConfirmation}
        />


        <Submit value="sign up" />
      </div>
      <RegisterLinks />
    </form>
  )
}

export default RegisterForm
