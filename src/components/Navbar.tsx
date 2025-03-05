'use client'
import { useState } from 'react'

import { LiaTimesSolid } from 'react-icons/lia'
import { IoMdMenu } from 'react-icons/io'
import { FaComputer } from "react-icons/fa6";
import {FaLaptop} from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [btnClicked, setBtnClicked] = useState<string>('')

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleBtnClicked = (buttonName: string) => {
        setBtnClicked(buttonName)
        if (isOpen) setIsOpen(false)  // Close menu on item click
    }

    // Define the nav links as an array of objects
    const navLinks = [
        { name: 'Home', path: '/', id: 'home' },
        { name: 'Community', path: '/community', id: 'community' },
        { name: 'Projects', path: '/projects', id: 'projects' },
        { name: 'Work', path: '/work', id: 'work' },
    ]

    return (
        <div
            className={`fixed top-0 w-full flex flex-col md:flex-row justify-between items-center p-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-50 ${isOpen && 'backdrop-blur-lg'}`}
        >
            <div className="flex justify-between items-center w-full">
                <FaComputer />
                <FaLaptop />

                {/* Mobile Menu Toggle Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <LiaTimesSolid size={24} /> : <IoMdMenu size={24} />}
                </button>
            </div>

            {/* Menu items (visible when menu is open or on large screens) */}
            <div
                className={`flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 ${isOpen ? 'flex justify-start w-full' : 'hidden'} md:flex`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        className={`p-2 rounded-3xl transition-colors hover:bg-opacity-30 ${
                            btnClicked === link.id ? 'border rounded-3xl' : ''
                        }`}
                        href={link.path}
                        onClick={() => toggleBtnClicked(link.id)}
                    >
                        <h1 className="flex font-bold items-center justify-center py-0 px-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                            {link.name}
                        </h1>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Navbar