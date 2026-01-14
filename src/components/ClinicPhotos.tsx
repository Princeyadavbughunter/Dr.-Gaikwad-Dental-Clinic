'use client';

import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  return (
    <section className="bg-lightCream p-4 md:p-8 lg:p-12">
      <h2 className="text-black md:text-3xl font-bold text-center mb-6">Our State-of-the-Art Clinic</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {['12.avif', '34.avif', 'efhcxcgf.avif'].map((img, index) => (
          <div key={index} className="bg-gray-200 rounded-lg h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden relative shadow-md hover:shadow-xl transition-shadow">
            <Image
              src={`/images/clinic/${img}`}
              alt={`Clinic Photo ${index + 1}`}
              fill
              className={index === 2 ? "object-contain" : "object-cover"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index <= 2}
            />
          </div>
        ))}
      </div>
      <button onClick={onBookAppointment} className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md mx-auto block 
      hover:text-white
      hover:opacity-90 transition-colors">
        BOOK APPOINTMENT
      </button>
    </section>
  );
} 