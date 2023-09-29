import Field from './features/Field'
import RegisterLinks from './features/RegisterLinks'
import Submit from './features/Submit'
import Heading from './features/Heading'
import { useRegisterFormik } from '../../hooks/useRegisterFormik'
import Form from './features/Form'

const RegisterForm = () => {
  const registerFormik = useRegisterFormik()

  return (
    <Form submit={registerFormik.handleSubmit}>
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
    </Form>
  )
}

export default RegisterForm
