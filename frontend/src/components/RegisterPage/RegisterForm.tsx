export function RegisterForm() {
  return (
    <form action="" className="mt-4 flex w-full flex-col">
      <div className="mt-6">
        <label
          htmlFor="username"
          className="mb-3 block text-sm text-(--grey-color-text)"
        >
          NAZWA UŻYTKOWNIKA
        </label>
        <input
          id="username"
          name="username"
          type="text"
          className="w-full rounded-2xl border border-(--grey-color-text) bg-(--glass-color) p-2 placeholder:text-sm"
          placeholder="Twoja nazwa użytkownika"
          autoComplete="username"
          required
        />
      </div>
      <div className="mt-6">
        <label
          htmlFor="email"
          className="mb-3 block text-sm text-(--grey-color-text)"
        >
          EMAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-2xl border border-(--grey-color-text) bg-(--glass-color) p-2 placeholder:text-sm"
          placeholder="Twój email"
          autoComplete="email"
          required
        />
      </div>
      <div className="mt-6">
        <label
          htmlFor="password"
          className="mb-3 block text-sm text-(--grey-color-text)"
        >
          HASŁO
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="mb-6 md:mb-8 w-full rounded-2xl border border-(--grey-color-text) bg-(--glass-color) p-2 placeholder:text-sm"
          placeholder="Twoje hasło"
          autoComplete="new-password"
          required
        />
      </div>
      <button type="submit" className="cursor-pointer rounded-2xl bg-(--hover-color) py-4 font-bold">
        Stwórz konto
      </button>
    </form>
  );
}
