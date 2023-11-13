import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  buttonType: "default" | "confirm" | "notConfirm";
}

export default function Button({
  children,
  isLoading,
  buttonType,
  ...rest
}: ButtonProps) {
  let buttonTypeClass = "";

  if (buttonType === "confirm") {
    buttonTypeClass = "bg-greenConfirm";
  } else if (buttonType === "notConfirm") {
    buttonTypeClass = "bg-redDeny";
  } else {
    buttonTypeClass = "bg-lightBlue";
  }

  return (
    <button
      className={`px-6 py-2 border rounded-md ${buttonTypeClass} w-[200px]`}
      {...rest}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}
