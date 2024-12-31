"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

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
          <h1 className="text-2xl font-bold text-white">Sustainable Style</h1>
          <nav>
            <Link href="/" className="text-white hover:text-blue-700">Home</Link>
          </nav>
        </div>
      </header>

      <div className="mr-[300px] ml-[200px] mx-auto p-2">
        <h1 className="text-3xl font-bold mb-6">Sustainable Fashion: A Greener Future</h1>

        {/* Image - Sustainable Style */}
        <div className="mb-4 flex">
          <Image
            src="/sustainable.jpg" // Corrected image path
            alt="Embracing Natural Beauty"
            width={900} // Provide width for optimization
            height={500} // Provide height for optimization
            className="rounded-lg"
          />
          <div className="mb-4 ml-8">
            <p className="text-2xl mb-4">
              Sustainable fashion isn&apos;t just a trend; it&apos;s a movement toward a more ethical and environmentally friendly approach to clothing.
              By making conscious choices, we can reduce waste, support fair labor practices, and create a lasting positive impact on our planet.
              Fast fashion, while appealing for its affordability and variety, often comes at a significant environmental cost.
              The production process involves excessive water usage, harmful dyes, and non-recyclable materials, leading to pollution and waste.
              Transitioning to sustainable fashion means opting for quality over quantity.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg mb-4">
            One way to embrace sustainability is by choosing clothes made from organic or recycled materials. Fabrics like organic cotton, hemp, or Tencel are biodegradable and much gentler on the environment.
            Additionally, many brands are now offering clothing made from recycled plastics, giving new life to waste materials.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-center text-xl italic">
            “Buy less. Choose well. Make it last.” — Vivienne Westwood
          </p>
        </div>

        <div className="mb-6">
          <p className="text-lg mb-4">
            Supporting local artisans and ethical brands is another way to promote sustainable fashion. These brands prioritize fair wages and safe working conditions for their workers. By purchasing from them, you not only reduce the carbon footprint associated with shipping but also contribute to the growth of local communities.
          </p>
          <p className="text-lg mb-4">
            Thrift shopping is also an excellent way to give pre-loved clothes a second chance. By buying second-hand, you reduce demand for new production and help minimize textile waste. Plus, you might find unique, vintage pieces that add character to your wardrobe!
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-center text-xl italic">
            “Sustainability is not about doing less harm. It&apos;s about doing more good.” — Jochen Zeitz
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
