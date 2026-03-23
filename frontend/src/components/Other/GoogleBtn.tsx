import { GoogleIcon } from "./GoogleIcon";

export function GoogleBtn() {
  return (
    <button className="mt-4 flex w-[75%] font-bold cursor-pointer items-center justify-center gap-2 rounded-2xl bg-white py-4 text-(--black-color)">
      <GoogleIcon /> Kontynuuj z Google
    </button>
  );
}
