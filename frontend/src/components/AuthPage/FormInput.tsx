interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  extraInputClasses?: string;
}

export function FormInput({
  id,
  label,
  type,
  placeholder,
  autoComplete,
  required = false,
  extraInputClasses = "",
}: FormInputProps) {
  return (
    <div className="mt-6">
      <label
        htmlFor={id}
        className="mb-3 block text-sm text-(--grey-color-text) uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={`w-full rounded-2xl border border-(--grey-color-text) bg-(--glass-color) p-2 placeholder:text-sm ${extraInputClasses}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </div>
  );
}
