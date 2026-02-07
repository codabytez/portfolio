"use client";
import { NextPage } from "next";
import twitter from "@/public/twitter-fill.svg";
import linkedin from "@/public/linkedin-fill.svg";
import github from "@/public/github-fill.svg";
import Image from "next/image";
import Link from "next/link";
import { PAGES, SOCIALS } from "@/constants";
import { usePathname } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Footer: NextPage = () => {
  const pathname = usePathname();
  const isHome = pathname === PAGES.HOME;

  // Fetch settings data to ensure we have the latest info for social links or other dynamic content in the footer
  const socials = useQuery(api.queries.getSettings);
  const isSocialsLoading = socials === undefined;
  const isSocialsError = socials === null;

  return (
    <footer
      className={`w-full min-h-[50px] ${
        isHome ? "hidden lg:flex" : "flex"
      } flex items-stretch border-t border-line`}
    >
      <div className="flex items-stretch flex-1 justify-between sm:justify-start">
        <p className="px-5 self-stretch flex items-center text-code-snippet sm:text-base">
          Find me on:
        </p>
        <div className="flex items-center">
          {isSocialsLoading ? (
            <>
              {Array(2)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="px-3.5 shrink-0 hover:opacity-40 border-x border-line self-stretch flex items-center"
                  >
                    <div className="w-5 h-5 bg-gray-300 rounded-sm animate-pulse" />
                  </div>
                ))}
            </>
          ) : isSocialsError ? (
            <>
              <p className="px-3.5 shrink-0 hover:opacity-40 border-x border-line self-stretch flex items-center text-red-500">
                Error loading socials
              </p>
            </>
          ) : (
            <>
              <Link
                href={socials?.twitter || SOCIALS.TWITTER}
                className="px-3.5 shrink-0 hover:opacity-40 border-x border-line self-stretch flex items-center"
                target="_blank"
              >
                <Image src={twitter} alt="twitter" className="shrink-0" />
              </Link>

              <Link
                href={socials?.linkedin || SOCIALS.LINKEDIN}
                className="px-3.5 shrink-0 hover:opacity-40 sm:border-r border-line self-stretch flex items-center"
                target="_blank"
              >
                <Image src={linkedin} alt="linkedin" className="shrink-0" />
              </Link>
            </>
          )}
        </div>
      </div>

      <Link
        href={socials?.github || SOCIALS.GITHUB}
        className="py-3 px-6 shrink-0 hover:opacity-40 border-l border-line self-stretch flex gap-2"
        target="_blank"
      >
        <p className="hidden sm:block">@codabytez</p>
        <Image src={github} alt="github" className="shrink-0" />
      </Link>
    </footer>
  );
};

export default Footer;
