import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Utpalkr Bhattacharjee",
      initials: "UB",
      date: "4 months ago",
      review: "The ambience of the clinic is excellent. Cleanliness to the utmost satisfaction. All Doctors are very sincere & knowledgeable. Takes good care of the patient upto their satisfaction. Will recommend everyone having dental problems as first priority."
    },
    {
      name: "Priti Sawant",
      initials: "PS",
      date: "1 months ago",
      review: "Dr. Preyas gaikwad's dental clinic in dhanori is a go to for teeth whitening, dental crowns, and more.His team is friendly, and the atmosphere is welcoming."
    },
    {
      name: "Kalpesh Londhe",
      initials: "KL",
      date: "8 months ago",
      review: "Getting my braces aligners at Gaikwad’s Dental Clinic was one of the best decisions I’ve made for my smile. The whole process was smooth, and the team made sure I was comfortable every step of the way. The aligners are barely noticeable and super easy to manage. Big thanks to Dr. Gaikwad and the staff for their care and attention to detail!"
    },
    {
      name: "karan kolhe",
      initials: "KK",
      date: "6 months ago",
      review: "Clinic is very clean and hygienic and doctor preyas is also very good with his knowledge . I was very well assisted for my root canal problem and very well taken care of .. excellent service 🙏🏻"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brandBlue text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}