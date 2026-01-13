import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className=" bg-brandBlue p-4 md:p-8 lg:p-12">
      <h2 className="text-white md:text-3xl font-bold text-center mb-6">About the Doctor</h2>

      <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm max-w-6xl mx-auto">
        <div className="md:flex md:gap-8 md:items-start mb-8">
          <div className="text-center mb-6 md:mb-0 md:flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
              <Image src="/images/doctorggg.jpg" alt="Dr. Preyas Gaikwad" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#50898f]">Dr. Preyas Gaikwad</h3>
            <p className="text-gray-600 font-medium">Certified Implant Surgeon</p>
          </div>

          <div className="space-y-4 text-gray-700 md:flex-grow">
            <p className="md:text-lg">
              Dr. Preyas Gaikwad is a Certified Implant Surgeon with 8+ years of clinical experience. He is dedicated to providing advanced and painless dental procedures, focusing on long-term results and patient comfort.
            </p>

            <p className="md:text-lg">
              Expertise in advanced and painless dental procedures | Focused on long-term results and patient comfort.
            </p>

            <div className="md:grid md:grid-cols-2 md:gap-8 mt-6">
              <div>
                <h3 className="font-bold text-[#50898f] mb-3 md:text-lg">Expertise</h3>
                <ul className="list-disc list-inside md:text-lg space-y-1">
                  <li>Dental Implants</li>
                  <li>Root Canal Treatment (RCT)</li>
                  <li>Tooth Extractions & Wisdom Tooth Surgery</li>
                  <li>Teeth Cleaning & Polishing</li>
                  <li>Smile Designing & Cosmetic Dentistry</li>
                  <li>Crowns, Bridges & Dentures</li>
                  <li>Braces & Aligners</li>
                  <li>Pediatric & Preventive Dentistry</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#50898f] mt-6 mb-3 md:mt-0 md:text-lg">⭐ Why Dr. Gaikwad’s Dental Clinic?</h3>
                <ul className="list-none md:text-lg space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span>✅</span> <span>All specialised treatments under one roof</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Certified Implant Surgeon</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Patient-friendly & hygienic environment</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Affordable pricing with transparent treatment plans</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>High-tech and modern dental equipment</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md md:mx-auto md:block">
          BOOK APPOINTMENT WITH Dr. Preyas Gaikwad
        </button>
      </div>
    </section>
  );
}