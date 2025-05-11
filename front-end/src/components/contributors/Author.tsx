export default function FounderSection() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">Founder</h2>
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex flex-col items-center text-center flex-auto max-w-[250px]">
          <img
            src="/contributors-founder.png"
            alt="Founder"
            className="w-64 h-64 object-cover rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">Nguyen Van A</h3>
          <div className="text-sm mt-3 space-y-2 flex flex-col items-start">
            <div className="text-start font-medium">📞 +123-456-7890</div>
            <div className="text-start font-medium">✉️ hello@reallygreatsite.com</div>
            <div className="text-start font-medium">📍 123 Anywhere St., Any City, ST 12345</div>
          </div>
        </div>

        <div className="text-gray-700 text-sm leading-relaxed flex-1">
          <p className="mb-4">
            Nguyen Van A is the Director of Smile Eye Charity. With a passion for community
            development, she has led numerous initiatives to improve the lives of underprivileged
            children. Her vision combines education, healthcare, and compassion to create a lasting
            impact.
          </p>
          <p>
            Through her leadership, Smile Eye Charity has grown from a small local effort to a
            global mission of hope. She believes that every child deserves a chance to smile, learn,
            and succeed, no matter where they come from.
          </p>
        </div>
      </div>
    </section>
  );
}
