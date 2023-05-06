import { Link } from "react-router-dom"
import { Container, Wrapper, Title, FormContainer, Input, Agreement, Button, Alt } from "./styled"

function Form({ formType, fields }) {
    return (
        <Container>
            <Wrapper>
                <Title>{formType === "Register" ? "Create an Account" : "Sign In"}</Title>
                <FormContainer>
                    {/**** For Register Page ****/}
                    {
                        formType === "Register" && fields.map((field, index) => <Input placeholder={field.label} type={field.type} key={index} />)

                    }
                    {
                        formType === "Register" && <Agreement>
                            By Creating an account, I consent to the processing of my personal data in accordance with <b>PRIVACY POLICY</b>
                        </Agreement>
                    }
                    {
                        formType === "Register" && <Button>CREATE</Button>
                    }
                    {/**** For Login Page ****/}
                    {
                        formType === "Login" && fields.map((field, index) => <Input placeholder={field.label} type={field.type} key={index} />)
                    }

                    {
                        formType === "Login" && <Button>SIGN IN</Button>
                    }
                </FormContainer>

                {/**** For Register Page ****/}
                {
                    formType === "Register" &&
                    <Alt> Already have an Account? 
                        <Link to="/login"> SIGN IN</Link>
                    </Alt>
                }

                {/**** For Login Page ****/}
                {
                    formType === "Login" &&
                    <Alt>Don't have an Account?<br />
                        <Link to="/register">Register Now</Link>
                    </Alt>
                }

            </Wrapper>
        </Container>
    )
}

export default Form