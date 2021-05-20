import {RiSendPlaneLine} from 'react-icons/ri';

export default function AddNewCoin() {
    return (
        <div className="py-6 px-6 md:py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Add new coin</h1>
            </div>

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add your coin in
                            our platform!</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Send us an application for
                            consideration to add your coin to our system.</p>

                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">! TEMPORARILY SUSPENDED !</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Coin Name</label>
                                    <input type="text" id="name" name="name"
                                           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="symbol" className="leading-7 text-sm text-gray-600">Symbol</label>
                                    <input type="text" id="symbol" name="symbol"
                                           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="contract" className="leading-7 text-sm text-gray-600">Contract
                                        Addres</label>
                                    <input type="text" id="contract" name="contract"
                                           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="date" className="leading-7 text-sm text-gray-600">Launch
                                        Date</label>
                                    <input type="text" id="date" name="date"
                                           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="date" className="leading-7 text-sm text-gray-600">Website
                                        Link</label>
                                    <input type="text" id="website" name="website"
                                           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="date" className="leading-7 text-sm text-gray-600">Telegram
                                        Link</label>
                                    <input type="text" id="telegram" name="telegram"
                                           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Other
                                        Information (Description and etc..)</label>
                                    <textarea id="message" name="message"
                                              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    className="items-center flex mx-auto text-white bg-purple-300 border-0 py-2 px-6 text-purple-800 focus:outline-none hover:bg-purple-400 rounded text-lg">
                                    <RiSendPlaneLine/>
                                    <span className="mx-2">Send a request</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
