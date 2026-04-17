  
import Image from "next/image";
import Link from "next/link";


const getFriends = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  return res.json();
  
};

export default async function FriendsPage() {
  
  const friends = await getFriends();

  return (
    <div className="p-8 bg-gray-50 w-10/12 mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Friends</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {friends.map((friend) => (
          /* এখানে পুরো ডিভ-কে লিঙ্কের ভেতরে ঢুকিয়ে দেওয়া হয়েছে */
          <Link 
            key={friend.id} 
            href={`/friend/${friend.id}`}
            className="group transition-transform hover:scale-[1.02]"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center border border-gray-100 hover:shadow-md cursor-pointer h-full">
              
              {/* প্রোফাইল ইমেজ */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-200 relative">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                {friend.name}
              </h2>
              
              <p className="text-gray-400 text-sm mb-3">
                {friend.days_since_contact}d ago
              </p>

              {/* ট্যাগ লুপ */}
              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-[10px] font-semibold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* স্ট্যাটাস ব্যাজ */}
              <span
                className={`px-4 py-1 rounded-full text-white text-xs font-medium capitalize mt-auto ${
                  friend.status.toLowerCase() === "overdue"
                    ? "bg-red-500"
                    : friend.status.toLowerCase() === "almost due"
                      ? "bg-orange-400"
                      : "bg-emerald-600"
                }`}
              >
                {friend.status}
              </span>

              {/* View Details লেখাটি নিচে আলাদাভাবে দেখা যাবে */}
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}