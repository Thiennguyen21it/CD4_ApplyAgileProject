const sponsors = [
  {
    name: "Nguyen Van A",
    role: "Global HR Manager",
    company: "Cortex Textile Ltd.",
    location: "China, Vietnam, US",
    website: "www.cortextextile.com",
    image: "/sponsor-1.png",
  },
  {
    name: "Nguyen Van A",
    role: "Global HR Manager",
    company: "Cortex Textile Ltd.",
    location: "China, Vietnam, US",
    website: "www.cortextextile.com",
    image: "/sponsor-2.png",
  },
  {
    name: "Nguyen Van A",
    role: "Global HR Manager",
    company: "Cortex Textile Ltd.",
    location: "China, Vietnam, US",
    website: "www.cortextextile.com",
    image: "/sponsor-3.png",
  },
  {
    name: "Nguyen Van A",
    role: "Global HR Manager",
    company: "Cortex Textile Ltd.",
    location: "China, Vietnam, US",
    website: "www.cortextextile.com",
    image: "/sponsor-1.png",
  },
  {
    name: "Nguyen Van A",
    role: "Global HR Manager",
    company: "Cortex Textile Ltd.",
    location: "China, Vietnam, US",
    website: "www.cortextextile.com",
    image: "/sponsor-2.png",
  },
  {
    name: "Nguyen Van A",
    role: "Global HR Manager",
    company: "Cortex Textile Ltd.",
    location: "China, Vietnam, US",
    website: "www.cortextextile.com",
    image: "/sponsor-3.png",
  },
];

export default function SponsorsSection() {
  return (
    <section className="w-full mx-auto p-[100px]">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">Sponsors</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-2">
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-56 h-56 object-cover rounded-full"
            />
            <h3 className="font-semibold">{sponsor.name}</h3>
            <p className="text-sm text-gray-600">{sponsor.role}</p>
            <p className="text-sm text-gray-600">{sponsor.company}</p>
            <p className="text-sm text-gray-600">{sponsor.location}</p>
            <a
              href={`https://${sponsor.website}`}
              className="text-green-600 underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {sponsor.website}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
