import { NextPage } from "next";
import React from "react";
import Button from "../UI/button";
import { motion } from "framer-motion";

const SendSuccess: NextPage<{
  onSendNewMessage: () => void;
}> = ({ onSendNewMessage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="w-full lg:w-[43%] flex items-center justify-center py-10 px-5"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-3 max-w-[382px] text-center font-medium"
        >
          Thank you! 🤘
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-[382px] text-center text-body font-medium pb-9"
        >
          Your message has been accepted. You will receive answer really soon!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button onClick={onSendNewMessage} variant="secondary">
            send-new-message
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SendSuccess;
