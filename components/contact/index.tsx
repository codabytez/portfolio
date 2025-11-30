/* eslint-disable camelcase */
"use client";
import { NextPage } from "next";
import { useState } from "react";
import ContactSidebar from "./sidebar";
import Image from "next/image";
import close from "@/public/close.svg";
import ContactForm from "./contact-form";
import CodeString from "./code-string";
import { motion } from "framer-motion";
import SendSuccess from "./success";
import emailjs from "@emailjs/browser";

const Contact: NextPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.name && form.email && form.message) {
      emailjs
        .send(
          String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
          String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
          {
            name: form.name,
            email: form.email,
            message: form.message,
            to_name: "Obinna Chidi",
          },
          String(process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
        )
        .then(() => {
          setIsLoading(false);
          setIsSuccess(true);
        });
    }
  };

  const handleSendNewMessage = () => {
    setIsSuccess(false);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <p className="p-5 lg:hidden text-secondary-400">_contact</p>

      <ContactSidebar />
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "-100vw" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col lg:flex-1 w-full lg:w-[calc(100%-310px)] overflow-scroll"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="w-full lg:w-max h-10 border-r border-line hidden lg:flex items-center gap-11 px-3.5 shrink-0">
          <p>contacts</p>
          <button>
            <Image src={close} alt="close" />
          </button>
        </div>
        <div
          className="w-full lg:border-t border-line lg:h-full flex flex-col lg:flex-row lg:justify-between lg:items-stretch overflow-y-scroll"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {isSuccess ? (
            <SendSuccess onSendNewMessage={handleSendNewMessage} />
          ) : (
            <ContactForm
              form={form}
              handleChange={handleChange}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          )}
          <div className="h-full w-[1px] bg-line hidden lg:block basis-[1px]" />

          <CodeString form={form} />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
