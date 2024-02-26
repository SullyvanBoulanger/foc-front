import React, { ReactElement } from 'react';
import Form from '@components/Form';
import Label from '@nectron/Label';
import InputForm from '@components/InputForm';
import Button from '@nectron/Button';
import { PrimitiveTypes } from '@utils/PrimitiveTypes';
import { useUser } from '@utils/UserProvider';

export default function RegisterPage(): ReactElement {
  const { signUp, message } = useUser();

  const onSubmit = (data: Record<string, PrimitiveTypes>) => signUp(data);

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
        {message}
      </p>
    </div>
  );
}
