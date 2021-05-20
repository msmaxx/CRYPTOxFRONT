import {Link} from "react-router-dom";

import nightwind from "nightwind/helper"
import { RiMoonLine } from 'react-icons/ri';

import {Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

import Logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <div>
            <Disclosure as="nav" className="bg-gray-100">
                {({open}) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center">
                                    <Link to='/'>
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src={Logo}
                                            />
                                        </div>
                                    </Link>
                                    <Link to='/'><span className="font-medium text-gray-800 mx-2 cursor-pointer hover:text-purple-900">CRYPTOx</span></Link>

                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">

                                            <Link to="/"><a href="#"
                                               className="text-gray-800 hover:bg-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                                                Cryptocurrencies
                                            </a></Link>
                                            <Link to='/promote'><a href="#"
                                               className="text-gray-800 hover:bg-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                                                Promote
                                            </a></Link>
                                            <Link to="/add-new-coin/"><a href="#"
                                               className="text-gray-800 hover:bg-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                                                Add New Coin
                                            </a></Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                <button onClick={() => eval(nightwind.toggle())} className="text-gray-500 hover:bg-gray-200 hover:text-gray-500 inline-flex px-3 py-2 mx-3 rounded-md text-base font-medium items-center">
                                    <RiMoonLine size={20}/>
                                </button>
                                </div>

                                <div className="-mr-2 flex md:hidden">
                                    <button onClick={() => eval(nightwind.toggle())} className="text-gray-500 hover:bg-gray-200 hover:text-gray-500 inline-flex px-3 py-2 mx-3 rounded-md text-base font-medium items-center">
                                        <RiMoonLine size={20}/>
                                    </button>
                                    {/* Mobile menu button */}
                                    <Disclosure.Button
                                        className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>


                        <Disclosure.Panel className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                                <Link to="/"><a href="#" className="text-gray-500 hover:bg-gray-200 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium">
                                    Cryptocurrencies
                                </a></Link>
                                <Link to="/promote/"><a href="#" className="text-gray-500 hover:bg-gray-200 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium">
                                    Promote
                                </a></Link>
                                <Link to="/add-new-coin/"><a href="#" className="text-gray-500 hover:bg-gray-200 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium">
                                    Add New Coin
                                </a></Link>

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

        </div>
    )
}
