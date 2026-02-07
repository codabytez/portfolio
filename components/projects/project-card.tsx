import { NextPage } from "next";
import React from "react";
import Button from "../UI/button";
import Image, { StaticImageData } from "next/image";
import react from "@/public/react-tech.svg";
import html from "@/public/html-tech.svg";
import css from "@/public/css-tech.svg";
import vue from "@/public/vue-tech.svg";
import angular from "@/public/angular-tech.svg";
import gatsby from "@/public/gatsby-tech.svg";
import flutter from "@/public/flutter-tech.svg";
import nextjs from "@/public/nextjs-tech.svg";
import { motion } from "framer-motion";
import ProjectSkeleton from "./project-skeleton";
import { Doc } from "@/convex/_generated/dataModel";

const ProjectCard: NextPage<IProjectCardProps & Doc<"projects">> = ({
  title,
  tags,
  description,
  image,
  link,
  index,
  isLoading,
}) => {
  const techIconMap: Record<string, StaticImageData | string> = {
    react,
    html,
    css,
    vue,
    angular,
    gatsby,
    flutter,
    "next.js": nextjs,
    nextjs,
  };

  const normalizedTag = tags[0]?.toLowerCase();

  const tagIcon: StaticImageData | string | undefined = normalizedTag
    ? techIconMap[normalizedTag]
    : undefined;

  const techColorsMap: Record<string, string> = {
    react: "#86E1F9",
    html: "#FFA67E",
    css: "#95D6F0",
    vue: "#81D4AF",
    angular: "#F2A9B9",
    gatsby: "#B7A1CE",
    flutter: "#A0BDE1",
    "next.js": "#000000",
    nextjs: "#000000",
  };

  const tagBgColor = normalizedTag ? techColorsMap[normalizedTag] : undefined;

  // Fallback color - use tag color or default blue
  const fallbackBgColor = tagBgColor ? tagBgColor.replace("#", "") : "5565E8";

  // Fallback image in case screenshot fails
  const fallbackImage = `https://placehold.co/370x315/${fallbackBgColor}/FFFFFF?text=${encodeURIComponent(title)}`;
  const displayImage = image || fallbackImage;

  return (
    <>
      {isLoading ? (
        <ProjectSkeleton />
      ) : (
        <motion.div
          className="flex flex-col gap-4 h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.p
            className="font-medium text-[#5565E8]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Project {index + 1}{" "}
            <span className="text-secondary-100"> {`// _${title}`} </span>
          </motion.p>
          <motion.div
            className="w-full max-w-[370px] min-h-[315px] rounded-2xl border border-line bg-primary-300 overflow-hidden shadow-sm cursor-grab active:cursor-grabbing flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-full h-36 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <motion.div
                className="w-7 h-7 rounded-sm flex justify-center items-center absolute top-5 right-4 shadow-md z-10"
                style={{ backgroundColor: tagBgColor }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                {tagIcon && <Image src={tagIcon} alt={tags[0]} />}
              </motion.div>
              <Image
                draggable={false}
                src={displayImage}
                width={370}
                height={315}
                alt={title}
                className="w-full h-full object-cover"
                unoptimized={!image}
              />
            </div>
            <div className="flex flex-col gap-5 p-5 flex-1 justify-between">
              <motion.p
                className="max-w-[304px] text-body font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                {description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              >
                <Button href={link} variant="secondary" className="w-max">
                  view-project
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
