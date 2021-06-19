import * as React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import FormControl from './FormControl';
import { validate } from '../utils/utils';

function Registration() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [errorMessages, setErrorMessages] = React.useState({
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const { push } = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousVals) => ({
      ...previousVals,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    // validate first
    const errObj = validate(formData);
    // if returned with error, set errors
    if (errObj) {
      setErrorMessages(errObj);
      // If no errors, make request
    } else {
      fetch('https://nick-primuth-merkle-back-end.herokuapp.com/user', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((json) => {
          // On successful post, redirect to confirmation page
          push({
            pathname: '/confirmation',
            state: { name: formData.firstName },
          });
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <Container>
      <Header>
        <h2>User Registration</h2>
      </Header>
      <Form id='form' onSubmit={submit}>
        {Object.keys(formData).map((item, index) => (
          <FormControl
            key={index}
            name={item}
            error={errorMessages[item]}
            handleChange={handleChange}
            index={index}
          />
        ))}

        <Button type='submit' name='Submit' />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 400px;
  max-width: 100%;
`;

const Header = styled.div`
  border-bottom: 1px solid #f0f0f0;
  background-color: #f5f5f5;
  padding: 20px 40px;
  text-align: center;
  h2 {
    margin: 0;
  }
`;

const Form = styled.form`
  padding: 30px 40px;
`;

const Button = styled.input`
  background-color: #694489;
  border: 2px solid #694489;
  border-radius: 4px;
  color: #fff;
  display: block;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
`;

export default Registration;
