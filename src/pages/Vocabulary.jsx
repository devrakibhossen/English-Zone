import { MdVolumeUp } from "react-icons/md";

const Vocabulary = () => {
  const words = [
    {
      word: "Grateful",
      meaning: "কৃতজ্ঞ",
      example: "I’m grateful for your help.",
      exampleBangla: "আমি তোমার সাহায্যের জন্য কৃতজ্ঞ।",
      category: "Business",
      partOfSpeech: "Adjective",
    },
    {
      word: "Journey",
      meaning: "ভ্রমণ",
      example: "The journey was long but exciting.",
      exampleBangla: "ভ্রমণ দীর্ঘ কিন্তু উত্তেজনাপূর্ণ ছিল।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Confidence",
      meaning: "আত্মবিশ্বাস",
      example: "She spoke with great confidence.",
      exampleBangla: "সে খুব আত্মবিশ্বাস নিয়ে কথা বলল।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Apple",
      meaning: "আপেল",
      example: "I ate a fresh apple.",
      exampleBangla: "আমি একটি টাটকা আপেল খেয়েছি।",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Opportunity",
      meaning: "সুযোগ",
      example: "He seized the opportunity to learn.",
      exampleBangla: "সে শেখার সুযোগটি লুফে নিল।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Adventure",
      meaning: "দুর্বার অভিযান",
      example: "Life is an adventure worth living.",
      exampleBangla: "জীবন একটি দুর্বার অভিযান যা বাঁচার মতো।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Delicious",
      meaning: "সুস্বাদু",
      example: "The food was delicious.",
      exampleBangla: "খাবারটি খুব সুস্বাদু ছিল।",
      category: "Food",
      partOfSpeech: "Adjective",
    },
    {
      word: "Respect",
      meaning: "সম্মান",
      example: "We should respect each other.",
      exampleBangla: "আমরা একে অপরকে সম্মান করা উচিত।",
      category: "Business",
      partOfSpeech: "Verb",
    },
    {
      word: "Explore",
      meaning: "অনুসন্ধান করা",
      example: "We want to explore new places.",
      exampleBangla: "আমরা নতুন জায়গা অনুসন্ধান করতে চাই।",
      category: "Travel",
      partOfSpeech: "Verb",
    },
    {
      word: "Recipe",
      meaning: "রেসিপি",
      example: "Could you share the recipe?",
      exampleBangla: "তুমি কি রেসিপিটি শেয়ার করতে পারবে?",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Meeting",
      meaning: "মিটিং",
      example: "The meeting starts at noon.",
      exampleBangla: "মিটিংটি দুপুরে শুরু হবে।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Destination",
      meaning: "গন্তব্য",
      example: "Paris is our next destination.",
      exampleBangla: "প্যারিস আমাদের পরবর্তী গন্তব্য।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Breakfast",
      meaning: "প্রাতঃরাশ",
      example: "I had eggs for breakfast.",
      exampleBangla: "আমি প্রাতরাশে ডিম খেয়েছি।",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Responsibility",
      meaning: "দায়িত্ব",
      example: "Responsibility brings growth.",
      exampleBangla: "দায়িত্ব গ্রহণে অগ্রগতি আসে।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Map",
      meaning: "মানচিত্র",
      example: "I followed the map carefully.",
      exampleBangla: "আমি মনোযোগ সহকারে মানচিত্র অনুসরণ করেছি।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Lunch",
      meaning: "মধ্যাহ্নভোজ",
      example: "What time is your lunch break?",
      exampleBangla: "তোমার মধ্যাহ্নভোজের বিরতি কখন?",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Colleague",
      meaning: "সহকর্মী",
      example: "My colleague helped with the project.",
      exampleBangla: "আমার সহকর্মী প্রকল্পে সাহায্য করেছে।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Vacation",
      meaning: "ছুটি",
      example: "We plan to go on vacation in December.",
      exampleBangla: "আমরা ডিসেম্বরে ছুটিতে যেতে পরিকল্পনা করছি।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Dinner",
      meaning: "রাতের খাবার",
      example: "We had dinner at a nice restaurant.",
      exampleBangla: "আমরা একটি সুন্দর রেস্তোরাঁয় রাতের খাবার খেয়েছি।",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Deadline",
      meaning: "সময়সীমা",
      example: "The deadline is tomorrow.",
      exampleBangla: "সময়সীমা আগামীকাল।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Luggage",
      meaning: "লাগেজ",
      example: "Her luggage was very heavy.",
      exampleBangla: "তার লাগেজ খুব ভারী ছিল।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Fruit",
      meaning: "ফল",
      example: "Eating fruit is good for health.",
      exampleBangla: "ফল খাওয়া স্বাস্থ্যর জন্য ভাল।",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Promotion",
      meaning: "পদোন্নতি",
      example: "He got a promotion last month.",
      exampleBangla: "সে গত মাসে পদোন্নতি পেয়েছে।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Guide",
      meaning: "গাইড",
      example: "Our guide was very knowledgeable.",
      exampleBangla: "আমাদের গাইড খুব জ্ঞানী ছিল।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Vegetable",
      meaning: "সবজি",
      example: "Eat more vegetables every day.",
      exampleBangla: "প্রতিদিন আরও বেশি সবজি খাও।",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Salary",
      meaning: "বেতন",
      example: "The salary has been increased.",
      exampleBangla: "বেতন বৃদ্ধি করা হয়েছে।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Adventures",
      meaning: "অভিযানসমূহ",
      example: "Their adventures inspired many.",
      exampleBangla: "তাদের অভিযানসমূহ অনেককে অনুপ্রাণিত করেছে।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Dessert",
      meaning: "মিষ্টান্ন",
      example: "Ice cream is my favorite dessert.",
      exampleBangla: "আইসক্রিম আমার প্রিয় মিষ্টান্ন।",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Target",
      meaning: "লক্ষ্য",
      example: "We reached our sales target.",
      exampleBangla: "আমরা আমাদের বিক্রয় লক্ষ্য পৌঁছেছি।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Passport",
      meaning: "পাসপোর্ট",
      example: "Always carry your passport while traveling.",
      exampleBangla: "ভ্রমণের সময় সবসময় পাসপোর্ট সঙ্গে রাখো।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Chef",
      meaning: "রাঁধুনি",
      example: "The chef prepared an amazing meal.",
      exampleBangla: "রাঁধুনি একটি অসাধারণ খাবার প্রস্তুত করেছিলেন।",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Client",
      meaning: "গ্রাহক",
      example: "The client requested a meeting.",
      exampleBangla: "গ্রাহক একটি মিটিং অনুরোধ করেছেন।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Hotel",
      meaning: "হোটেল",
      example: "We stayed in a luxury hotel.",
      exampleBangla: "আমরা একটি বিলাসবহুল হোটেলে ছিলাম।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Snack",
      meaning: "হালকা খাবার",
      example: "Would you like a snack?",
      exampleBangla: "তুমি কি হালকা খাবার চাও?",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Contract",
      meaning: "চুক্তি",
      example: "She signed the contract yesterday.",
      exampleBangla: "সে গতকাল চুক্তিতে স্বাক্ষর করেছে।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Flight",
      meaning: "উড়ান",
      example: "Our flight was delayed.",
      exampleBangla: "আমাদের উড়ানটি দেরিতে ছিল।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Beverage",
      meaning: "পানীয়",
      example: "He ordered a cold beverage.",
      exampleBangla: "সে একটি ঠাণ্ডা পানীয় অর্ডার করেছে।",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Profit",
      meaning: "লাভ",
      example: "The company made a huge profit.",
      exampleBangla: "কোম্পানিটি বিশাল লাভ করেছে।",
      category: "Business",
      partOfSpeech: "Noun",
    },
    {
      word: "Tourist",
      meaning: "পর্যটক",
      example: "Many tourists visit the city.",
      exampleBangla: "অনেক পর্যটক এই শহরে ঘুরে যান।",
      category: "Travel",
      partOfSpeech: "Noun",
    },
    {
      word: "Grocery",
      meaning: "মুদিখানা",
      example: "She went to the grocery store.",
      exampleBangla: "সে মুদির দোকানে গেছিল।",
      category: "Food",
      partOfSpeech: "Noun",
    },
    {
      word: "Business",
      meaning: "ব্যবসা",
      example: "He is starting his own business.",
      exampleBangla: "সে নিজের ব্যবসা শুরু করছে।",
      category: "Business",
      partOfSpeech: "Noun",
    },
  ];

  const pronounceWord = (word) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Your browser does not support speech synthesis.");
    }
  };

  const groupedByCategory = words.reduce((acc, word) => {
    if (!acc[word.category]) {
      acc[word.category] = [];
    }
    acc[word.category].push(word);
    return acc;
  }, {});
  return (
    <div className="min-h-screen bg-[#f9f9f9] px-4 md:px-10 py-10">
      <h1 className="text-3xl md:text-4xl font-bold  mb-10">
        📚 দৈনিক ভোকাবুলারি
      </h1>
      <div className="p-3 bg-white border border-gray-300  mb-10 flex justify-between items-center gap-5">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow"
            placeholder="Search শব্দ / অর্থ...Search"
          />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>

        <select defaultValue="Sort by" className="select w-42">
          <option disabled>Sort by</option>
          <option value="alphabetical-asc">Alphabetical (A-Z)</option>
          <option value="alphabetical-desc">Alphabetical (Z-A)</option>
          <option value="recent">Recently Added</option>
          <option value="popular">Most Popular</option>
          <option value="difficulty-asc">Difficulty: Easy to Hard</option>
          <option value="difficulty-desc">Difficulty: Hard to Easy</option>
        </select>
      </div>

      {Object.keys(groupedByCategory).map((category) => (
        <section key={category} className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-6">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {groupedByCategory[category].map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 shadow-sm hover:shadow-md rounded transition border border-gray-300"
              >
                <div className="flex  justify-between items-center gap-5">
                  <h2 className="text-xl font-semibold text-black flex items-center gap-3">
                    {item.word}
                    <button
                      onClick={() => pronounceWord(item.word)}
                      className="p-1 rounded-full hover:bg-gray-200 transition"
                      aria-label={`Pronounce ${item.word}`}
                    >
                      <MdVolumeUp className="text-lg text-black" />
                    </button>
                  </h2>
                  <p className="text-gray-600 mt-1 border border-gray-300 bg-[#8FFFB0] rounded-full px-3 text-sm">
                    {item.partOfSpeech}
                  </p>
                </div>

                <p className="text-gray-600 mt-1">বাংলা: {item.meaning}</p>
                <p className="text-gray-500 mt-2 text-sm">
                  <span className="font-medium">উদাহরণ:</span> {item.example}
                </p>

                <p className="text-gray-500 mt-2 text-sm">
                  <span className="font-medium">বাংলা অনুবাদ:</span>{" "}
                  {item.exampleBangla}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Vocabulary;
