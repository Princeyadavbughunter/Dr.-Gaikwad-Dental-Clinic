import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
        Trusted, Affordable & Advanced Dental Care<br />
        <span className="text-[#50898f]">in Dhanori, Pune</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-12">
        <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg">
          <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg bg-black">
            <Image
              src="/images/hero.png"
              alt="Dr. Gaikwad's Dental Clinic"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Special Offer / Intro Section */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-xl text-center mb-6 md:mb-0 md:flex-1">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Dr. Gaikwad’s Dental Clinic
          </h2>
          <p className="text-base md:text-lg mb-6">
            A modern, patient-focused dental care center offering all specialised dental treatments under one roof. Known for affordable pricing, high-tech equipment, and ethical treatment approach.
          </p>
          <button
            onClick={onBookAppointment}
            className="bg-brandBlue text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:opacity-90 transition-colors pulse-element w-full md:w-auto"
          >
            📞 Book Consultation
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8 md:flex-row md:justify-center">
        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-4 px-8 rounded-lg font-bold text-lg hover:opacity-90 transition-colors md:min-w-[240px]">
          📞 Book Consultation
        </button>
        <a
          href="tel:+917385444110"
          className="bg-brandBlue text-white py-4 px-8 rounded-lg font-bold text-lg text-center hover:opacity-90 transition-colors md:min-w-[240px]"
        >
          CALL NOW ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Why Choose <span className="text-[rgb(55,81,82)]">Dr. Gaikwad’s Dental Clinic?</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-6">
          {[
            { icon: "/images/heroicons/Experience.png", title: "Certified Implant Surgeon", desc: "Expertise in advanced procedures" },
            { icon: "/images/heroicons/premium.png", title: "Affordable Pricing", desc: "Transparent treatment plans" },
            { icon: "/images/heroicons/team.png", title: "All Under One Roof", desc: "Specialised treatments" },
            { icon: "/images/heroicons/sterilization.png", title: "Hygienic Environment", desc: "Patient-friendly & safe" },
            { icon: "/images/heroicons/tech.png", title: "High-Tech Equipment", desc: "Modern dental technology" },
            { icon: "/images/heroicons/Experience.png", title: "Convenient Timings", desc: "For working professionals" }
          ].map((usp, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow md:p-6">
              <Image src={usp.icon} alt={usp.title} width={48} height={48} className="mx-auto mb-2" />
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{usp.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 md:p-8 rounded-lg md:max-w-3xl md:mx-auto">
        <h3 className="font-bold text-[#50898f] mb-3 md:text-xl">Why Choose Us?</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-[#50898f]">✔</span>
            <span className="text-sm md:text-base">All specialised treatments under one roof</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#50898f]">✔</span>
            <span className="text-sm md:text-base">Affordable pricing with transparent treatment plans</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#50898f]">✔</span>
            <span className="text-sm md:text-base">High-tech and modern dental equipment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#50898f]">✔</span>
            <span className="text-sm md:text-base">Certified Implant Surgeon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#50898f]">✔</span>
            <span className="text-sm md:text-base">Patient-friendly & hygienic environment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#50898f]">✔</span>
            <span className="text-sm md:text-base">Convenient clinic timings for working professionals</span>
          </li>
        </ul>
        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full hover:opacity-90 transition-colors md:max-w-md md:mx-auto md:block">
          Request a Call back ➤
        </button>
        <small className="block text-center mt-2 text-gray-600 md:text-base">
          Professional Consultation & Digital scan
        </small>
      </div>
    </section>
  );
}