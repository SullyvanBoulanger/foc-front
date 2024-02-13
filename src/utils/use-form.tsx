import { useState, ChangeEvent, FormEvent } from 'react';

interface UseFormReturn<T> {
  formState: T;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>, onSubmit: (data: T) => void) => void;
}

export function useForm<T>(initialState: T): UseFormReturn<T> {
  const [formState, setFormState] = useState<T>(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>, onSubmit: (data: T) => void) => {
    event.preventDefault();
    onSubmit(formState);
  };

  return {
    formState,
    handleInputChange,
    handleSubmit
  };
}