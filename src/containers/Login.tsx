import Form from '@components/Form';
import InputForm from '@components/InputForm';
import Button from '@nectron/Button';
import Label from '@nectron/Label';
import { PrimitiveTypes } from '@utils/PrimitiveTypes';
import { useUser } from '@utils/UserProvider';
import { api } from '@utils/api';
import React, { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function LoginPage(): ReactElement {
  const [errorMessage, setErrorMessage] = useState<string>();
  const { setIsLogged } = useUser();

  const onSubmit = ((data: Record<string, PrimitiveTypes>) => {
    api.post('/auth/signin', data)
      .then((response) => {
        setIsLogged(response.data.token);
        setErrorMessage('Logged successfully');
      })
      .catch(() => setErrorMessage('Your identifiants are incorrect.'));
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Form handleSubmit={onSubmit}>
        <Label>
          Username Or Email
          <InputForm name="usernameOrEmail" />
        </Label>
        <Label>
          Password
          <InputForm type="password" name="password" />
        </Label>
        <Button type="submit">
          Login
        </Button>
      </Form>
      <p>
        {errorMessage}
      </p>

      <NavLink to="/register">
        Create an account
      </NavLink>
    </div>
  );
}
