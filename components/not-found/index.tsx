"use client";
import { NextPage } from "next";
import Image from "next/image";
import close from "@/public/close.svg";
import { motion } from "framer-motion";

const Contact: NextPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
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
          <div className="h-full w-[1px] bg-line hidden lg:block basis-[1px]" />

          {/* <CodeString form={form} /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
