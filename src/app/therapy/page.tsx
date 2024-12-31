"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component for optimization

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
          <h1 className="text-2xl font-bold text-white">Color Therapy: Dressing for Happiness</h1>
          <nav>
            <Link href="/" className="text-white hover:text-blue-700">Home</Link>
          </nav>
        </div>
      </header>

      <div className="mr-[300px] ml-[200px] mx-auto p-2">
        <h1 className="text-3xl font-bold mb-6">Color Therapy: Dressing for Happiness</h1>

        {/* Image - Color Therapy: Dressing for Happiness */}
        <div className="mb-4 flex">
          <Image
            src="/vibrant.jpg" // Ensure correct path for image
            alt="Embracing Natural Beauty"
            width={900} // Provide width for image optimization
            height={500} // Provide height for image optimization
            className="rounded-lg"
          />
          <div className="mb-2 ml-2">
            <p className="text-2xl mb-4">
              The colors we wear have a profound effect on our mood and emotions.
              Color therapy, also known as chromotherapy, uses the psychology of colors to boost happiness and well-being.
              Dressing in specific hues can energize, calm, or uplift your spirit.
              Bright and bold colors like yellow and orange are associated with joy and enthusiasm. Wearing these shades can instantly uplift your mood and radiate positivity.
              Yellow, often called the &quot;happy color,&quot; is perfect for days when you need a little extra sunshine in your life.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg mb-4">
            On the other hand, colors like blue and green have a calming and soothing effect. Blue, the color of the sky and sea,
            promotes relaxation and peace, while green symbolizes balance and harmony. These shades are ideal for creating a serene and grounded vibe.
          </p>

          {/* Quote Section */}
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p className="text-center text-xl italic">
              &ldquo;Colors, like features, follow the changes of the emotions.&rdquo; — Pablo Picasso
            </p>
          </div>

          <p className="text-lg mb-4">
            Red, a bold and passionate color, can evoke feelings of confidence and power. It&apos;s the perfect choice for important meetings or events where you want to leave a strong impression. Similarly, pink is associated with love and kindness, adding a soft, playful energy to your outfit.
          </p>
          <p className="text-lg mb-4">
            For a boost of creativity, turn to purple, a color linked to imagination and inspiration. Whether it’s a lavender blouse or a deep violet scarf, purple can add a touch of magic to your wardrobe.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-center text-xl italic">
            &ldquo;The best color in the whole world is the one that looks good on you.&rdquo; — Coco Chanel
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
