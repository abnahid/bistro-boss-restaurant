import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SectionTitle from "./../../components/SectionTitle";
const LocationCards = () => {
  return (
    <div className="my-12">
      <SectionTitle heading="Visit Us" subHeading="OUR LOCATION"></SectionTitle>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Phone Card */}

        <div className="w-64 bg-white rounded-lg border border-gray-200">
          {/* Card Header */}
          <div className="bg-yellow-600 py-4 flex justify-center items-center rounded-t-lg">
            <FaPhoneAlt className="text-white text-3xl" />
          </div>

          {/* Card Body */}
          <div className="px-4 pb-4">
            <div className="p-10 text-center bg-gray-100 rounded-b-lg">
              <h3 className="text-lg font-semibold mb-1">PHONE</h3>
              <p className="text-gray-700 text-sm">+38 (012) 34 56 789</p>
            </div>
          </div>
        </div>
        <div className="w-64 bg-white rounded-lg border border-gray-200">
          {/* Card Header */}
          <div className="bg-yellow-600 py-4 flex justify-center items-center rounded-t-lg">
            <FaMapMarkerAlt className="text-white text-3xl" />
          </div>

          {/* Card Body */}
          <div className="px-4 pb-4">
            <div className="p-8 text-center bg-gray-100 rounded-b-lg">
              <h3 className="text-lg font-semibold mb-1">ADDRESS</h3>
              <p className="text-gray-700 text-sm">
                123 ABS Street, Uni 21, Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="w-64 bg-white rounded-lg border border-gray-200">
          {/* Card Header */}
          <div className="bg-yellow-600 py-4 flex justify-center items-center rounded-t-lg">
            <FaPhoneAlt className="text-white text-3xl" />
          </div>

          {/* Card Body */}
          <div className="px-4 pb-4">
            <div className="p-8 text-center bg-gray-100 rounded-b-lg">
              <h3 className="text-lg font-semibold mb-1">WORKING HOURS</h3>
              <div className="text-gray-700 text-sm items-center">
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCards;
