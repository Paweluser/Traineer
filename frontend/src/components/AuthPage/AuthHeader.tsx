type AuthHeaderProps = {
  title: string;
  subtitle: string;
};

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold md:mt-2 md:text-3xl">{title}</h2>
      </div>
      <div>
        <p className="text-center text-sm text-(--grey-color-text) md:text-base">
          {subtitle}
        </p>
      </div>
    </>
  );
}
