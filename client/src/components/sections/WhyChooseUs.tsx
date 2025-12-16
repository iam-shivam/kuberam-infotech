export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-slate-700 hover:bg-slate-600 transition">
            <h3 className="text-xl font-semibold mb-3 text-white">Expert Team</h3>
            <p className="text-gray-300">Highly skilled developers with years of experience in modern web technologies.</p>
          </div>
          <div className="p-6 rounded-lg bg-slate-700 hover:bg-slate-600 transition">
            <h3 className="text-xl font-semibold mb-3 text-white">Quality Assured</h3>
            <p className="text-gray-300">We follow best practices and rigorous testing to deliver high-quality solutions.</p>
          </div>
          <div className="p-6 rounded-lg bg-slate-700 hover:bg-slate-600 transition">
            <h3 className="text-xl font-semibold mb-3 text-white">On-Time Delivery</h3>
            <p className="text-gray-300">Your projects are delivered on schedule without compromising quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
