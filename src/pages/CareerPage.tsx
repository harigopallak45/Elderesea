export function CareerPage() {
  const jobOpenings = [
    {
      title: 'Nurse Practitioner',
      location: 'Mumbai, India',
      type: 'Full-Time',
      description:
        'Provide advanced nursing care in collaboration with physicians and other healthcare professionals.',
    },
    {
      title: 'Physiotherapist',
      location: 'Delhi, India',
      type: 'Part-Time',
      description:
        'Deliver personalized rehabilitation therapy sessions to patients at home.',
    },
    {
      title: 'Customer Support Executive',
      location: 'Remote',
      type: 'Full-Time',
      description:
        'Assist patients and families with inquiries and service bookings through phone and email.',
    },
  ];

  return (
    <section className="career-page py-10 px-4">
      <h2 className="text-4xl text-center font-bold mb-8">Join Our Team</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        At ElderEsea, we are committed to providing compassionate care and
        building a supportive work environment. Explore our career
        opportunities.
      </p>

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobOpenings.map((job, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-sm text-gray-500 mb-2">
              {job.location} - {job.type}
            </p>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <button className="text-primary font-medium">Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
