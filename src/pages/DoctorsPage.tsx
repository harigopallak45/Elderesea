export function DoctorsPage() {
  const doctors = [
    {
      name: 'Dr. Aarti Gupta',
      specialization: 'Cardiologist',
      experience: '10+ years',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Dr. Rajesh Malhotra',
      specialization: 'Orthopedic Surgeon',
      experience: '8+ years',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Dr. Priya Kapoor',
      specialization: 'Pediatrician',
      experience: '5+ years',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section className="doctors-page py-10 px-4">
      <h2 className="text-4xl text-center font-bold mb-8">Our Doctors</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Meet our experienced and compassionate healthcare professionals.
      </p>

      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg text-center"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialization}</p>
            <p className="text-sm text-gray-500">{doctor.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
