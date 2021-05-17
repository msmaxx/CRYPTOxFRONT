import {Link} from "react-router-dom";


import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'

import Logo from '../assets/logo.png'
const navigation = ['Cryptocurrencies', 'Exchanges', 'Promote', 'Add new coin']

export default function Navbar() {
    return (
        <div>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center">
                                    <Link to='/'><div className="flex-shrink-0">
                                        <img
                                            className="h-8 w-8"
                                            src={Logo}
                                            alt="Workflow"
                                        />
                                    </div></Link>
                                    <Link to='/'><span className="font-medium text-white mx-2 cursor-pointer">CRYPTOx</span></Link>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navigation.map((item, itemIdx) =>
                                                itemIdx === 0 ? (
                                                    <Fragment key={item}>
                                                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                                        <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                                                            {item}
                                                        </a>
                                                    </Fragment>
                                                ) : (
                                                    <a
                                                        key={item}
                                                        href="#"
                                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                    >
                                                        {item}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navigation.map((item, itemIdx) =>
                                    itemIdx === 0 ? (
                                        <Fragment key={item}>
                                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                                                {item}
                                            </a>
                                        </Fragment>
                                    ) : (
                                        <a
                                            key={item}
                                            href="#"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            {item}
                                        </a>
                                    )
                                )}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

        </div>
    )
}
