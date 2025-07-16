import {
  FaLanguage,
  FaChalkboardTeacher,
  FaBookOpen,
  FaVolumeUp,
} from "react-icons/fa";

const WhyEnglishZone = () => {
  const features = [
    {
      icon: <FaLanguage className="text-4xl text-red-600" />,
      title: "Easy Bangla Explanation",
      desc: "ইংরেজি শেখা হচ্ছে একদম বাংলায় সহজ ভাষায়।",
      bgHex: "#F8E6E1", // Tailwind class
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-green-600" />,
      title: "Step-by-Step Lessons",
      desc: "A1 লেভেল অনুযায়ী ধাপে ধাপে শেখার সুযোগ।",
      bgHex: "#8FFFB0", // Custom HEX
    },
    {
      icon: <FaBookOpen className="text-4xl text-yellow-600" />,
      title: "Vocabulary & Grammar",
      desc: "প্রতিদিন নতুন শব্দ ও সহজ গ্রামার প্র্যাকটিস।",
      bgHex: "#FDF8D6",
    },
    {
      icon: <FaVolumeUp className="text-4xl text-blue-600" />,
      title: "Listening & Speaking",
      desc: "Listening ও Speaking স্কিলে উন্নতির ব্যবস্থা।",
      bgHex: "#DBEAFE",
    },
  ];

  return (
    <section className="mt-15">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">কেন EnglishZone?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-md shadow-sm hover:shadow-lg transition duration-300"
              style={item.bgHex ? { backgroundColor: item.bgHex } : {}}
            >
              <div className="mb-4 ">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEnglishZone;
