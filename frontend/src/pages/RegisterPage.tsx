import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-(--black-color) text-(--text-color)">
      <div className="m-3 flex flex-col w-full items-center gap-4 rounded-3xl bg-(--glass-color) p-4">
        <div className="flex h-12 w-12 rotate-45 items-center justify-center rounded-lg bg-(--hover-color)">
          <Dumbbell size={28} className="-rotate-45" />
        </div>
        <div>
          <p className="text-2xl font-bold">Dołącz do nas</p>
        </div>
        <div>
          <p className="text-center text-(--grey-color-text) text-sm">
            Zaloguj się, aby kontynuować swój progres
          </p>
        </div>
        <form action="" className="mt-4 flex w-full flex-col">
          <div className="mt-6">
            <label
              htmlFor=""
              className="mb-3 block text-sm text-(--grey-color-text)"
            >
              NAZWA UŻYTKOWNIKA
            </label>
            <input
              type="text"
              className="w-full rounded-2xl border border-(--grey-color-text) bg-(--glass-color) p-2 placeholder:text-sm"
              placeholder="Twoja nazwa użytkownika"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor=""
              className="mb-3 block text-sm text-(--grey-color-text)"
            >
              EMAIL
            </label>
            <input
              type="email"
              className="w-full rounded-2xl border border-(--grey-color-text) bg-(--glass-color) p-2 placeholder:text-sm"
              placeholder="Twój email"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor=""
              className="mb-3 block text-sm text-(--grey-color-text)"
            >
              HASŁO
            </label>
            <input
              type="password"
              className="mb-6 w-full rounded-2xl border border-(--grey-color-text) bg-(--glass-color) p-2 placeholder:text-sm"
              placeholder="Twoje hasło"
            />
          </div>
          <button className="cursor-pointer rounded-2xl bg-(--hover-color) py-4 font-bold">
            Stwórz konto
          </button>
        </form>
        <div>
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
