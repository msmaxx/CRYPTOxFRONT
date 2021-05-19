import { ImTelegram } from 'react-icons/im';

const contractDonate = "0x5E5C7471F73935F7B99bDaaE526a083d8461E117"

export default function Footer() {

return(

    <footer className="bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex">
                <div className="w-full -mx-6 lg:w-2/5">
                    <div className="px-6">
                        <div>
                            <a href="#"
                               className="text-white hover:text-gray-300">CRYTPOx</a>
                        </div>

                        <p className="max-w-md mt-2 text-gray-400">Community service for reviewing new popular crypto projects, coins and tokens.</p>

                        <div className="flex mt-4 -mx-2">
                            <a href="https://t.me/cryptox_info"
                               className="mx-2 text-gray-200 hover:text-gray-400"
                               aria-label="Telegram">
                                <ImTelegram size="20"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" mt-6 lg:mt-0 lg:flex-1">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">

                        <div>
                            <h3 className="uppercase text-white">Donate</h3>
                            <span className="block mt-2 text-sm text-gray-400">If you want to support this project, you can send any amount to the development of this platform! (Donations increase the chance of getting into promoted coins :))</span>
                            <span
                                className="block mt-2 text-sm text-gray-400 font-bold">{contractDonate}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px my-6 border-none bg-gray-700">
                <div>
                    <p className="text-sm text-center py-2 text-white font-light">© CRYPTOx 2021 - All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    )
}