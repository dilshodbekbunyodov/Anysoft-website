"use client";
import { ChangeEvent, useEffect, useRef } from "react";

type FormInputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  text: string;
  inputType: string;
  value: string | undefined | number | string[];
  error?: string | false;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  maxLength?: number;
};

const FormInput = ({
  text,
  inputType,
  onChange,
  name,
  value,
  error,
  onFocus,
  maxLength,
}: FormInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && error) {
      inputRef.current.focus();
    }
  }, [error]);

  return (
    <div className="">
      <div className="relative flex flex-1 flex-col">
        <input
          ref={inputRef}
          type={inputType}
          className="border-x-0 border-b border-t-0 bg-transparent p-4 pb-5 text-xl text-white placeholder:text-gray-400 focus:border-white focus:outline-none focus:ring-0"
          onChange={onChange}
          name={name}
          value={value}
          onFocus={onFocus}
          maxLength={maxLength}
          placeholder={text}
        />
        {error ? (
          <p className="text-red-500 2xl:absolute 2xl:bottom-0">{error}</p>
        ) : null}
      </div>
    </div>
  );
};

export default FormInput;
