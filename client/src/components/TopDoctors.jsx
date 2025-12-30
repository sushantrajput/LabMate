import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    // CHANGE HERE: Added 'rounded-3xl' and 'mx-4' to make corners round and visible
    <section className="py-6 bg-gradient-to-b bg-teal-800 to-teal-50 rounded-3xl mx-2 md:mx-10 my-6">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Compact Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-50">
              Dedicated to Your Well-being
            </span>
          </h2>
          <p className="text-xs text-white max-w-xl mx-auto opacity-90">
            Experience a higher standard of care with our specialist team.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {doctors.slice(0, 4).map((doctor) => (
            <motion.div
              key={doctor._id}
              whileHover={{ y: -3 }}
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              // The cards already have rounded-lg here
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer"
            >
              {/* Small Image Container (h-32) */}
              <div className="relative h-32 bg-blue-50 flex items-end justify-center pt-2">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Tiny Status Indicator */}
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 px-1.5 py-0.5 rounded-full shadow-sm backdrop-blur-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  <span className="text-[10px] font-medium text-gray-700">
                    {doctor.available ? 'Open' : 'Closed'}
                  </span>
                </div>
              </div>

              {/* Compact Info */}
              <div className="p-3 text-center">
                <h3 className="text-sm font-bold text-gray-900 truncate leading-tight">{doctor.name}</h3>
                <p className="text-[10px] text-blue-600 font-semibold mb-1 truncate">{doctor.speciality}</p>
                <p className="text-[10px] text-gray-500 truncate">
                  {doctor.experience || '10+'} Yrs Exp.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small "View All" Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => {
              navigate('/doctors');
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center px-5 py-1.5 bg-teal-800 border border-white/30 text-white text-xs font-medium rounded-full hover:bg-white hover:text-teal-800 transition-all duration-300"
          >
            View All Doctors
          </button>
        </div>

      </div>
    </section>
  );
};

export default TopDoctors;