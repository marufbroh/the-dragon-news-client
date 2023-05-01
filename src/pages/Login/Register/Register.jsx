import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [accepted, setAccepted] = useState(false)
    const handleRegister = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("")
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setSuccess("User Succesfully Created")
                form.reset()
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    };

    return (
        <Container className='mx-auto w-25'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter Name" />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label="Accept Trams and conditions" />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already have an account <Link to={"/login"}>Login</Link>
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

export default Register;