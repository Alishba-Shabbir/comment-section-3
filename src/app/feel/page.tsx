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
          <h1 className="text-2xl font-bold text-white">Feel-Good Fashion</h1>
          <nav>
            <Link href="/" className="text-white hover:text-blue-700">Home</Link>
          </nav>
        </div>
      </header>

      <div className="mr-[300px] ml-[200px] mx-auto p-2">
        <h1 className="text-3xl font-bold mb-6">Feel-Good Fashion</h1>

        {/* Image - Feel-Good Fashion */}
        <div className="mb-4 flex">
          <Image
            src="/feelgood.jpg" // Ensure the path is correct
            alt="Embracing Natural Beauty"
            width={900} // Adjust width as needed
            height={500} // Adjust height as needed
            className="rounded-lg"
          />
          <div className="mb-4 ml-8">
            <p className="text-2xl mb-4">
              Fashion isn&apos;t just about looking good; it&apos;s about feeling good too. The way we dress can greatly impact our mood and energy.
              Feel-good fashion is all about choosing outfits that not only look stylish but also bring you comfort and confidence.
              Start with materials that feel good on your skin. Natural fabrics like cotton, linen, and silk are gentle and breathable,
              making them perfect for all-day wear.
              Additionally, wearing clothes that fit well and allow you to move freely can boost your self-esteem and productivity.
              Colors also play a significant role in feel-good fashion. Bright and cheerful colors like yellow, coral, or turquoise can instantly lift your spirits.
              On the other hand, neutral and pastel shades are great for creating a calming effect, helping you relax during a busy day.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg mb-4">
            Accessories can also add a touch of joy to your outfits. A simple scarf, a statement necklace, or even a fun pair of socks can make you smile and enhance your overall look. It&apos;s the little details that often make a big difference.
          </p>
          <p className="text-lg mb-4">
            Remember, feel-good fashion isn&apos;t about following trends; it&apos;s about embracing your personal style and wearing what makes you happy.
            When you dress in a way that reflects your personality and preferences, you exude a natural confidence that&apos;s hard to ignore.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-center text-xl italic">
            “Fashion is the armor to survive the reality of everyday life.” — Bill Cunningham
          </p>
        </div>

        {/* Comment Section */}
        <div className="comments-section">
          <h2 className="text-2xl font-semibold mb-4">We&apos;d Love to Hear From You!</h2>
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
