"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { HotelBanner } from "@/components/layout/Banner";
import { HotelDetailsContent } from "@/components/hotel/HotelDetailsContent";
import { HotelCard } from "@/components/hotel/hotelCard";
import { PropertyDetails } from "@/components/hotel/propertyDetails";
import { Testimonials } from "@/components/layout/Testimonials";
import { PoliciesSection } from "@/components/layout/PoliciesSection";

export default function HomePage() {
  const hotels = [
    {
      id: "1",
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      price: 699,
      rating: 4.5,
      beds: 2,
      bathrooms: 2,
      sqft: 1200,
      imageUrl: "/Carousel.jpg",
    },
    {
      id: "2",
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      price: 699,
      rating: 4.5,
      beds: 2,
      bathrooms: 2,
      sqft: 1200,
      imageUrl: "/Carousel.jpg",
    },
    {
      id: "3",
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      price: 699,
      rating: 4.5,
      beds: 2,
      bathrooms: 2,
      sqft: 1200,
      imageUrl: "/Carousel.jpg",
    },
    {
      id: "4",
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      price: 699,
      rating: 4.5,
      beds: 2,
      bathrooms: 2,
      sqft: 1200,
      imageUrl: "/Carousel.jpg",
    },
    {
      id: "5",
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      price: 699,
      rating: 4.5,
      beds: 2,
      bathrooms: 2,
      sqft: 1200,
      imageUrl: "/Carousel.jpg",
    },
    {
      id: "6",
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      price: 699,
      rating: 4.5,
      beds: 2,
      bathrooms: 2,
      sqft: 1200,
      imageUrl: "/Carousel.jpg",
    },
    {
      id: "7",
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      price: 699,
      rating: 4.5,
      beds: 2,
      bathrooms: 2,
      sqft: 1200,
      imageUrl: "/Carousel.jpg",
    },
    {
      id: "8",
      name: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      price: 699,
      rating: 4.5,
      beds: 2,
      bathrooms: 2,
      sqft: 1200,
      imageUrl: "/Carousel.jpg",
    },
  ];

  return (
    <>
      <HotelBanner
        name="El Aurassi Hotel"
        tagline="Spacious, modern rooms with panoramic views of the Mediterranean Sea."
        images={[
          "/Rectangle17650.jpg",
          "/Rectangle17651.jpg",
          "/Rectangle17652.jpg",
          "/Rectangle17653.jpg",
        ]}
      />

      <HotelDetailsContent />
      <PropertyDetails />
      <Testimonials />
      <PoliciesSection />

      {/* Hotel Carousel Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-6">You may also like</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {hotels.map((hotel) => (
              <CarouselItem
                key={hotel.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="p-1">
                  <HotelCard hotel={hotel} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>
    </>
  );
}
