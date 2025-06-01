'use client';
import { useState, useEffect, useMemo } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaRust } from 'react-icons/fa';
import { CgClose, CgMenuRight } from 'react-icons/cg';

export default function Header({ logo }: { logo: string }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navs = useMemo(() => ['home', 'about', 'projects', 'experience', 'contact'], []);

  const navLinks = useMemo(
    () =>
      navs.map((e) => (
        <ScrollLink
          key={e}
          className="font-bold hover:text-violet-700 hover:dark:text-violet-500 transition-colors capitalize cursor-pointer"
          to={e}
          offset={-60}
          smooth
          duration={500}
          isDynamic
        >
          {e}
        </ScrollLink>
      )),
    [navs]
  );

  return (
    <header
      className={`fixed z-30 w-full backdrop-filter backdrop-blur-lg ${
        isScrolled ? 'border-b bg-white bg-opacity-40' : 'border-b-0'
      } dark:bg-gray-900 dark:bg-opacity-40 border-gray-200`}
    >
      {/* Desktop Navigation */}
      <nav className="lg:w-11/12 2xl:w-4/5 w-full mx-auto py-4 hidden sm:flex items-center justify-between">
        <Link
          href="/"
          className="2xl:ml-6 hover:text-violet-700 hover:dark:text-violet-500 transition-colors duration-300"
        >
          {logo === 'Cavin Larry' ? <FaRust size={28} /> : <span className="text-lg font-medium">{logo.split(' ')[0]}</span>}
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks}
          <span
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:bg-gray-100 hover:dark:bg-violet-700 p-1.5 rounded-full cursor-pointer transition-colors"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </span>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="p-4 flex sm:hidden items-center justify-between">
        {logo === 'Cavin Larry' ? <FaRust size={28} /> : <span className="text-lg font-medium">{logo.split(' ')[0]}</span>}
        <div className="flex items-center gap-4">
          <span
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="bg-gray-100 dark:bg-violet-700 p-1.5 rounded-full cursor-pointer transition-colors"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </span>
          <CgMenuRight size={20} onClick={() => setIsNavOpen(true)} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 flex transition-transform ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="w-1/4" onClick={() => setIsNavOpen(false)}></div>
        <div className="flex flex-col p-4 gap-5 bg-gray-100/95 backdrop-filter backdrop-blur-sm dark:bg-gray-900/95 w-3/4">
          <CgClose className="self-end my-2" size={20} onClick={() => setIsNavOpen(false)} />
          {navs.slice(0, 4).map((e) => (
            <ScrollLink
              key={e}
              className="hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer"
              to={e}
              offset={-60}
              smooth
              duration={500}
              isDynamic
              onClick={() => setIsNavOpen(false)}
            >
              {e}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            offset={-60}
            smooth
            duration={500}
            onClick={() => setIsNavOpen(false)}
            className="px-6 py-1.5 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-center"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </header>
  );
}
