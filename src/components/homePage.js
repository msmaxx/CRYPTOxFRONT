import DisplayPromotedCoinsTable from "./promotedCoins/displayPromotedCoinsTable";
import DisplayBestCoinTable from "./bestCoins/displayBestCoinTable";


export default function HomePage() {
    return (

        <div className="py-6 px-6 md:py-12 bg-gray-50">
            <div className="container mx-auto my-5">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex-1 min-w-0 my-6">
                        <h2 className="text-lg font-medium leading-7 text-gray-900 sm:text-3xl sm:truncate">Today's
                            promoted coins</h2>
                    </div>
                </div>
                <DisplayPromotedCoinsTable/>
            </div>

            <div className="container mx-auto my-5">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex-1 min-w-0 my-6">
                        <h2 className="text-lg font-medium leading-7 text-gray-900 sm:text-3xl sm:truncate">Best
                            coins</h2>
                    </div>
                </div>
                <DisplayBestCoinTable/>
            </div>
        </div>
    )
}