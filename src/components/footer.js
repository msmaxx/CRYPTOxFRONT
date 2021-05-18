import { RiTelegramLine } from 'react-icons/ri';


const contractDonate = "0x5E5C7471F73935F7B99bDaaE526a083d8461E117"

export default function Footer() {

return(
    <footer className="bg-gray-800 text-gray-300 px-6 lg:px-8 py-5">
        <div
            className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-16 lg:mt-20 border-t-2 border-gray-700 pt-8 ">
            <div className="text-sm space-y-4 md:space-y-1 text-center md:text-left">
                <p className="font-bold">You can donate funds for the development of the project, your support is very important to us, your project can be in promoted coins!</p>
                <p className="font-bold text-lg cursor-pointer" onClick={() => {
                    navigator.clipboard.writeText(contractDonate)
                }} >0x5E5C7471F73935F7B99bDaaE526a083d8461E117</p>
                <p>&copy; 2021 CRYPTOx. All rights reserved.</p>

            </div>
        </div>
        <div
            className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 lg:mt-12">
            <nav className="flex items-center space-x-2">
                <a href="https://t.me/cryptox_info" className="hover:text-gray-100">
                    <span className="sr-only">Telegram</span>
                    <RiTelegramLine size="50"/>
                </a>
            </nav>
        </div>
    </footer>
)
}