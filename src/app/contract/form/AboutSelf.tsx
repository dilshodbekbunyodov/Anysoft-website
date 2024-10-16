import React, { ChangeEvent } from "react";
import { ErrorMessageType, FormDataType } from "./Form";
import FormInput from "./FormInput";
import { unBounded } from "@/app/layout";

type AboutCompanyType = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  handleFormData: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: ErrorMessageType;
};

const AboutSelf = ({
  handleFormData,
  formData,
  errorMessage,
}: AboutCompanyType) => {
  return (
    <div className="mt-12 xl:mt-24">
      <h2
        className={`text-2xl font-medium uppercase 2xl:text-4xl ${unBounded.className}`}
      >
        Share information about yourself
      </h2>
      <div className="mt-8 grid-cols-2 gap-6 xl:grid">
        <FormInput
          onChange={handleFormData}
          name="name"
          value={formData.name}
          text="Full Name"
          inputType="text"
          error={errorMessage.name && "Required field"}
        />
        <FormInput
          onChange={handleFormData}
          name="company"
          value={formData.company}
          text="Company name"
          inputType="text"
          error={errorMessage.company && "Required field"}
        />
        <FormInput
          onChange={handleFormData}
          name="email"
          value={formData.email}
          text="Email address"
          inputType="text"
          error={errorMessage.email && "Invalid email address"}
        />
        <FormInput
          onChange={handleFormData}
          name="phone"
          value={formData.phone}
          text="Phone Number"
          inputType="text"
          error={errorMessage.phone && "Invalid Phone Number"}
          maxLength={13}
        />
      </div>
    </div>
  );
};

export default AboutSelf;
