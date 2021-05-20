import { ImTelegram } from 'react-icons/im';
import {Link} from "react-router-dom";
import Logo from "../assets/logo.png";


const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


const contractDonate = "0x5E5C7471F73935F7B99bDaaE526a083d8461E117"

export default function Footer() {
return(
    <footer className="bg-gray-100">
        <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex">
                <div className="w-full -mx-6 lg:w-2/5">
                    <div className="px-6">
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
                        </div>

                        <p className="max-w-md mt-2 text-gray-800">Community service for reviewing new popular crypto projects, coins and tokens.</p>

                        <div className="flex mt-4 -mx-2">
                            <button onClick={() => openInNewTab("https://t.me/cryptox_info")} className="text-gray-500 hover:bg-gray-200 hover:text-gray-500 inline-flex px-3 py-2 mx-3 rounded-md text-base font-medium items-center">
                                <ImTelegram size={20}/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className=" mt-6 lg:mt-0 lg:flex-1">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">

                        <div>
                            <h3 className="uppercase text-gray-800">Donate</h3>
                            <span className="max-w-md mt-2 text-sm text-gray-700">If you want to support this project, you can send any amount to the development of this platform:</span>
                            <span
                                className="block mt-2 text-sm text-gray-800 font-bold">{contractDonate}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px my-6 border-none bg-gray-400">
                <div>
                    <p className="text-sm text-center py-2 text-gray-500 font-light">© CRYPTOx 2021 - All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    )
}