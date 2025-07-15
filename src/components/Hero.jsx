const Hero = () => {
  return (
    <div className="py-18 md:py-32 max-w-[800px]  relative bg-white w-11/12 mx-auto">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #8FFFB0, transparent)
          `,
        }}
      />
      <div className="relative z-10 text-center ">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-snug">
          ইংরেজি শেখা এখন সহজ ও আনন্দদায়ক
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          একসাথে শেখো Spoken English, Vocabulary আর Grammar — ঘরে বসেই।
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-full  ">
            আজই শুরু করুন
          </button>
          <button className="border border-black text-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
            আরও জানুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
