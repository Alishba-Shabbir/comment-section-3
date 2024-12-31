import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

export default function Blog() {
  // Blog data with images
  const blogs = [
    {
      title: 'Embracing Your Natural Beauty',
      description: 'Celebrate your uniqueness and natural beauty with simple yet stunning fashion choices that boost self-confidence.',
      image: '/natural.jpg',
      link: '/embracing' // direct link for routing
    },
    {
      title: 'Feel-Good Fashion',
      description: 'Fashion that makes you feel as good as you look. Comfortable yet stylish outfits that uplift your mood and add positive energy.',
      image: '/feelgood.jpg',
      link: '/feel' // direct link for routing
    },
    {
      title: 'Fashion for Every Mood',
      description: 'Explore how fashion can reflect your emotions. Outfits that match your mood and help you express yourself through style.',
      image: '/mood.jpg',
      link: '/fashion' // direct link for routing
    },
    {
      title: 'Sustainable Style',
      description: 'Learn to curate a wardrobe that is both stylish and sustainable. Eco-friendly fashion choices and conscious shopping tips.',
      image: '/sustainable.jpg',
      link: '/sustainable' // direct link for routing
    },
    {
      title: 'Color Therapy: Dressing for Happiness',
      description: 'Understand the psychology of color in fashion and how different hues can influence your mood and bring joy.',
      image: '/vibrant.jpg',
      link: '/therapy' // direct link for routing
    },
    {
      title: 'Inspiring Celebrity Looks',
      description: 'Get inspired by how celebrities exude positive energy through their fashion choices, from red carpet to casual looks.',
      image: '/look.jpg',
      link: '/celebrity-looks' // direct link for routing
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-900 mt-8">Positive Vibes Blog</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {blogs.map((blog, index) => (
          <Link href={blog.link} key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition-all">
              {/* Replace <img> with <Image> for better optimization */}
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg"
                width={500} // Set width (adjust as needed)
                height={400} // Set height (adjust as needed)
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
