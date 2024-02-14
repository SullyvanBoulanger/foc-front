import { useContext } from 'react';
import { PrimitiveTypes } from './PrimitiveTypes';
import { FormContext } from './FormProvider';

interface UseFieldReturn {
  value: PrimitiveTypes;
  setField: (newValue: PrimitiveTypes) => void;
}

export const useForm = () => useContext(FormContext);

export const useField = (name: string): UseFieldReturn => {
  const { formState, setFormState } = useContext(FormContext);

  const setField = (value: PrimitiveTypes) => {
    setFormState({ ...formState, [name]: value });
  };

  return {
    value: formState[name] || '',
    setField,
  };
};
