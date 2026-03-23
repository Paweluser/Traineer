import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { RegisterForm } from "../components/RegisterPage/RegisterForm";

export function RegisterPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-(--black-color) text-(--text-color)">
      <div className="m-3 flex w-[75%] flex-col items-center gap-3 rounded-3xl bg-(--glass-color) p-4 xl:w-1/2">
        <div className="mt-1 flex h-12 w-12 rotate-45 items-center justify-center rounded-lg bg-(--hover-color) md:mt-2 md:h-15 md:w-15">
          <Dumbbell className="h-7 w-7 -rotate-45 md:h-9 md:w-9" />
        </div>
        <div>
          <p className="text-2xl font-bold md:mt-2 md:text-3xl">
            Dołącz do nas
          </p>
        </div>
        <div>
          <p className="text-center text-sm text-(--grey-color-text) md:text-base">
            Zaloguj się, aby kontynuować swój progres
          </p>
        </div>
        <RegisterForm />
        <div className="md:mt-1">
          <p className="text-(--grey-color-text)">
            Masz już konto?{" "}
            <Link to="/login" className="cursor-pointer">
              Zaloguj się
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
