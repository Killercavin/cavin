import { social } from "@/types/main";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import * as Fa from "react-icons/fa";

type Social = {
  link: string;
  icon: keyof typeof Fa;
};

export default function Footer({ socials, name }: { socials: Social[]; name: string }) {
  const { resolvedTheme } = useTheme();

  const renderedSocials = useMemo(
    () =>
      socials.map((s) => ({
        ...s,
        Component: Fa[s.icon],
      })),
    [socials]
  );

  return (
    <footer className="w-full bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300">
      <div className="xl:max-w-6xl mx-auto py-4 lg:py-6 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between items-center">
        <p className="text-md mt-2 md:mt-0 font-semibold text-base">
          &copy; <span className="animate-pulse">{new Date().getFullYear()}</span> |{" "}
          <span className="text-violet-600">{name}</span>
        </p>

        <div className="hidden xl:flex items-center gap-2">
          <Link href="https://nextjs.org" target="_blank" aria-label="Next.js">
            <Image
              alt="Next.js"
              width={45}
              height={45}
              src="/nextjs.svg"
              loading="lazy"
              className={`${resolvedTheme === "dark" ? "invert" : "invert-0"} opacity-80 hover:opacity-100 transition-opacity`}
            />
          </Link>
          <span className="text-sm">|</span>
          <Link href="https://vercel.com" target="_blank" aria-label="Vercel">
            <Image
              alt="Vercel"
              width={52}
              height={52}
              src="/vercel.svg"
              loading="lazy"
              className={`${resolvedTheme === "dark" ? "invert" : "invert-0"} opacity-80 hover:opacity-100 transition-opacity`}
            />
          </Link>
        </div>

        <div className="flex xl:hidden items-center gap-2">
          {renderedSocials.map(({ link, Component }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer"
              key={link}
              aria-label={`Link to ${link}`}
              className="grid place-items-center p-3 rounded-full text-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <Component />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
