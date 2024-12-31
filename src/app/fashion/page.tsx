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
          <h1 className="text-2xl font-bold text-white">Fashion for Every Mood</h1>
          <nav>
            <Link href="/" className="text-white hover:text-blue-700">Home</Link>
          </nav>
        </div>
      </header>
      <div className="mr-[300px] ml-[200px] mx-auto p-2">
        <h1 className="text-3xl font-bold mb-6">Fashion for Every Mood</h1>

        {/* Image - Fashion for Every Mood */}
        <div className="mb-4 flex">
          <Image
            src="/mood.jpg"
            alt="Fashion for Every Mood"
            width={900} // Adjust the width as per your requirements
            height={500} // Adjust the height as per your requirements
            className="rounded-lg"
          />
          <div className="mb-4 ml-4">
            <p className="text-2xl mb-4">
              Fashion is more than just clothing—it&apos;s an expression of how we feel. Whether you&apos;re happy, relaxed, or feeling bold, your outfit can reflect your mood and even elevate it. Dressing for your emotions allows you to embrace your individuality and creativity.
              On a bright and sunny day when you&apos;re feeling cheerful, opt for vibrant colors like yellow, orange, or pink.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg mb-4">
            These shades not only uplift your mood but also spread positive vibes to those around you. Pair them with breezy fabrics like chiffon or cotton for a relaxed yet lively look.
          </p>
          <p className="text-lg mb-4">
            Feeling bold and confident? Power outfits like tailored blazers, leather jackets, or bold prints can amplify your energy. Dark colors like black, red, or emerald green exude strength and determination. Add a pair of statement heels or chunky boots to complete the look.
          </p>
          <p className="text-lg mb-4">
            Fashion can also be your best friend on days when you need a little extra comfort. Cozy outfits like joggers, hoodies, and soft cardigans can create a sense of security and warmth. Pair them with your favorite slippers or sneakers, and you&apos;re good to go.
          </p>
          <p className="text-lg mb-4">
            No matter the mood, the key to making fashion work for you is to stay true to yourself. Experiment with styles that resonate with your emotions and reflect your personality. Fashion is a journey, and every outfit is a step closer to discovering your unique style.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-center text-xl italic">
            {/* If you want to add a quote here */}
            “Fashion is about something that comes from within you.” — Ralph Lauren
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
