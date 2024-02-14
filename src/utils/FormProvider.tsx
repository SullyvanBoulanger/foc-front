import React, {
  PropsWithChildren, ReactElement, createContext, useMemo, useState,
} from 'react';
import { PrimitiveTypes } from './PrimitiveTypes';

interface FormContextType {
  formState : Record<string, PrimitiveTypes>;
  setFormState : (newValue: Record<string, PrimitiveTypes>) => void
}

export const FormContext = createContext<FormContextType>({
  formState: {},
  // eslint-disable-next-line no-empty-pattern
  setFormState: ({}) => {},
});

export default function FormProvider({ children }: PropsWithChildren): ReactElement {
  const [formState, setFormState] = useState<Record<string, PrimitiveTypes>>({});

  const providedValues = useMemo(() => ({ formState, setFormState }), [formState, setFormState]);

  return (
    <FormContext.Provider value={providedValues}>
      {children}
    </FormContext.Provider>
  );
}
