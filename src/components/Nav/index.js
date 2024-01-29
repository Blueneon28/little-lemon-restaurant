import React from 'react'
import Logo from '../../assets/Logo.svg'

function Nav() {
    return (
        <nav className="w-full bg-orange-100 rounded-2xl shadow-md justify-between items-center inline-flex px-9">
            <img className="h-20" alt="Logo" src={Logo} />
            <ul className="justify-start items-end gap-16 flex">
                <li className="text-center text-gray-600 text-2xl font-bold italic font-['Inter'] underline leading-9"><a href="/">Home</a></li>
                <li className="text-center text-gray-600 text-2xl font-medium italic font-['Inter'] leading-9"><a href="/">Reservation</a></li>
                <li className="text-center text-gray-600 text-2xl font-medium italic font-['Inter'] leading-9"><a href="/">Our Menu</a></li>
                <li className="text-center text-gray-600 text-2xl font-medium italic font-['Inter'] leading-9"><a href="/">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Nav