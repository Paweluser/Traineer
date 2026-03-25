import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/AuthPage/RegisterForm";
import { AuthLayout } from "../../Layout/AuthLayout";
import { AppLogo } from "../../components/Other/AppLogo";
import { AuthHeader } from "../../components/AuthPage/AuthHeader";

export function RegisterPage() {
  return (
    <AuthLayout>
      <AppLogo />
      <AuthHeader
        title="Dołącz do nas"
        subtitle="Zarejestruj się, aby zacząć swój progres"
      />
      <RegisterForm />
      <div className="mt-4">
        <p className="text-(--grey-color-text)">
          Masz już konto?{" "}
          <Link
            to="/login"
            className="cursor-pointer transition-colors hover:text-(--text-color)"
          >
            Zaloguj się
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
