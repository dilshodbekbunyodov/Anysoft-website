import Footer from "@/components/footer/Footer";
import Form from "./form/Form";
import { unBounded } from "../layout";
import BaseAnimatedText from "@/components/base-animated-text/BaseAnimatedText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "shartnoma imzolash",
  },
  keywords: [
    "rraqamli xizmarlar markazi",
    "web dasturlash",
    "dasturiy taʼminot",
    "mobil dasturlash",
    "grafik dizayn",
    "ux/ui dizayn",
    "moushn dizayn",
    "IT - konsalting",
    "IT - audit",
    "biznes jarayonlari reinjineringi",
  ],
};

const page = () => {
  return (
    <div>
      <div className="flex flex-col justify-center px-4 py-8 lg:px-8 xl:px-16  2xl:h-[calc(100vh-144px)] 2xl:space-y-12 2xl:px-32">
        <div
          className={`flex flex-col text-5xl font-extrabold leading-[70px] tracking-wide 2xl:text-8xl 2xl:leading-[96px] ${unBounded.className}`}
        >
          <BaseAnimatedText text="COMPLETE" />
          <BaseAnimatedText text="FORM" />
        </div>
        <div className="">
          <p className="px-4 xl:p-0 xl:text-xl 2xl:w-1/2">
            Simplify the process – Fill out the form below to get started. Your
            information is secure, and our team is ready to assist you. Let's
            connect and explore how we can meet your needs effectively:
            <a
              href="tel:+998916225506"
              className="text-2xl font-semibold text-white"
            >
              {" "}
              +99891 622 55 06
            </a>
          </p>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default page;
