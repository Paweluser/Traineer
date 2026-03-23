import { Mail } from "lucide-react";

export function LoginBtn() {
  return (
    <button className="mt-4 flex w-[75%] cursor-pointer items-center justify-center gap-2 rounded-2xl bg-(--main-color) py-4 font-bold text-(--text-color)">
     <Mail /> Użyj adresu e-mail
    </button>
  );
}
