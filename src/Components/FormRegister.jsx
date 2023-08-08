import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SignRedes from "./SignRedes";
import Api from "../Apis/Api";


const Card = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #fff;
    padding:  3rem;
    border-radius: 0.5rem;
    margin-top: -15%;
    h1{
        margin: 0;
    }   
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
    width: 50%;
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

const Inputs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const FormRegister = ({Active, setActive}) => {

    const { Register } = Api;

    const handleClick = () => {
        setActive(!Active);
      };
    return (
        <Formik
      initialValues={{
            email: '',
            password: '',
            username: '',
            phone: '', 
            firstname: '', 
            lastname: '', 
            city: '',
            street: '', 
      }}
      // validate and onSubmit...
        validate={(values) => {
            const requiredFields = ['email', 'password', 'username', 'phone', 'firstname', 'lastname', 'city', 'street'];
            const errors = {};
        
            requiredFields.forEach(field => {
                if (!values[field]) {
                    errors[field] = 'Required';
                }
            });
        
            return errors;
        }}

         //submit
         onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {                
                Register(values.email, values.username, values.password, values.firstname, values.lastname, values.city, values.street, values.phone);
                alert("Created User")
                setSubmitting(false);
            }, 400);
        }}
    >
        {({ isSubmitting }) => (
            <Card>
                <h1>Sign up</h1>
                <Inputs>
                    <ContentInput>
                        <label htmlFor="email">Email</label>
                        <Input type="email" name="email" placeholder="Email" />
                        <Error name="email" component="div" />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="password">Password</label>
                        <Input type="password" name="password" placeholder="Password" />
                        <Error name="password" component="div" />
                    </ContentInput>
                </Inputs>
                <Inputs>
                    <ContentInput>
                        <label htmlFor="username">Username</label>
                        <Input type="text" name="username" placeholder="Username" />
                        <Error name="username" component="div" />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="phone">Phone</label>
                        <Input type="text" name="phone" placeholder="Phone" />
                        <Error name="phone" component="div" />
                    </ContentInput>
                </Inputs>
                <Inputs>
                    <ContentInput>
                        <label htmlFor="firstname">Firstname</label>
                        <Input type="text" name="firstname" placeholder="Firstname" />
                        <Error name="firstname" component="div" />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="lastname">Lastname</label>
                        <Input type="text" name="lastname" placeholder="Lastname" />
                        <Error name="lastname" component="div" />
                    </ContentInput>
                </Inputs>
                <Inputs>
                    <ContentInput>
                        <label htmlFor="city">City</label>
                        <Input type="text" name="city" placeholder="City" />
                        <Error name="city" component="div" />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="street">Street</label>
                        <Input type="text" name="street" placeholder="Street" />
                        <Error name="street" component="div" />
                    </ContentInput>
                </Inputs>
                <BtnLogin type="submit" disabled={isSubmitting}>
                    Sign up
                </BtnLogin>
                <Resgitro>
                    <p>¿You have an account?</p>
                    <LinkRegistro onClick={handleClick}>Sign in</LinkRegistro>
                </Resgitro>
                <SignRedes/>
            </Card>
        )}
    </Formik>
    );
}

export default FormRegister;


     