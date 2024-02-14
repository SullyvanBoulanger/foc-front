import { useContext } from 'react';
import { FormContext } from './FormProvider';

export type PrimitiveTypes = string | number;

interface UseFieldReturn {
  value: PrimitiveTypes;
  setField: (newValue: PrimitiveTypes) => void;
}

export const useForm = () => {
  return useContext(FormContext);
}

export const useField = (name: string): UseFieldReturn => {
  const {formState, setFormState} = useContext(FormContext);

  const setField = (value: PrimitiveTypes) =>{
    setFormState({...formState, [name]: value});
  }

  return {
    value: formState[name] || '', 
    setField: setField
  };
}
