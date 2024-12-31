"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';  // Use next/image for optimized images

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
          <h1 className="text-2xl font-bold text-white">Inspiring Celebrity Look</h1>
          <nav>
            <Link href="/" className="text-white hover:text-blue-700">Home</Link>
          </nav>
        </div>
      </header>
      <div className="mr-[300px] ml-[200px] mx-auto p-2">

        <h1 className="text-3xl font-bold mb-6">Inspiring Celebrity Look</h1>
        {/* Image - Inspiring Celebrity Look */}
        <div className="mb-4 flex">
          <Image
            src="/look.jpg"  // Use the appropriate image path here
            alt="Inspiring Celebrity Look"
            width={900} // Specify width
            height={500} // Specify height
            className="rounded-lg"
          />
          <div className="mb-4 ml-8">
            <p className="text-2xl mb-4">
              Celebrities have always been a source of style inspiration. From red carpet glamour to casual streetwear,
              their fashion choices set trends and inspire millions worldwide. Whether it&apos;s the elegance of a classic Hollywood gown
              or the edgy look of a modern rock star, there&apos;s a celebrity style for everyone to admire and emulate.
              One of the key reasons celebrity looks are so influential is their ability to blend timeless pieces with trendy accents.
              Stars like Zendaya, Harry Styles, and Rihanna are celebrated for their daring fashion risks that always pay off.
              Their outfits remind us that fashion is about confidence and creativity. For formal occasions, take cues from the sophistication of stars like Kate Middleton or George Clooney.
              Their sleek, tailored outfits exude elegance. On the other hand, for a casual yet chic vibe, look to the effortless style
              of Gigi Hadid or Ryan Reynolds, who excel in making everyday wear look high-end.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-center text-xl italic">
            &ldquo;Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching
            of a revolution in clothes.&rdquo; — Diana Vreeland
          </p>
        </div>

        <div className="mb-6">
          <p className="text-lg mb-4">
            Accessories play a significant role in completing the celebrity look. Oversized sunglasses, statement bags, and iconic jewelry
            are some of the staples you&apos;ll see on every celebrity. These elements add personality and flair to their outfits.
          </p>
          <p className="text-lg mb-4">
            Remember, you don&apos;t need a designer wardrobe to channel your inner celebrity. Focus on the details and find what makes
            you feel glamorous. After all, the best style is one that reflects your personality and makes you shine.
          </p>
        </div>
        {/* Quote Section */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-center text-xl italic">
            &ldquo;Style is a way to say who you are without having to speak.&rdquo; — Rachel Zoe
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
