// pages/blog/embracing-your-natural-beauty.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogPost = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-[#004383] shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Embracing Your Natural Beauty</h1>
          <nav>
            <Link href="/" className="text-white hover:text-blue-700">Home</Link>
          </nav>
        </div>
      </header>
      <div className="mr-[300px] ml-[200px] mx-auto p-2">
        <h1 className="text-3xl font-bold mb-6">Embracing Your Natural Beauty</h1>

        {/* Image - Natural Beauty */}
        <div className="mb-4 flex">
          <Image
            src="/natural.jpg"
            alt="Embracing Natural Beauty"
            width={900}
            height={500}
            className="rounded-lg"
          />
          <div className="mb-4 ml-8">
            <p className="text-2xl mb-4">
              In a world full of filters and photoshop, it&apos;s easy to forget that true beauty lies within.
              Embracing your natural beauty means celebrating what makes you, *you*. It&apos;s about feeling confident in your skin, knowing that your natural features are just as stunning as any created by makeup or trends.
              Natural beauty isn&apos;t just about how you look; it&apos;s about how you feel in your own skin. The media often projects a very narrow image of what beauty should be, but true beauty transcends these standards. It&apos;s about embracing your individuality and letting your natural features shine through.
              Fashion should make you feel confident in your own skin, not hide it. A simple trick to accentuate your natural beauty is to wear colors that bring out the best in your skin tone. If you have fair skin, pastels like lavender or soft pinks will look lovely, while deeper shades like mustard or burnt orange will complement medium to dark skin tones.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg mb-4">
            Your hair and skin are important aspects of your natural beauty. Embrace your natural hair texture by using products that enhance curls, waves, or straight hair without harsh chemicals. Similarly, keeping your skin healthy and glowing naturally starts with proper hydration and a good skincare routine. Use natural oils like coconut or argan oil, and make sure to drink plenty of water every day.
          </p>
          <p className="text-lg mb-4">
            Beauty is as much about mindset as it is about appearance. Once you start embracing your natural features, you&apos;ll notice a significant change in how you carry yourself. Confidence doesn&apos;t come from meeting societal standards; it comes from accepting and loving yourself as you are. When you radiate positivity and self-love, others will see your true beauty.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-center text-xl italic">
            “Beauty begins the moment you decide to be yourself.” — Coco Chanel
          </p>
        </div>

        {/* Comment Section */}
        <div className="comments-section">
          <h2 className="text-2xl font-semibold mb-4">We’d Love to Hear From You!</h2>
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write a comment..."
              rows={4}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit Comment
            </button>
          </form>

          <div className="comments-list">
            <h3 className="text-xl font-medium mb-4">Recent Comments:</h3>
            {comments.length > 0 ? (
              comments.map((c, index) => (
                <div key={index} className="comment mt-4 p-4 border-b">
                  <p>{c}</p>
                </div>
              ))
            ) : (
              <p>No comments yet. Be the first to share your thoughts!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
