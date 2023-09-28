import { useFormik } from 'formik'
import * as Yup from 'yup'
import { LoginResponse, axiosPost } from '../lib/axios'

export const useLoginFormik = () =>
  useFormik({
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
      axiosPost<LoginResponse>('login', values)
        .then((res) => console.log(res.response))
        .catch((err:Error) => {
          if (!err.message) return
          console.error(err.message)
        })
    },
  })

  interface Error{
    message?: string
  }
