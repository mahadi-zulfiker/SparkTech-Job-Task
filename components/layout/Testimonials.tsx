"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      heading: "Breathtaking Views and Luxury Comfort!",
      content:
        "“The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!”",
      rating: 5,
      author: "Sofia B., France",
      date: "23.10.2024",
    },
    {
      id: 2,
      heading: "Exceptional Stay with Excellent Amenities",
      content:
        "“The Executive Suite provided an exceptional experience. The room was spotless and equipped with everything you could need. The marble bathroom with its bathtub was pure luxury. The location is perfect for exploring the city, and the staff truly made the stay memorable!”",
      rating: 5,
      author: "Youssef R., Morocco",
      date: "15.09.2024",
    },
    {
      id: 3,
      heading: "A Perfect Retreat for Families",
      content:
        "“Our family had an amazing stay in the Deluxe Suite. The rooms were spacious enough for all of us, and the kids loved the pool area. The staff was incredibly friendly and accommodating, making sure we had everything we needed. We’ll definitely be back!”",
      rating: 4,
      author: "Emily T., United Kingdom",
      date: "10.08.2024",
    },
    {
      id: 4,
      heading: "Unforgettable Experience",
      content:
        "“From the moment we arrived, the service was impeccable. The suite was beautifully designed with modern touches, and the view from the balcony was breathtaking. The on-site dining options were fantastic, and the staff went above and beyond to make our stay special.”",
      rating: 5,
      author: "Carlos M., Spain",
      date: "05.07.2024",
    },
    {
      id: 5,
      heading: "Ideal for Business Travelers",
      content:
        "“As a frequent business traveler, I appreciate efficiency and comfort. The Executive Suite delivered both. High-speed Wi-Fi, a spacious desk, and a quiet environment made working a breeze. The gym and spa were a great bonus for unwinding after a long day.”",
      rating: 4,
      author: "Anita K., Germany",
      date: "20.06.2024",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 2; // Show 2 testimonials at a time on desktop

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerPage >= testimonialsData.length
        ? 0
        : prevIndex + testimonialsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - testimonialsPerPage < 0
        ? Math.max(0, testimonialsData.length - testimonialsPerPage)
        : prevIndex - testimonialsPerPage
    );
  };

  // Slice the testimonials array to show only the current set
  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  );

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Header with title, navigation, and 'See All' */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          What Our Guests Say
        </h2>
        <div className="flex items-center space-x-4">
          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 border rounded-md transition-colors ${
                currentIndex === 0
                  ? "border-gray-300 text-gray-400 cursor-not-allowed"
                  : "border-green-500 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + testimonialsPerPage >= testimonialsData.length}
              className={`p-2 border rounded-md transition-colors ${
                currentIndex + testimonialsPerPage >= testimonialsData.length
                  ? "border-gray-300 text-gray-400 cursor-not-allowed"
                  : "border-green-500 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          {/* See All link */}
          <a
            href="#"
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"
          >
            See All
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {testimonial.heading}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-6">
                {testimonial.content}
              </p>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-700 font-medium mt-auto">
              <span>– {testimonial.author}</span>
              {testimonial.date && (
                <span className="text-gray-500">{testimonial.date}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}