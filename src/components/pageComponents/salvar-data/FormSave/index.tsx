import Button from "@/components/common/Button";
import { useToastfy } from "@/hooks/useToastfy";

export default function FormSave() {
  const showToast = useToastfy();

  const formConfirm = (e: any) => {
    console.log("quero confirmar");
    e.preventDefault();
    showToast({
      type: "confirm",
      text: "Redirecionando para tela de confirmar presença",
    });
    const delay = 2000;
    setTimeout(() => {
      window.location.replace("confirmar-presenca");
    }, delay);
  };

  const denyConfirm = (e: any) => {
    console.log("não quero confirmar");
    e.preventDefault();
    showToast({ type: "not-confirm", text: "Presença não confirmada :(" });
  };

  return (
    <div className="p-10 border border-solid rounded-md bg-gray-200">
      <h2 className="py-2 text-[32px] font-poppins text-slate-900">
        Casamento de Maria e João
      </h2>
      <p className="py-2 text-slate-900">Deseja confirmar presença?</p>
      <div className="flex justify-around py-4">
        <Button isLoading={false} buttonType="confirm" onClick={formConfirm}>
          Quero Confirmar
        </Button>
        <Button isLoading={false} buttonType="notConfirm" onClick={denyConfirm}>
          Não posso ir
        </Button>
      </div>
    </div>
  );
}
