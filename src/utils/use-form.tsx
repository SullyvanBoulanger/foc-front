import { useState, ChangeEvent, FormEvent } from 'react';

interface UseFormReturn {
  formState: Record<string,string>;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>, onSubmit: (data: Record<string,string>) => void) => void;
}

export function useForm(initialState?: Record<string, string>): UseFormReturn {
  const [formState, setFormState] = useState<Record<string, string>>(initialState || {});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>, onSubmit: (data: Record<string, string>) => void) => {
    event.preventDefault();
    onSubmit(formState);
  };

  return {
    formState,
    handleInputChange,
    handleSubmit
  };
}
