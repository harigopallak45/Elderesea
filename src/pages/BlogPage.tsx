export function BlogPage() {
  const blogs = [
    {
      title: '5 Tips for Maintaining a Healthy Lifestyle',
      excerpt:
        'Discover simple yet effective ways to improve your health and well-being.',
      date: 'January 1, 2025',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Understanding Chronic Care Management',
      excerpt: 'A guide to managing chronic conditions effectively at home.',
      date: 'December 15, 2024',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'The Benefits of Home Healthcare Services',
      excerpt: 'Why opting for home healthcare is a game-changer.',
      date: 'November 10, 2024',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <section className="blog-page py-10 px-4">
      <h2 className="text-4xl text-center font-bold mb-8">Our Blog</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Stay informed with the latest articles and insights from our experts.
      </p>

      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
            <p className="text-gray-600 mb-4">{blog.excerpt}</p>
            <button className="text-primary font-medium">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
