import Field from './features/Field'
import LoginLinks from './features/LoginLinks'
import Submit from './features/Submit'
import Heading from './features/Heading'
import { useLoginFormik } from '../../hooks/useLoginFormik'
const LoginForm = () => {
  const loginFormik = useLoginFormik()

  return (
    <form
      onSubmit={loginFormik.handleSubmit}
      className="h-screen sm:h-max pb-12 pt-24 sm:pt-12 px-8 sm:px-14 flex flex-col w-full max-w-3xl shadow rounded-lg divide-y dark:divide-gray-200 divide-gray-500 dark:bg-black bg-gray-300 md:rounded-xl"
    >
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

        <span className="mt-6"></span>

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

        <Submit value="sign in" />
      </div>
      <LoginLinks />
    </form>
  )
}

export default LoginForm
