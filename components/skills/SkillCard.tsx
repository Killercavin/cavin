import Image from "next/image";
import { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import { skill } from "@/types/main";
import { useTheme } from "next-themes";

const Skill = ({ name, image }: skill) => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0.07)");

  useEffect(() => {
    const fac = new FastAverageColor();
    fac
      .getColorAsync(image)
      .then((color) => {
        const rgba = color.rgb.split(")");
        setBgColor(`${rgba[0]}, 0.07)`);
      })
      .catch(() => {
        setBgColor("rgba(0, 0, 0, 0.07)"); // Fallback background color
      });

    return () => fac.destroy(); // Cleanup
  }, [image]);

  const shouldInvert =
    theme === "dark" &&
    ["GitHub", "Vercel", "NextJS", "ExpressJS"].includes(name);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div
        title={name}
        style={{ backgroundColor: bgColor }}
        className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gray-100 dark:bg-grey-800 flex items-center justify-center"
      >
        <Image
          alt={`${name} logo`}
          width={100}
          height={100}
          className={`h-12 w-12 md:h-14 md:w-14 object-contain ${
            shouldInvert ? "invert" : ""
          }`}
          src={image}
        />
      </div>
      <p className="text-md font-semibold md:text-base">{name}</p>
    </div>
  );
};

export default Skill;