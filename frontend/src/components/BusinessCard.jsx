import { useRef } from "react";
import domtoimage from "dom-to-image-more";
import { toast } from "react-hot-toast";

function BusinessCard({ data, onRegenerate, onReset }) {
  if (!data) return null;

  const cardRef = useRef();

  const keywordEmojiMap = {
    cafe: "☕",
    coffee: "☕",
    cake: "🍰",
    bakery: "🍞",
    salon: "💇‍♀️",
    barber: "💈",
    pizza: "🍕",
    restaurant: "🍽️",
    gym: "🏋️",
  };

  const getEmojiForBusiness = (name) => {
    const lowered = name.toLowerCase();
    for (const key in keywordEmojiMap) {
      if (lowered.includes(key)) return keywordEmojiMap[key];
    }
    return "🏢"; // default emoji
  };

  const avatarEmoji = getEmojiForBusiness(data.businessName);
  const cityImage = `https://boundlessmaps.com/wp-content/uploads/maps/sdb/mumbai-20000-sdb-27b147-preview-2.png`;

  return (
    <div
      ref={cardRef}
      className="h-full bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between border border-gray-200"
    >
      {/* Avatar + Business Info */}
      <div className="flex items-center justify mb-2">
        <div
          className="w-20 h-20 m-4 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow"
        >
          {avatarEmoji}
        </div>
        <div className="text-left">
          <h2 className="text-xl font-bold text-gray-800">{data.businessName}</h2>
          <p className="text-sm text-gray-500">📍 {data.location}</p>
          <p className="text-sm text-gray-600">⭐ {data.rating} / 5 · 📝 {data.reviews} reviews</p>
        </div>
      </div>

      {/* Headline */}
      <div className="text-center">
        <blockquote className="italic border-l-4 border-purple-400 text-gray-700 pl-4 mt-4 text-sm">
          “{data.headline}”
        </blockquote>
      </div>

      {/* Static City Image */}
      <div className="my-4 rounded-md overflow-hidden shadow-md border border-gray-200">
        <img
          src={cityImage}
          alt="City preview"
          className="w-full h-32 object-cover bg-gray-100"
        />
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button
          onClick={onRegenerate}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg w-full shadow"
        >
          🔁 Regenerate Headline
        </button>
        <button
          onClick={onReset}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg w-full shadow"
        >
          🔄 Reset Form
        </button>
      </div>
    </div>
  );
}

export default BusinessCard;
