import FounderSection from "../components/contributors/Author";
import SponsorsSection from "../components/contributors/Sponsors";

export default function Contributors() {
    return (
        <>
            <section className="relative h-[400px] w-full">
                <img
                    src="/contributors-banner.jpg"
                    alt="Smiling children"
                    className="absolute inset-0 object-cover w-full h-full rounded-md"
                />
                <div className="absolute bg-black/35 top-10 left-0 bottom-10 right-20" />
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white text-4xl font-bold gap-3">
                    <h4 className="text-7xl font-bold text-white">About us</h4>
                    <h4 className="text-2xl font-medium text-white text-center">Pure love is amazing essence of each human which the more
                        <br /> we give it to others, the happier we feel.</h4>
                </div>

            </section>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center bg-white p-8 shadow-lg rounded-2xl px-2 md:px-12 mx-auto space-y-6 md:space-y-0">
                <img
                    src="/contributors-1.png"
                    alt="Smiling children"
                    className="w-full md:w-1/2 rounded-lg object-cover"
                />

                <div className="text-left md:w-1/2">
                    <div className="flex items-center mb-4">
                        <div className="text-4xl mr-3">😊</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Smile Eye Charity
                        </h2>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                        “Smile Eye Charity is dedicated to bringing joy and
                        education to underprivileged children across the globe.
                        Through community outreach, school programs, and health
                        initiatives, we aim to create brighter futures one smile
                        at a time. Every donation helps provide essential
                        resources like books, meals, and medical care. Join us
                        in spreading hope and happiness — because every child
                        deserves the chance to thrive.”
                    </p>

                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-6 rounded-xl shadow-md transition">
                        Read more
                    </button>
                </div>
            </div>
            <FounderSection />
            <SponsorsSection />
        </>
    )
}