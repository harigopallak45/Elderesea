export function ContactPage() {
  return (
    <section className="contact-page py-10 px-4">
      <h2 className="text-4xl text-center font-bold mb-8">Contact Us</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Have questions or need assistance? Reach out to us, and we'll be happy
        to help.
      </p>

      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-2">
            <strong>Phone:</strong> +1800 789 4567
          </p>
          <p className="mb-2">
            <strong>Email:</strong> support@elderesea.com
          </p>
          <p className="mb-2">
            <strong>Address:</strong> 1234 Health Blvd, Wellness City, India
          </p>
          <p>
            <strong>Hours:</strong> 24/7 Available
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-white p-6 shadow-md rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg"
              rows={4}
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
