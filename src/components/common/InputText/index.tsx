import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id?: string
    error?: boolean
}

export function InputText ({ label, error, id, ...props }: InputTextProps) {
    return (
        <div className="flex flex-col min-w-120 w-full ">
            <label className="ml-1 mb-1 text-white" htmlFor={id}>
                {label}
            </label>
            <input {...props} className={twMerge("mb-[16px] rounded-md text-black py-2 px-2", props.className)} id={id}/>
        </div>
    )
}