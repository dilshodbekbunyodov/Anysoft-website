import BaseCheckbox from "@/components/base-checkbox/BaseCheckbox";
import React from "react";
import { FormDataType } from "./Form";
import { unBounded } from "@/app/layout";

type ServiceCheckboxProps = {
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  serviceRef: React.MutableRefObject<HTMLDivElement | null>;
};

const ServiceCheckbox = ({ setFormData, serviceRef }: ServiceCheckboxProps) => {
  return (
    <div ref={serviceRef} tabIndex={0} className="outline-none">
      <h2
        className={`text-2xl font-medium 2xl:text-4xl ${unBounded.className}`}
      >
        Select Services
      </h2>
      <div className="mt-8 justify-between xl:flex">
        <div className="my-6 flex flex-col justify-between gap-y-6">
          <BaseCheckbox
            setFormData={setFormData}
            label="Programming Languages"
          />
          <BaseCheckbox setFormData={setFormData} label="Web Development" />
          <BaseCheckbox setFormData={setFormData} label="Mobile Development" />
        </div>
        <div className="my-6 flex flex-col justify-between gap-y-6">
          <BaseCheckbox setFormData={setFormData} label="Graphic Design" />
          <BaseCheckbox setFormData={setFormData} label="UX/UI Design" />
          <BaseCheckbox setFormData={setFormData} label="Motion Design" />
        </div>
        <div className="my-6 flex flex-col justify-between gap-y-6">
          <BaseCheckbox setFormData={setFormData} label="IT - consulting" />
          <BaseCheckbox setFormData={setFormData} label="IT - audit" />
          <BaseCheckbox setFormData={setFormData} label="Project Management" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCheckbox;
