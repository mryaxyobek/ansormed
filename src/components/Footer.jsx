import React from 'react';
import logo from '../assets/images/site-logo.svg';

const footer = () => {
    return (
        <footer className="py-5 bg-[#222]">
            <div className="container flex justify-between items-center text-white">
                <a href="index.html" className='flex items-center text-2xl font-semibold'>
                    <img width={50} height={50} className="mr-4" src={logo} alt="site logo" />
                    AnsorMed
                </a>
                <nav>
                    <ul className="flex items-center space-x-8">
                        <li className="">
                            <a href="#" className="tleading-5 text-sm font-bold">Xizmatlar</a>
                        </li>
                        <li className="">
                            <a href="#" className="tleading-5 text-sm font-bold">Dorilar</a>
                        </li>
                        <li className="">
                            <a href="#" className="tleading-5 text-sm font-bold">asal</a>
                        </li>
                        <li className="">
                            <a href="#" className="tleading-5 text-sm font-bold">Kontaktlar</a>
                        </li>
                        <li className="">
                            <a href="#" className="tleading-5 text-sm font-bold">Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default footer