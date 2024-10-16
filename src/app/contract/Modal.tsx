import { BaseIcon } from "@/components/base-icon/BaseIcon";
import React from "react";
import { unBounded } from "../layout";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  type: "success" | "error";
}

const modalContent = {
  success: {
    iconName: "successResponse",
    title: "Your message sent successfully",
    description: "We will call back you in 30 minutes",
  },
  error: {
    iconName: "errorResponse",
    title: "Message sending has failed",
    description: "Please try again",
  },
} as const;

const Modal = ({ isOpen, closeModal, type }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
      <div className="z-50 flex h-96 w-96 flex-col gap-1 bg-neutral-800 p-6">
        <div className="flex justify-end">
          <button onClick={closeModal}>
            <BaseIcon
              name="close"
              viewBox="0 0 40 40"
              className="h-10 w-10 cursor-pointer text-white"
            />
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center gap-7">
          <BaseIcon
            name={modalContent[type].iconName}
            viewBox="0 0 128 128"
            className="h-32 w-32 text-green-600"
          />

          <div>
            <p
              className={`text-2xl text-white  ${unBounded.className} text-center`}
            >
              {modalContent[type].title}
            </p>
            <p className="mt-2 text-center text-gray-400">
              {modalContent[type].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
