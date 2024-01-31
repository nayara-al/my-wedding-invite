import { Theme, ToastPosition, toast } from "react-toastify";

interface ToastfyProps {
  type: "confirm" | "error";
  text: string;
}

function useToastfy() {
  return ({ type, text }: ToastfyProps) => {
    const toastConfig = {
      position: "top-center" as ToastPosition,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored" as Theme,
    };
    switch (type) {
      case "confirm":
        toast.success(text, {
          ...toastConfig,
          className: "toast-confirm",
        });
        break;
      case "error":
        toast.error(text, {
          ...toastConfig,
          className: "toast-error",
        });
        break;

      default:
        break;
    }
  };
}

export { useToastfy };
