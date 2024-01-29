import React from 'react'
import Logo from '../../assets/Logo.svg'

function Footer() {
    return (
        <footer className="w-full h-80 bg-white flex-col justify-center items-center gap-14 inline-flex">
            <img className="h-20" alt="Logo" src={Logo} />
            <section className="justify-evenly items-start gap-4 inline-flex">
                <h3 className="text-gray-600 text-2xl font-bold font-['Inter'] leading-9">littlelemonrestaurant.com</h3>
                <p className="w-9 h-px origin-top-left rotate-90 border border-gray-600"></p>
                <h3 className="text-gray-600 text-2xl font-bold font-['Inter'] leading-9">All Rights Reserved.</h3>
            </section>
        </footer>
    )
}

export default Footer