import { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id?: string
    error?: boolean
}

export function InputText ({ label, error, id, ...props }: InputTextProps) {
    return (
        <div className="flex flex-col w-60">
            <label className="ml-1 mb-1 text-white" htmlFor={id}>
                {label}
            </label>
            <input className="mb-[16px] rounded-md text-black py-2 px-2" id={id} {...props}/>
        </div>
    )
}