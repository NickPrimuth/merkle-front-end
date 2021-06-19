import * as React from 'react';
import styled from 'styled-components';
function FormControl({ index, name, handleChange, error }) {
  return (
    <StyledFormControl>
      <Label htmlFor={ids[index]}>{labels[index]}</Label>
      <Input
        type={ids[index] === 'zip' ? 'number' : 'text'}
        placeholder={placeholders[index]}
        id={ids[index]}
        onChange={handleChange}
        name={name}
      />
      {error ? <Small>{labels[index] + error}</Small> : null}
    </StyledFormControl>
  );
}
// List of ids
const ids = [
  'first-name',
  'last-name',
  'address-one',
  'address-two',
  'city',
  'state',
  'zip',
  'country',
];
// List of placeholders
const placeholders = [
  'John',
  'Doe',
  '123 1st Street',
  'Apt 1',
  'Los Angeles',
  'CA',
  '12345',
  'US',
];
// List of labels
const labels = [
  'First Name',
  'Last Name',
  'Address 1',
  'Address 2',
  'City',
  'State',
  'Zip',
  'Country',
];

const StyledFormControl = styled.div`
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  font-size: 14px;
  padding: 10px;
  width: 100%;
  &:focus {
    outline: 0;
    border-color: #6b6b6b;
  }
`;

const Small = styled.small`
  color: #e74c3c;
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
  color: #e74c3c;
  visibility: visible;
`;

export default FormControl;
