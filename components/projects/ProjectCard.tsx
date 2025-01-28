import { project } from "@/types/main";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaVideo } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

const Project = ({ name, image, category, techstack, links }: project) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Helper function to render action buttons
  const renderActionButton = (href: string, label: string, Icon: React.ElementType) => (
    <Link
      href={href}
      target="_blank"
      className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
      aria-label={label}
    >
      <Icon size={20} />
    </Link>
  );

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col gap-2 bg-white dark:bg-grey-800 rounded-lg p-4 shadow-md"
    >
      {/* Image Section with Hover Overlay */}
      <div className="relative group rounded-lg bg-violet-50 overflow-hidden">
        <Image
          alt={`${name} project thumbnail`}
          width={1000}
          height={1000}
          className="max-w-full h-48 max-h-full object-cover object-top rounded-lg"
          src={image || "/default-thumbnail.png"} // Fallback for missing image
        />
        {(links?.visit || links?.code || links?.video) && (
          <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
            {links.visit && renderActionButton(links.visit, `Visit ${name} site`, BiLinkExternal)}
            {links.code && renderActionButton(links.code, `View ${name} code on GitHub`, FaGithub)}
            {links.video && renderActionButton(links.video, `Watch ${name} demo`, FaVideo)}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="my-2 flex flex-col gap-3">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Tech Stack:</span> {techstack || "N/A"}
        </p>
      </div>
    </motion.div>
  );
};

export default Project;