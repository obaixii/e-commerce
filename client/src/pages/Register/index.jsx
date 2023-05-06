import { Form } from '../../components/index'
import { registerFields as register } from "../../form"

function Register() {
  return (
    <>
    <Form formType="Register" fields={register}/>
    </>
  )
}

export default Register