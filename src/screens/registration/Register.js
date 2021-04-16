import React, {useState} from 'react'
import FormScreen from './formScreen'

const Register = () =>{
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const onChange = ({name, value}) =>{
    setForm({...form, [name]:value})
  }

  const onSubmit = () =>{

    alert('hola')

  }

  return(
    <FormScreen onChange={onChange} onSubmit={onSubmit} form={form} errors={errors} />
  )
}

export default Register