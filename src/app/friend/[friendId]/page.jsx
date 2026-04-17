"use client";
import React, { useState, useEffect, use } from "react";
import Footer from "@/Components/Footer";
import Image from "next/image";
import { FaBoxArchive } from "react-icons/fa6";
import { MdDeleteForever, MdOutlineSnooze } from "react-icons/md";
import { TimelineContext } from "@/context/context";
import { toast } from "react-toastify";

const FriendDetails = ({ params }) => {
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  const { timeline, setTimeline } = use(TimelineContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { friendId } = await params;
        const res = await fetch("http://localhost:3000/friends.json");
        const friends = await res.json();
        const foundFriend = friends.find((f) => f.id === parseInt(friendId));
        setFriend(foundFriend);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // লোডিং ইফেক্ট বোঝার জন্য সামান্য ডিলে দেওয়া যেতে পারে (ঐচ্ছিক)
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchData();
  }, [params]);

  const handaletimeline = (type) => {
    const timelineEntry = {
      ...friend,
      activityType: type,
      activityDate: new Date().toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })
    };

    setTimeline([timelineEntry, ...timeline]);
    toast(`${type} added to Timeline!`);
  };

  // --- সুন্দর লোডিং স্টেট UI ---
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          {/* Animated Spinner */}
          <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium animate-pulse">Loading Friend Details...</p>
        </div>
      </div>
    );
  }

  // ডাটা না পাওয়া গেলে হ্যান্ডেল করা
  if (!friend) {
    return <div className="p-10 text-center">Friend not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-10/12 mx-auto">
        {/* বাম পাশের সেকশন */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
              {friend.picture && (
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <h2 className="text-xl font-bold">{friend.name}</h2>
            <div className="flex justify-center gap-2 my-3">
              <span className={`px-4 py-1 rounded-full text-white text-xs font-medium capitalize ${
                friend.status?.toLowerCase() === "overdue" ? "bg-red-500" : 
                friend.status?.toLowerCase() === "almost due" ? "bg-orange-400" : "bg-emerald-600"
              }`}>
                {friend.status}
              </span>
            </div>
            <div className="flex gap-2 justify-center mb-4 mt-4">
              {friend.tags?.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-[10px] font-semibold uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-500 italic mt-4">{friend.bio}</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full py-3 rounded-xl font-bold border flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
              <MdOutlineSnooze size={20} /> Snooze 2 Weeks
            </button>
            <button className="w-full py-3 rounded-xl font-bold border flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
              <FaBoxArchive size={20} /> Archive
            </button>
            <button className="w-full py-3 bg-white border text-red-500 rounded-xl hover:bg-red-50 transition font-bold flex items-center justify-center gap-2">
              <MdDeleteForever size={20} /> Delete
            </button>
          </div>
        </div>

        {/* ডান পাশের সেকশন */}
        <main className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="border bg-white p-8 rounded-2xl shadow-sm border-gray-100 text-center">
              <span className="font-bold text-3xl">{friend.days_since_contact}</span>
              <p className="text-[#64748B] text-sm">Days Since Contact</p>
            </div>
            <div className="border bg-white p-8 rounded-2xl shadow-sm border-gray-100 text-center">
              <span className="font-bold text-3xl">{friend.goal}</span>
              <p className="text-[#64748B] text-sm">Goal (Days)</p>
            </div>
            <div className="border bg-white p-8 rounded-2xl shadow-sm border-gray-100 text-center">
              <span className="font-bold text-lg">{friend.next_due_date}</span>
              <p className="text-[#64748B] text-sm">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
            <h3 className="text-green-800 font-semibold mb-2">Relationship Goal</h3>
            <p className="text-gray-600">
              Connect every <span className="font-bold text-black">{friend.goal} days</span>
            </p>
            <button className="absolute top-6 right-6 px-4 py-1 border rounded-lg text-sm hover:bg-gray-50">Edit</button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-green-800 font-semibold mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handaletimeline("Call")} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition">
                <Image src="/call.png" alt="Call" width={24} height={24} className="mb-2" />
                Call
              </button>
              <button onClick={() => handaletimeline("Text")} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition">
                <Image src="/text.png" alt="Text" width={24} height={24} className="mb-2" />
                Text
              </button>
              <button onClick={() => handaletimeline("Video")} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition">
                <Image src="/video.png" alt="Video" width={24} height={24} className="mb-2" />
                Video
              </button>
            </div>
          </div>
        </main>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default FriendDetails;