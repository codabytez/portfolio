import { NextPage } from "next";
import Image from "next/image";
import detail from "@/public/details.svg";
import message from "@/public/message.svg";
import close from "@/public/close.svg";
import Link from "next/link";
import { duotoneSpace } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CodeBlock from "../code-block";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceStrict } from "date-fns";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import SnippetSkeleton from "./snippet-skeleton";

const contentVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2, // Animate children with a delay
    },
  },
};

const fetchGistFileContent = async (gist: IMyGistsResponse) => {
  if (!gist || !gist.files) {
    return null;
  }

  const firstFile = Object.keys(gist.files)[0];
  const response = await axios.get(gist.files[firstFile].raw_url);
  return response.data;
};

const CodeSnippet: NextPage<{
  gist: IMyGistsResponse;
}> = ({ gist }) => {
  const { data: fileContent, isLoading } = useQuery({
    queryKey: ["gistFileContent", gist],
    queryFn: () => fetchGistFileContent(gist),
    enabled: !!gist,
  });

  const [showDetails, setShowDetails] = useState(false);
  const code = `${fileContent}`;

  return (
    <motion.div
      className="flex flex-col gap-5 w-full max-w-[660px]"
      variants={contentVariants}
      initial="initial"
      animate="animate"
    >
      {isLoading ? (
        <SnippetSkeleton />
      ) : (
        <>
          <div className="flex flex-col gap-3 max-w-full">
            <div className="flex justify-between gap-3 sm:gap-5">
              <div className="flex gap-3 items-center">
                <div className="rounded-full w-9 h-9 bg-[#C4C4C4]/40 shrink-0 overflow-hidden">
                  <Image
                    src={gist.owner.avatar_url}
                    alt="avatar"
                    className="rounded-full size-full"
                    width={36}
                    height={36}
                  />
                </div>
                <div className="flex flex-col">
                  <Link
                    href={gist.owner.html_url}
                    className="text-[#5565E8] text-code-snippet font-bold hover:opacity-60 w-max"
                  >
                    @{gist.owner.login}
                  </Link>
                  <p className="text-secondary-100 font-medium text-xs">
                    Created{" "}
                    {formatDistanceStrict(
                      new Date(gist.created_at),
                      new Date(),
                      {
                        addSuffix: true,
                      },
                    )}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 sm:gap-5 flex-col sm:flex-row">
                <button
                  className="flex gap-2 items-center w-max h-max text-code-snippet hover:text-secondary-400"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  <Image src={detail} alt="detail" />
                  details
                </button>

                <Link
                  className="flex gap-2 items-center w-max h-max text-code-snippet hover:text-secondary-400"
                  href={gist.html_url}
                  target="_blank"
                >
                  <Image src={message} alt="message" />
                  {gist.comments} comments
                </Link>
              </div>
            </div>

            <div className="">
              <CodeBlock
                code={code}
                backgroundColor="#011221"
                borderRadius="1rem"
                padding="24px 30px"
                showLineNumbers={false}
                style={duotoneSpace}
                language={gist.files[
                  Object.keys(gist.files)[0]
                ].language.toLowerCase()}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: showDetails ? 1 : 0,
              y: showDetails ? 0 : 20,
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex flex-col gap-4 ${
              showDetails ? "" : "pointer-events-none"
            }`}
          >
            <div className="w-full h-[1px] bg-line" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: showDetails ? 1 : 0,
                y: showDetails ? 0 : 20,
              }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="flex justify-between gap-5"
            >
              <p className="max-w-[515px] text-code-snippet font-medium">
                {gist.description}
              </p>
              <button
                className="hover:opacity-40 w-max h-max"
                onClick={() => setShowDetails(false)}
              >
                <Image src={close} alt="close" />
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default CodeSnippet;
