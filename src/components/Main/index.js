import React from 'react'
import Logo from '../../assets/Logo.svg'
import HeroImage from '../../assets/hero-image.jpg'

function Main() {
    return (
        <main>
            <section className="w-full py-4 px-24 bg-white justify-between items-start inline-flex">
                <article className="flex-col justify-center items-start gap-10 inline-flex">
                    <h1 className="text-gray-600 text-4xl font-bold italic font-['Inter'] leading-10">Welcome to<br />Little Lemon Restaurant</h1>
                    <p className="w-96 font-medium italic font-['Inter']">Reservation Made Simple,<br /><strong className="text-yellow-400 italic font-[' Inter']">Book your table effortlessly</strong> and secure your spotfor an exceptional dining adventure.<br /><br />Whether it's a romantic date or a gathering with friends, we've got you covered.</p>
                    <button className="w-80 px-12 py-4 bg-gray-600 rounded-2xl justify-start items-center gap-7 inline-flex">
                        <h2 className="text-white text-2xl font-medium font-['Inter'] italic leading-9">Reserve table now</h2>
                    </button>
                </article>
                <img className="w-96 h-96 rounded-2xl" src={HeroImage} alt="image-hero" />
            </section>
            <section className="w-full h-full bg-green-900 py-20 px-28">
                <article className="flex-col gap-10 inline-flex">
                    <h1 className="text-yellow-400 text-4xl font-bold font-['Inter'] leading-10 italic">New Branch Restaurant</h1>
                    <section className="flex gap-10 items-center justify-center">
                        <article className="p-4 bg-white bg-opacity-60 rounded-2xl flex-col justify-center items-center gap-10 inline-flex">
                            <section className="flex-col justify-center items-center gap-4 flex">
                                <img className="h-20" alt="Logo" src={Logo} />
                                <h3 className="w-64 my-3 text-center text-black text-2xl font-bold font-['Inter'] leading-9">Menteng, Jakarta</h3>
                            </section>
                            <p className="w-80 text-center text-black text-2xl font-medium font-['Inter'] leading-9 italic">Fresh concept, ready to serve delicious meals!</p>
                            <button className="px-12 py-4 bg-gray-600 rounded-2xl justify-start items-center gap-7 inline-flex">
                                <p className="text-white text-2xl font-medium font-['Inter'] leading-9 italic">See Details</p>
                            </button>
                        </article>
                        <article className="p-4 bg-white bg-opacity-60 rounded-2xl flex-col justify-center items-center gap-10 inline-flex">
                            <section className="flex-col justify-center items-center gap-4 flex">
                                <img className="h-20" alt="Logo" src={Logo} />
                                <h3 className="w-64 my-3 text-center text-black text-2xl font-bold font-['Inter'] leading-9">Menteng, Jakarta</h3>
                            </section>
                            <p className="w-80 text-center text-black text-2xl font-medium font-['Inter'] leading-9 italic">Fresh concept, ready to serve delicious meals!</p>
                            <button className="px-12 py-4 bg-gray-600 rounded-2xl justify-start items-center gap-7 inline-flex">
                                <p className="text-white text-2xl font-medium font-['Inter'] leading-9 italic">See Details</p>
                            </button>
                        </article>
                        <article className="p-4 bg-white bg-opacity-60 rounded-2xl flex-col justify-center items-center gap-10 inline-flex">
                            <section className="flex-col justify-center items-center gap-4 flex">
                                <img className="h-20" alt="Logo" src={Logo} />
                                <h3 className="w-64 my-3 text-center text-black text-2xl font-bold font-['Inter'] leading-9">Menteng, Jakarta</h3>
                            </section>
                            <p className="w-80 text-center text-black text-2xl font-medium font-['Inter'] leading-9 italic">Fresh concept, ready to serve delicious meals!</p>
                            <button className="px-12 py-4 bg-gray-600 rounded-2xl justify-start items-center gap-7 inline-flex">
                                <p className="text-white text-2xl font-medium font-['Inter'] leading-9 italic">See Details</p>
                            </button>
                        </article>
                    </section>
                </article>
            </section>
        </main>
    )
}

export default Main