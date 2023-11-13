import { Theme, ToastPosition, toast } from "react-toastify";

interface ToastfyProps {
  type: "confirm" | "not-confirm";
  text: string;
}

function useToastfy() {
  return ({ type, text }: ToastfyProps) => {
    const toastConfig = {
      position: "top-center" as ToastPosition,
      autoClose: 4000,
      hideProgressBar: false,
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
      case "not-confirm":
        toast.error(text, {
          ...toastConfig,
          className: "toast-not-confirm",
        });
        break;

      default:
        break;
    }
  };
}

export { useToastfy };
