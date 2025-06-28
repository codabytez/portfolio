/* eslint-disable camelcase */
import { NextPage } from "next";
import React from "react";
import Button from "../UI/button";
import Image from "next/image";
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

interface ProjectCardProps extends ContentfulResponse {
  index: number;
  isLoading: boolean;
}

const techColors = [
  { name: "React", color: "#86E1F9" },
  { name: "HTML", color: "#FFA67E" },
  { name: "CSS", color: "#95D6F0" },
  { name: "Vue", color: "#81D4AF" },
  { name: "Angular", color: "#F2A9B9" },
  { name: "Gatsby", color: "#B7A1CE" },
  { name: "Flutter", color: "#A0BDE1" },
  { name: "Next.js", color: "#000000" },
  { name: "NextJS", color: "#000000" },
];

const ProjectCard: NextPage<ProjectCardProps> = ({
  fields: { title, tags, description, project_img, link },
  index,
  isLoading,
}) => {
  const tagBgColor = techColors.find(
    (tech) => tech.name.toLowerCase() === tags[0].toLowerCase()
  )?.color;

  const tagIcon =
    tags[0].toLowerCase() === "react"
      ? react
      : tags[0].toLowerCase() === "html"
      ? html
      : tags[0].toLowerCase() === "css"
      ? css
      : tags[0].toLowerCase() === "vue"
      ? vue
      : tags[0].toLowerCase() === "angular"
      ? angular
      : tags[0].toLowerCase() === "gatsby"
      ? gatsby
      : tags[0].toLowerCase() === "flutter"
      ? flutter
      : tags[0].toLowerCase() === "next.js" || "nextjs"
      ? nextjs
      : "";

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
            className="w-full max-w-[370px] min-h-[315px] rounded-2xl border border-line bg-primary-300 overflow-hidden shadow-sm cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // whileDrag={{ scale: 1.1, rotate: 5, zIndex: 100 }}
            // drag
            // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <div className="w-full h-36 relative overflow-hidden">
              <motion.div
                className="w-7 h-7 rounded-sm flex justify-center items-center absolute top-5 right-4 shadow-md"
                style={{ backgroundColor: tagBgColor }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                <Image src={tagIcon} alt={tags[0]} />
              </motion.div>
              <Image
                draggable={false}
                src={"https:" + project_img.fields.file.url}
                width={370}
                height={315}
                alt={project_img.fields.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 p-5">
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
