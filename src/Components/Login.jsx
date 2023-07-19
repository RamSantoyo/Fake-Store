import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
`;

const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Card = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #fff;
    padding: 3rem;
    border-radius: 0.5rem;
`;

const ContentInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;

const FormLogin = () => {
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
                if (!values.email) errors.email = 'Required';
                if (!values.password) errors.password = 'Required';
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
                    <h1>Login</h1>
                    <ContentInput>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </ContentInput>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Card>
            )}            
        </Formik>
    );
}

const Login = () => {
    return (
        <Modal>
            <ModalContent>                
                <FormLogin/>
            </ModalContent>
        </Modal>
    );
}

export default Login;


