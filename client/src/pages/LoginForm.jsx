import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { loginUser } from '../utils/API';
import Auth from '../utils/Auth';

const LoginForm = () => {
  const [ userFormData, setUserFormData ] = useState({ email: '', password: '' });
  const [ validated, setValidated ] = useState(false);
  const [ showAlert, setShowAlert ] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData)
    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const data = await response.json()
      console.log(data)

      const { token, user } = data;
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>    
      <div className="formPageContainer">
        <div className="formPageCard">
          <div className="formContainer">
            <Form noValidate validated={validated} onSubmit={handleFormSubmit} className="formPageContainer">
              <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your login credentials!
              </Alert>
              <Form.Group>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Your email'
                  name='email'
                  onChange={handleInputChange}
                  value={userFormData.email}
                  required
                  className="formInput"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Your password'
                  name='password'
                  onChange={handleInputChange}
                  value={userFormData.password}
                  required
                  className="formInput"
                />
              </Form.Group>
              <Button className="formBtn"
                disabled={!(userFormData.email && userFormData.password)}
                type='submit'
                variant='success'>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;