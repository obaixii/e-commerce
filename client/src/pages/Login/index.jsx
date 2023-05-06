import { Form } from '../../components/index'
import { loginFields as login } from "../../form"

function Login() {
    return (
        <>
            <Form formType="Login" fields={login} />
        </>
    )
}

export default Login