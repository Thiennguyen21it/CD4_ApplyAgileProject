interface IProps {
    title: string,
    imgeUrl: string,
}

export default function AchivementItem({title, imgeUrl}: IProps) {
    return <div className="flex justify-center items-center">
    <div className="max-w-lg bg-white rounded-xl shadow-md  p-4 text-center w-full">
        <img
            src={imgeUrl} // Replace with actual image path
            alt="Children from Donbass"
            className="rounded-md w-full h-48 object-cover mb-4"
        />
        <h3 className="text-lg font-medium text-gray-900 mb-4">
            {title}
        </h3>
        <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md">
            View More
        </button>
    </div>
</div>
}