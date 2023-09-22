import Field from './features/Field'
import LoginLinks from './features/LoginLinks'
import Submit from './features/Submit'
import Heading from './features/Heading'
import { useLoginFormik } from '../../hooks/useLoginFormik'
import Form from './features/Form'
import Forgot from './features/Forgot'
const LoginForm = () => {
  const loginFormik = useLoginFormik()

  return (
    <Form submit={loginFormik.handleSubmit}>
      <div className="h-full w-full flex flex-col">
        <Heading>Welcome Back!</Heading>

        <Field
          caption="email"
          title="email"
          type="email"
          change={loginFormik.handleChange}
          blur={loginFormik.handleBlur}
          error={loginFormik.errors.email}
          touched={loginFormik.touched.email}
          value={loginFormik.values.email}
        />

        <span className="mt-4"></span>

        <Field
          caption="password"
          title="password"
          type="password"
          change={loginFormik.handleChange}
          blur={loginFormik.handleBlur}
          error={loginFormik.errors.password}
          touched={loginFormik.touched.password}
          value={loginFormik.values.password}
        />
        <Forgot />
        <Submit value="sign in to quest" />
      <LoginLinks />
      </div>
    </Form>
  )
}

export default LoginForm
