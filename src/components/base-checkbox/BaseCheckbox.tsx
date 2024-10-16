"use client";
import { FormDataType } from "@/app/contract/form/Form";
import React, { useEffect, useState } from "react";
import { BaseIcon } from "../base-icon/BaseIcon";

type BaseCheckboxProps = {
  label: string;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

const BaseCheckbox = ({ label, setFormData }: BaseCheckboxProps) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    isChecked
      ? setFormData((prev) => ({
          ...prev,
          services: [...prev.services, label],
        }))
      : setFormData((prev) => ({
          ...prev,
          services: prev.services.filter((item) => item !== label),
        }));
  }, [isChecked, label, setFormData]);
  return (
    <label
      htmlFor={label}
      className={`flex cursor-pointer items-center space-x-4 border p-4 hover:border-red-500 ${
        isChecked ? "border-red-500" : "border-gray-400"
      }`}
    >
      <input
        onChange={() => setChecked((prev) => !prev)}
        type="checkbox"
        id={label}
        checked={isChecked}
        className="hidden"
      />
      <div className="h-8 w-8">
        <BaseIcon
          name={isChecked ? "checkboxIcon" : "checkboxFalseIcon"}
          viewBox="0 0 32 32"
          className="h-8 w-8"
        />
      </div>

      <span
        className={` text-lg font-medium xl:text-xl ${
          isChecked ? "text-red-500" : "text-white"
        }`}
      >
        {label}
      </span>
    </label>
  );
};

export default BaseCheckbox;
