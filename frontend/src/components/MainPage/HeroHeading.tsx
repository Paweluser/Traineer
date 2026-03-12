export function HeroHeading() {
  return (
    <h1 className="text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl lg:text-[5rem] lg:leading-[1.1]">
      Twój progres pod{' '}
      <span className="text-(--hover-color) underline decoration-(--hover-color) decoration-[6px] underline-offset-12">
        stałą
      </span>
      <br />
      <span className="text-(--hover-color) underline decoration-(--hover-color) decoration-[6px] underline-offset-12">
        kontrolą
      </span>
    </h1>
  );
}
