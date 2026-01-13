import Image from "next/image";

export default function ImplantTypes() {
  const treatments = [
    {
      title: "Dental Implants",
      image: "/images/implant/single.png", // Reuse existing valid image paths
      description: "Permanent solution for missing teeth."
    },
    {
      title: "Root Canal Treatment (RCT)",
      image: "/images/implant/Multiple.png", // Placeholder reuse
      description: "Save your natural tooth and relieve pain."
    },
    {
      title: "Tooth Extractions",
      image: "/images/implant/supported.png", // Placeholder reuse
      description: "Safe and painless removal of damaged teeth."
    },
    {
      title: "Teeth Cleaning & Polishing",
      image: "/images/implant/all_in.png", // Placeholder reuse
      description: "Maintain oral hygiene and fresh breath."
    },
    {
      title: "Smile Designing",
      image: "/images/implant/single.png", // Placeholder reuse
      description: "Transform your smile with cosmetic dentistry."
    },
    {
      title: "Crowns, Bridges & Dentures",
      image: "/images/implant/Multiple.png", // Placeholder reuse
      description: "Restore function and aesthetics."
    },
    {
      title: "Braces & Aligners",
      image: "/images/implant/supported.png",
      description: "Straighten your teeth for a perfect smile."
    },
    {
      title: "Pediatric Dentistry",
      image: "/images/implant/all_in.png",
      description: "Specialised care for children's dental health."
    }
  ];

  return (
    <section className="bg-black text-white p-4 md:p-8 lg:p-12 pb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#50898f] mb-4">
          Treatments Offered at <em>Dr. Gaikwad’s Dental Clinic</em>
        </h2>
        <p className="text-center text-gray-300 mb-8 md:text-lg max-w-3xl mx-auto">
          All treatments are performed using advanced dental technology for safe, precise, and comfortable care.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white text-gray-800 p-4 md:p-6 rounded-lg">
              <div className="relative bg-white rounded-lg mb-4 h-40 md:h-64 flex items-center justify-center">
                <Image src={treatment.image} alt={treatment.title} layout="fill" objectFit="contain" className="rounded-lg" />
              </div>
              <h3 className="font-bold text-center mb-3 md:text-lg">{treatment.title}</h3>
              <p className="text-center mb-3 text-sm md:text-base">{treatment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}