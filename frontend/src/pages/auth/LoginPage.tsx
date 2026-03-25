import { AppLogo } from "../../components/Other/AppLogo";
import { AuthHeader } from "../../components/AuthPage/AuthHeader";
import { AuthLayout } from "../../Layout/AuthLayout";
import { GoogleBtn } from "../../components/Other/GoogleBtn";
import { LoginBtn } from "../../components/Other/LoginBtn";
import { AuthLine } from "../../components/Other/AuthLine";

export function LoginPage() {
  return (
    <AuthLayout>
      <AppLogo />
      <AuthHeader
        title="Witaj w Traineer"
        subtitle="Zaloguj się, aby zsynchronizować swój plan treningowy i postępy"
      />
      <GoogleBtn />
      <div className="mt-4 flex w-[75%] flex-row items-center justify-center gap-3">
        <AuthLine />
        <p className="text-sm text-(--grey-color-text)">LUB</p>
        <AuthLine />
      </div>
      <LoginBtn />
      <div className="mt-4">
        <p className="text-center text-(--grey-color-text)">
          Logując się, akceptujesz nasz{" "}
          <span className="text-(--text-color)">Regulamin</span> oraz{" "}
          <span className="text-(--text-color)">Politykę Prywatności</span>
        </p>
      </div>
    </AuthLayout>
  );
}
