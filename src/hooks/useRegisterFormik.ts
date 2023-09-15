import { useFormik } from 'formik'
import * as Yup from 'yup'

export const useRegisterFormik = () =>
  useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      // Handle form submission here, e.g., send the data to an API
      console.log('Form submitted with values:', values)
    },
  })
