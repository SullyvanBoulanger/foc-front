import { PropsWithChildren, ReactElement, createContext, useMemo, useState } from "react";
import { PrimitiveTypes } from "./UseForm";

interface FormContextType{
    formState : Record<string, PrimitiveTypes>;
    setFormState : (newValue: Record<string, PrimitiveTypes>) => void
}

export const FormContext = createContext<FormContextType>({
    formState: {},
    setFormState: ({}) => {}
});

export default function FormProvider({children}: PropsWithChildren): ReactElement{
    const [formState, setFormState] = useState<Record<string, PrimitiveTypes>>({});

    const providedValues = useMemo(() => {
        return { formState: formState, setFormState };
    }, [formState, setFormState]);

    return(
        <FormContext.Provider value={providedValues}>
            {children}
        </FormContext.Provider>
    );
}
