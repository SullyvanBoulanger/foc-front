import React, { ReactElement, useState } from 'react';
import Form from '@components/Form';
import Label from '@nectron/Label';
import InputForm from '@components/InputForm';
import Button from '@nectron/Button';
import { PrimitiveTypes } from '@utils/PrimitiveTypes';
import { useUser } from '@utils/UserProvider';

export default function RegisterPage(): ReactElement {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { handleSign, message } = useUser();

  const onSubmit = (data: Record<string, PrimitiveTypes>) => {
    if (data.password !== data.passwordConfirmation) {
      setErrorMessage('Your passwords do no match');
    } else {
      setErrorMessage('');
      const { passwordConfirmation, ...body } = data;
      handleSign('/auth/signup', body, 'Register successfully');
      setErrorMessage(message);
    }
  };

  return (
    <div>
      <Form handleSubmit={onSubmit}>
        <Label>
          Username
          <InputForm name="username" />
        </Label>
        <Label>
          Email
          <InputForm name="email" type="email" />
        </Label>
        <Label>
          Password
          <InputForm type="password" name="password" />
        </Label>
        <Label>
          Password Confirmation
          <InputForm type="password" name="passwordConfirmation" />
        </Label>
        <Button type="submit" value="Register">
          Register
        </Button>
      </Form>
      <p>
        {errorMessage}
      </p>
    </div>
  );
}
