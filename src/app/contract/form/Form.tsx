"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import ServiceCheckbox from "./ServiceCheckbox";
import AboutCompany from "./AboutCompany";
import AboutSelf from "./AboutSelf";
import Sending from "@/components/sending/Sending";
import Modal from "../Modal";

export type FormDataType = {
  services: string[];
  about_project: string;
  file: File | null;
  name: string;
  company: string;
  email: string;
  phone: string;
};

export type ErrorMessageType = {
  services: boolean;
  about_project: boolean;
  name: boolean;
  company: boolean;
  phone: boolean;
  email: boolean;
};

const BOT_TOKEN = "6267817503:AAH_aKj_zZN1kCm5pN4rlyeLMCQkmo8Jyw";
const USER_ID = 1121369872;
const phonevalidRegex = /998[3789]{1}[013456789]{1}[0-9]{7}$/;
const emailValidRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Form = () => {
  const [isOpen, setOpen] = useState(false);
  const [status, setStatus] = useState<"success" | "error">("success");

  const [formData, setFormData] = useState<FormDataType>({
    services: [],
    about_project: "",
    file: null,
    name: "",
    company: "",
    email: "",
    phone: "+998",
  });

  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>({
    services: false,
    about_project: false,
    name: false,
    company: false,
    phone: false,
    email: false,
  });

  const serviceRef = useRef<null | HTMLDivElement>(null);

  const handleFocus = () => {
    if (serviceRef.current && formData.services.length === 0) {
      serviceRef.current.focus();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormData = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "phone"
          ? e.target.value.replace(/[^0-9+]/g, "")
          : e.target.value,
    });
  };

  const formHandleSubmit = async () => {
    const { services, about_project, name, company, email, phone } = formData;

    if (formData.services.length === 0) {
      handleFocus();
      setErrorMessage({ ...errorMessage, services: true });
      return;
    }
    if (about_project.length < 5) {
      setErrorMessage({ ...errorMessage, about_project: true });
      return;
    }
    if (name.length < 2) {
      setErrorMessage({ ...errorMessage, name: true });
      return;
    }
    if (company.length < 2) {
      setErrorMessage({ ...errorMessage, company: true });
      return;
    }
    if (phone.match(phonevalidRegex) === null) {
      setErrorMessage({ ...errorMessage, phone: true });
      return;
    }
    if (email.match(emailValidRegex) === null) {
      setErrorMessage({ ...errorMessage, email: true });
      return;
    }

    if (services.length > 0 && about_project && name && company && phone) {
      if (!phone.startsWith("+")) {
        formData.phone = `+${phone}`;
      }

      console.log(formData);

      const formattedData = new FormData();
      formData.file &&
        formattedData.append("photo", formData.file, formData.file.name);
      formattedData.append("chat_id", USER_ID.toString());
      formattedData.append(
        "text",
        `
      Anysoftdan yangi xabar:
      So'rov yuboruvchi shaxs: ${formData.name}
      Kompaniyasi nomi: ${formData.company}
      Xizmatlar: ${formData.services.join(", ")}
      Loyiha haqida: ${formData.about_project} 
      Telefon raqami: ${formData.phone}
      Email: ${formData.email}
      ${formData.file && `Fayl: `}
      `
      );

      const responseMessage = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          body: formattedData,
        }
      );
      const responsePhoto = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
        {
          method: "POST",
          body: formattedData,
        }
      );
      if (responseMessage.ok) {
        setFormData({
          services: [],
          about_project: "",
          file: null,
          name: "",
          company: "",
          email: "",
          phone: "+998",
        });
        setErrorMessage({
          services: false,
          about_project: false,
          name: false,
          company: false,
          phone: false,
          email: false,
        });
        setStatus("success");
        setOpen(true);
      } else {
        setStatus("error");
        setOpen(true);
      }
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="px-4 lg:px-8 xl:px-16 2xl:px-32">
        <ServiceCheckbox setFormData={setFormData} serviceRef={serviceRef} />
        <AboutCompany
          formData={formData}
          setFormData={setFormData}
          handleFormData={handleFormData}
          errorMessage={errorMessage}
        />
        <AboutSelf
          formData={formData}
          setFormData={setFormData}
          handleFormData={handleFormData}
          errorMessage={errorMessage}
        />
      </div>
      <button type="submit" className="mt-16 w-full" onClick={formHandleSubmit}>
        <Sending text="YUBORISH" />
      </button>
      <Modal isOpen={isOpen} closeModal={handleClose} type={status} />
    </form>
  );
};

export default Form;
