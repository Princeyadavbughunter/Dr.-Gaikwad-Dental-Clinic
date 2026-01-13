import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-12">

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <Image
            src="/images/logogg.jpg"
            alt="Smile Dental Hospital"
            width={192}
            height={48}
            className="mx-auto mb-4 h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-[#50898f] mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+917385444110" className="block text-[#50898f] font-bold md:text-lg hover:text-black transition-colors">+91 7385444110 / 7558790213</a>
            <p className="text-gray-700">www.drgaikwadsdentalpune.com</p>
          </div>

          <div>
            <h3 className="font-bold text-[#50898f] mb-2 md:text-lg">Clinic Timings</h3>
            <p className="text-gray-700 md:text-lg">
              🕙 Morning: 10:00 AM – 2:00 PM<br />
              🕠 Evening: 5:30 PM – 9:30 PM
            </p>
          </div>


          <div>
            <h3 className="font-bold text-[#50898f] mb-2 md:text-lg">Location</h3>
            <a
              href="https://maps.app.goo.gl/eifRwUb5AnxQiehr5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-bold hover:text-[#50898f] transition-colors cursor-pointer block"
            >
              📍 Dr. Gaikwad’s Dental Clinic<br />
              Sai Dham Society, Shop No. 2 & 3,<br />
              Next to Dhanori Police Chowky,<br />
              Opposite Maharashtra Electronics,<br />
              Dhanori, Pune
            </a>
            <p className="text-sm text-gray-500 mt-1">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4997.737979337773!2d73.89422569999999!3d18.594780800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c754b3921bf7%3A0x1158850f25211553!2sDr.%20Gaikwad&#39;s%20Dental%20Clinic!5e1!3m2!1sen!2sin!4v1768320152230!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Gaikwad's Dental Clinic Location"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}