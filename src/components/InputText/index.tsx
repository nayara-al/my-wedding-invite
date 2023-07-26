import { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id?: string
    error?: boolean
}

export function InputText ({ label, error, id, ...rest }: InputTextProps) {
    return (
        <div className="flex flex-col w-48">
            <label className="ml-1" htmlFor={id}>
                {label}
            </label>
            <input className="mb-[16px] rounded-md" id={id} {...rest}/>
        </div>
    )
}