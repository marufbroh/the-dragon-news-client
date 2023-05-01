import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate()

    const location = useLocation();
    // console.log(location);

    const from = location.state?.from?.pathname || "/category/0"

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")

    const handleSignIn = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("")
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess("User Succesfully Logged")
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Container className='mx-auto w-25'>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't have an account <Link to={"/register"}>Register</Link>
                </Form.Text>
                <br />
                {
                    error ? <Form.Text className="text-danger">
                        {error}
                    </Form.Text> :
                        <Form.Text className="text-success">
                            {success}
                        </Form.Text>
                }
            </Form>
        </Container>
    );
};

export default Login;