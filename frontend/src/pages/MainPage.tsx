import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroHeading } from "../components/MainPage/HeroHeading";
import { MainNav } from "../components/Nav/MainNav";
 
export function MainPage() {
  return (
    <div className="min-h-screen bg-(--black-color) text-(--text-color) selection:bg-(--hover-color)">
      <MainNav />
      <main className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-4 text-center">
        <HeroHeading />
        <p className="mt-12 max-w-2xl text-lg text-(--grey-color-text) sm:text-xl">
          Inteligentny asystent treningowy, który planuje Twoją progresję,
          śledzi rekordy i motywuje Cię do przekraczania własnych granic.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to="/register"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-(--hover-color) px-8 py-4 text-lg font-bold transition-transform hover:scale-105 sm:w-auto"
          >
            Załóż darmowe konto <ArrowRight size={20} className="mt-0.5" />
          </Link>

          <Link
            to="/"
            className="flex w-full items-center justify-center rounded-2xl bg-(--glass-color) px-8 py-4 text-lg font-bold transition-transform hover:scale-105 sm:w-auto"
          >
            Zobacz demo
          </Link>
        </div>
      </main>
    </div>
  );
}
