export function BookingPage() {
  return (
    <section className="booking-page py-10 px-4">
      <h2 className="text-4xl text-center font-bold mb-8">Book a Service</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Schedule your appointment easily by filling out the form below.
      </p>

      <form className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-lg space-y-4">
        {/* Select Service */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Select Service
          </label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option value="">Select a Service</option>
            <option value="nursing">Specialized Nursing</option>
            <option value="therapy">Rehabilitation Therapy</option>
            <option value="diagnostics">Home Diagnostics</option>
            <option value="chronic-care">Chronic Care</option>
            <option value="child-care">Child & Postpartum Care</option>
          </select>
        </div>

        {/* Patient Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Patient Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Patient's Name"
          />
        </div>

        {/* Date of Appointment */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Preferred Date
          </label>
          <input type="date" className="w-full px-4 py-2 border rounded-lg" />
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Additional Notes
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg"
            rows={4}
            placeholder="Any specific requirements or concerns?"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </form>
    </section>
  );
}
