import { useState } from "react";
const faqs = [
  {
    question: "আমি EnglishZone এ কীভাবে ইংরেজি শেখা শুরু করবো?",
    answer:
      "একটা ফ্রি অ্যাকাউন্ট তৈরি করে আমাদের beginner courses অথবা 'Word of the Day' সেকশন থেকে শুরু করতে পারো।",
  },
  {
    question: "EnglishZone ব্যবহার করার জন্য কি কোনো ফি দিতে হবে?",
    answer:
      "EnglishZone এ অনেক ফ্রি লেসন ও কুইজ আছে। কিছু অ্যাডভান্সড কোর্সের জন্য সাবস্ক্রিপশন লাগতে পারে।",
  },
  {
    question: "আমি কি এখানে ইংরেজি কথা বলার অনুশীলন করতে পারি?",
    answer:
      "হ্যাঁ! আমরা interactive speaking exercises এবং কমিউনিটি চ্যাট রুম প্রদান করি যেখানে তুমি অনুশীলন করতে পারবে।",
  },
  {
    question: "কোর্স সম্পন্ন করলে কি সার্টিফিকেট দেওয়া হয়?",
    answer:
      "হ্যাঁ, নির্দিষ্ট কোর্স শেষ করলে তুমি completion সার্টিফিকেট ডাউনলোড করতে পারবে।",
  },
  {
    question: "যদি সাহায্যের প্রয়োজন হয়, তাহলে কি করব?",
    answer:
      "তুমি আমাদের contact ফর্মের মাধ্যমে যোগাযোগ করতে পারো অথবা কমিউনিটি ফোরামে সাহায্য পেতে পারো।",
  },
];
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="faq-item border-b border-gray-300 py-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="text-lg font-semibold flex justify-between items-center">
        {faq.question}
        <span>{isOpen ? "−" : "+"}</span>
      </h3>
      {isOpen && <p className="mt-2 text-gray-700">{faq.answer}</p>}
    </div>
  );
};

const Faqs = () => {
  return (
    <section className="max-w-4xl mx-auto mb-15 ">
      <h2 className="text-3xl font-bold mb-6 text-center">
        তোমার যত প্রশ্ন EnglishZone সম্পর্কে
      </h2>
      <div className="md:rounded-xl p-4 md:p-8 bg-[#F8E6E1]">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
