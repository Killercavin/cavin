import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { icon: <DiGithubBadge />, url: "https://www.github.com/Killercavin", name: "Github" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/killercavin/", name: "LinkedIn" },
    { icon: <FaInstagramSquare />, url: "https://www.instagram.com/killer_cavin", name: "Instagram" },
    { icon: <FaSquareXTwitter />, url: "https://www.twitter.com/Killercavin", name: "Twitter" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@Killercvin", name: "YouTube" },
  ];

  return (
      <div className="py-6">
        <div className="innerFooter flex flex-col md:flex-row justify-between items-center px-6">
          {/* Footer Icons */}
          <div className="footerIcons flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    className="text-lg hover:text-blue-950 transition-colors" // Increased icon size to text-2xl
                    aria-label={link.name}
                >
                  {link.icon}
                </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center font-semibold md:text-right">
            <p>&copy; {new Date().getFullYear()} CALATECH. All rights reserved.</p>
          </div>
        </div>
      </div>
  );
}

export default Footer;