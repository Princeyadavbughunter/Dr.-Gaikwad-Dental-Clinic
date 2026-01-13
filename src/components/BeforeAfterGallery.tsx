'use client';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const images = [
    {
      src: '/img/before-after/ab.jpeg',
      alt: 'Before and after dental treatment case 1'
    },
    {
      src: '/img/before-after/ff.jpeg',
      alt: 'Before and after dental treatment case 2'
    },
    {
      src: '/img/before-after/gif.jpeg',
      alt: 'Before and after dental treatment case 3'
    },
    {
      src: '/img/before-after/jf.jpeg',
      alt: 'Before and after dental treatment case 4'
    },
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-orange-50">
      <div className="max-w-6xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mb-12">
          {images.map((image, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100 group hover:shadow-xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
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
