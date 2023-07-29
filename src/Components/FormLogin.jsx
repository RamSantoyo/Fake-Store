import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from 'react';
import FormRegister from "./FormRegister";
import SignRedes from "./SignRedes";

const Card = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #fff;
    padding: 1rem 5rem;
    margin-top: -70%;
    border-radius: 0.5rem;
`;

const ContentInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 0.5rem;
    font-size: 1rem;
`;

const Input = styled(Field)`
    display: block;
    padding: .6rem;
    border-radius: 1rem;
    border: 1px solid #ccc;
    font-size: 1.2rem;
`;

const Error = styled(ErrorMessage)`
    position: absolute;
    border-radius: 1rem;
    color: #ff4763;
    margin-top: -3rem;
    margin-left: 6rem;
`;

const BtnLogin = styled.button`
    width: 100%;
    padding: .9rem;
    margin-top: 1rem;
    border-radius: 1rem;
    background-color: var(--primary);
    color: #fff;
    font-weight: var(--grande);
    font-size: 1.3rem;
    border: none;
    cursor: pointer;
`;

const Resgitro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: .9rem;
    margin: 0;
    p{
        margin: 0;
        padding: 0;
    }
`;

const LinkRegistro = styled.p`
    color: var(--primary);
    text-decoration: underline;
    font-weight: var(--grande);
    font-size: 1rem;
    cursor: pointer;
`;

const FormLogin = () => {

    const [Active , setActive] = useState(true);

    const handleClick = () => {
        setActive(!Active);
      };

    if(Active === true){   
    return (
            <Formik
            //valores iniciales
                initialValues={{
                    email: '',
                    password: '',          
                }}
                //validaciones
                validate={(values) => {
                    const errors = {};
                    if (!values.email) errors.email = 'Required email!';
                    if (!values.password) errors.password = 'Required password!';
                    return errors;
                }}
                //submit
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <Card>
                        <h1>Sign in</h1>
                        <ContentInput>
                            <label htmlFor="email">Email</label>
                            <Input type="email" name="email" />
                            <Error name="email" component="div" />
                        </ContentInput>
                        <ContentInput>
                            <label htmlFor="password">Password</label>
                            <Input type="password" name="password" />
                            <Error name="password" component="div" />
                        </ContentInput>
                        <BtnLogin type="submit" disabled={isSubmitting}>
                            Login
                        </BtnLogin>
                        <Resgitro>
                                <p>¿Not have an account?</p>
                                <LinkRegistro onClick={handleClick}>Sign up</LinkRegistro>
                        </Resgitro>
                        <SignRedes/>
                    </Card>
                )}        
            </Formik>
        );
    }
    else{
        return(
            <FormRegister Active={Active} setActive={setActive}/>
        );
    }
}

export default FormLogin;
    