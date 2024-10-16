import React, { ChangeEvent, useState } from "react";
import { ErrorMessageType, FormDataType } from "./Form";
import FormInput from "./FormInput";
import { BaseIcon } from "@/components/base-icon/BaseIcon";
import { unBounded } from "@/app/layout";

type AboutCompanyType = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  handleFormData: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: ErrorMessageType;
};

const AboutCompany = ({
  handleFormData,
  formData,
  setFormData,
  errorMessage
}: AboutCompanyType) => {
  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const clearInput = () => {
    setFormData({ ...formData, file: null });
  };

  return (
    <div className="mt-12 xl:mt-24">
      <h2
        className={`text-2xl font-medium uppercase 2xl:text-4xl ${unBounded.className}`}
      >
        Provide your project details
      </h2>
      <div className="mt-8">
        <FormInput
          onChange={handleFormData}
          name="about_project"
          value={formData.about_project}
          text="Description"
          inputType="text"
          error={errorMessage.about_project && "Maydon to'ldirlishi shart."}
        />
        <div className="mt-6 flex flex-wrap space-x-4">
          <label
            htmlFor="company_file"
            className="flex w-max cursor-pointer items-center space-x-2 rounded-[40px] bg-neutral-800 px-6 py-4 text-xl"
          >
            <input
              type="file"
              id="company_file"
              onChange={(e) => fileHandler(e)}
              hidden
            />
            <BaseIcon name="attachFileIcon" />
            <span>Upload file</span>
          </label>
          {formData.file ? (
            <div className="flex items-center space-x-2 rounded-[40px] bg-neutral-800 px-6 py-4 text-xl">
              <span>{formData.file.name}</span>
              <button onClick={clearInput}>
                <BaseIcon
                  name="cancel"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
