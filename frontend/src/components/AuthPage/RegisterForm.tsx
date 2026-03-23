import { FormInput } from "./FormInput";

export function RegisterForm() {
  return (
    <form action="" className="mt-4 flex w-full flex-col">
      <FormInput
        id="username"
        label="Nazwa użytkownika"
        type="text"
        placeholder="Twoja nazwa użytkownika"
        autoComplete="username"
        required
      />
      <FormInput
        id="email"
        label="Email"
        type="email"
        placeholder="Twój email"
        autoComplete="email"
        required
      />
      <FormInput
        id="password"
        label="Hasło"
        type="password"
        placeholder="Twoje hasło"
        autoComplete="new-password"
        required
        extraInputClasses="mb-6 md:mb-8"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-2xl bg-(--hover-color) py-4 font-bold"
      >
        Stwórz konto
      </button>
    </form>
  );
}
