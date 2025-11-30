"use client";
import { NextPage } from "next";
import { useState } from "react";

const CustomCheckbox: NextPage<ICustomCheckboxProps> = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onChange();
  };

  return (
    <div className="flex items-center">
      <button onClick={toggleCheckbox}>
        {isChecked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            className="transition-all duration-300 ease-in-out"
          >
            <rect
              x="0.5"
              y="0.514648"
              width="17.8115"
              height="17.8115"
              rx="1.5"
              fill="#607B96"
              stroke="#607B96"
            />
            <path
              d="M7.88587 11.7006L14.4718 5.11401L15.4856 6.12712L7.88587 13.7268L3.32617 9.16715L4.33928 8.15405L7.88587 11.7006Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            className="transition-all duration-300 ease-in-out"
          >
            <rect
              x="0.5"
              y="1.23438"
              width="17.8115"
              height="17.8115"
              rx="1.5"
              fill="#011627"
              stroke="#607B96"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CustomCheckbox;
