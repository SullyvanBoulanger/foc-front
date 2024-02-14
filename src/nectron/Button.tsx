import { PropsWithChildren, ReactElement } from "react";

interface ButtonProps extends PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>{

}

export default function Button({children, ...props}: ButtonProps): ReactElement{
    return (
        <button {...props}>
            {children}
        </button>
    )
} 