'use client';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const cases = [
    {
      before: '/img/before-after/nonuse/Before-1.jpg',
      after: '/img/before-after/nonuse/After-1.jpg',
      alt: 'Dental treatment case 1'
    },
    {
      before: '/img/before-after/nonuse/Before-1-1.jpg',
      after: '/img/before-after/nonuse/After-1-1.jpg',
      alt: 'Dental treatment case 2'
    },
    {
      before: '/img/before-after/nonuse/Patient-02-Before.jpg',
      after: '/img/before-after/nonuse/Patient-02-After.jpg',
      alt: 'Dental treatment case 3'
    },
    {
      before: '/img/before-after/nonuse/Patient-Before-01.jpg',
      after: '/img/before-after/nonuse/Patient-After-01.jpg',
      alt: 'Dental treatment case 4'
    },
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-[#50898f] text-sm md:text-base font-medium mb-2">
            Real Results
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Before & After Transformations
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full mb-12">
          {cases.map((items, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="space-y-2">
                  <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                    <img
                      src={items.before}
                      alt={`Before ${items.alt}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      Before
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                    <img
                      src={items.after}
                      alt={`After ${items.alt}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-brandBlue text-white text-xs px-2 py-1 rounded">
                      After
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready for Your <span className="text-[#50898f]">Smile Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles with Dr. Preyas Gaikwad &apos;s expertise. Book your consultation today and take the first step towards your dream smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-brandBlue text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="tel:+919828079898"
              className="bg-brandBlue text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors text-center"
            >
              Call Now: +91 9321370066
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Professional consultation includes digital scan
          </p>
        </div>
      </div>
    </section>
  );
}
