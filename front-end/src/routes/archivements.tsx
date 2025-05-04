import placeholderImage from '../assets/achivement-section.png';
import AchivementItem from '../components/achivements/AchivementItem';
import Stats from '../components/achivements/Stats';

export default function Archivement() {
    const stats = [
        { count: "15k+", label: "People", sublabel: "Prevention of Cruelty" },
        { count: "145+", label: "Society", sublabel: "Direct relief" },
        { count: "50k+", label: "Project", sublabel: "Research hospital" },
    ];
    return <>
        <section className="relative rounded-xl p-[50px] overflow-visible max-h-[400px] bg-green-100">
            <div className="z-[1] max-w-4xl mx-auto gap-8 items-center">
                <div>
                    <p className="text-sm font-medium uppercase text-gray-600 mb-2">What we do</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 max-w-3/4">
                        Whatever it is that you care about, there will be a charity working on it.
                        Charities <span className="underline">help in lots</span> of different ways
                    </h2>
                    <div className="w-full flex">
                        <p className="text-gray-700 max-w-md flex-2/3">
                            The practice of charity means the voluntary giving of help to those in need, as a humanitarian act. There are a number of philosophies.
                        </p>
                        <div className="relative flex-1/3">
                            <img
                                src={placeholderImage}
                                alt="Smiling children"
                                className="rounded-md object-cover w-full h-auto"
                            />
                        </div></div>
                </div>

            </div>
        </section>
        <section className="mt-[100px] p-[50px] grid grid-cols-1 md:grid-cols-2 gap-8">
            <AchivementItem
                title="Children from Donbass support program in Ukraine"
                imgeUrl="/activity1.png"
            />
            <AchivementItem
                title="Children from Donbass support program in Ukraine"
                imgeUrl="/activity3.png"
            />
            <AchivementItem
                title="Children from Donbass Children from Donbass support program in Ukraine"
                imgeUrl="/activity2.png"
            />
            <AchivementItem
                title="Children from Donbass Children from Donbass support program in Ukraine"
                imgeUrl="/activity4.png"
            />
            <AchivementItem
                title="Children from Donbass support program in Ukraine"
                imgeUrl="/activity1.png"
            />
            <AchivementItem
                title="Children from Donbass support program in Ukraine"
                imgeUrl="/activity3.png"
            />
            <AchivementItem
                title="Children from Donbass Children from Donbass support program in Ukraine"
                imgeUrl="/activity2.png"
            />
            <AchivementItem
                title="Children from Donbass Children from Donbass support program in Ukraine"
                imgeUrl="/activity4.png"
            />
        </section>
        <section className='px-[50px]'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto my-12">
                {stats.map((stat, index) => (
                   <Stats
                        key={index}
                        count={stat.count}
                        label={stat.label}
                        sublabel={stat.sublabel}
                   />
                ))}
            </div>
        </section>
    </>
}