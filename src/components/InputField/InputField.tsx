import React from "react";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md"
}) => {

  const baseClass = "border rounded p-2 outline-none transition";
  const variantClass = variant === "filled" ? "bg-gray-100 border-gray-300"
                     : variant === "ghost" ? "bg-transparent border-none"
                     : "border-gray-300";
  const sizeClass = size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";
  const errorClass = invalid ? "border-red-500" : "";

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${baseClass} ${variantClass} ${sizeClass} ${errorClass}`}
      />
      {helperText && <span className="text-gray-500 text-sm">{helperText}</span>}
      {errorMessage && invalid && <span className="text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
