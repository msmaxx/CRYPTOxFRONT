import GetVotingButtons from "../voting/getVotingButtons";

export default function PageBody({ name, descrption }) {
    return (
        <div>
            <div class="my-6 lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="my-4 sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About {name}</h1>
                <div class="h-1 w-20 bg-purple-200 rounded"/>
            </div>
            <p class="my-4 lg:w-1/2 w-full leading-relaxed text-gray-500">{descrption}</p>
        </div>
    )
}