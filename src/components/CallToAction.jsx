const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200 text-center  rounded-xl relative overflow-hidden md:w-auto w-11/12 mx-auto my-15">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 rounded-xl"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
            radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
          `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest mb-2 text-blue-800 font-semibold">
          এটাই তোমার ইংরেজিতে দক্ষ হওয়ার সময়!
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          আজই শুরু হোক তোমার ইংরেজি শেখার যাত্রা
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          একদম শুরু থেকে ধাপে ধাপে ইংরেজি শেখো বাংলায়, সহজ ও মজার উপায়ে।
        </p>
        <a
          href="/course/a1"
          className="inline-block border border-gray-400  text-gray-800 font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          📘 শেখা শুরু করো এখনই
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
