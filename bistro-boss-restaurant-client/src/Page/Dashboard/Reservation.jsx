import { useState } from "react";
import Calendar from "react-calendar"; // Install with `npm install react-calendar`
import "react-calendar/dist/Calendar.css";
import SectionTitle from "./../../components/SectionTitle";
import LocationCards from "./../Contact/LocationCards";

const Reservation = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted:", {
      date: date.toLocaleDateString(),
      time,
      guests,
      name,
      phone,
      email,
    });
  };

  return (
    <div>
      <SectionTitle
        heading="Reservation"
        subHeading="BOOK A TABLE"
      ></SectionTitle>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Book a Table</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Date*</label>
              <Calendar
                value={date}
                onChange={setDate}
                className="rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Time*</label>
              <input
                className="input input-bordered w-full px-3 py-2 rounded-md border"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Guests*</label>
              <select
                className="input input-bordered w-full px-3 py-2 rounded-md border"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name*</label>
              <input
                className="input input-bordered w-full px-3 py-2 rounded-md border"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone*</label>
              <input
                className="input input-bordered w-full px-3 py-2 rounded-md border"
                type="tel"
                placeholder="Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email*</label>
              <input
                className="input input-bordered w-full px-3 py-2 rounded-md border"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <LocationCards />
    </div>
  );
};

export default Reservation;
