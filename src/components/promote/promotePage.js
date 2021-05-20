import {ImTelegram} from 'react-icons/im';
import promoteImage from '../../assets/promote.jpg'


const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export default function PromotePage() {
    return (
        <div className="py-6 px-6 md:py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Promote your coin</h1>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-contain h-60 w-full object-cover object-center rounded" alt="hero"
                             src={promoteImage}/>
                    </div>
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Promote Your
                            Project</h1>
                        <p className="mb-8 leading-relaxed">Want to promote your coin so everyone knows about it? You
                            have the opportunity to be
                            in the first place in the table of promoted coins and tokens, ahead of all other coins!</p>
                        <div className="flex justify-center">
                            <button onClick={() => openInNewTab(`http://t.me/cryptox_admin`)}
                                    className="items-center inline-flex text-white bg-purple-300 border-0 py-2 px-6 text-purple-800 focus:outline-none hover:bg-purple-400 rounded text-lg">
                                <ImTelegram/>
                                <span className="mx-2">Write to us</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
