"use client";

import { Button } from "@/components/ui/button";
import { Utensils, ShoppingBag, Waves, Train } from "lucide-react";
import Image from "next/image";
import map from "../../public/🌎 Map Maker_ Bab El Oued, Algiers, Algeria (Standard).jpg"; // Ensure this path is correct for your project

export function PropertyDetails() {
  const propertyDetails = {
    description:
      "The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.",
    areaInfo: {
      restaurants: [
        { name: "Blue Cafe", distance: "1.4 km" },
        { name: "Blue Cafe", distance: "1.4 km" },
        { name: "Blue Cafe", distance: "1.4 km" },
      ],
      shops: [
        { name: "Central Mall", distance: "1.4 km" },
        { name: "Central Mall", distance: "1.4 km" },
        { name: "Central Mall", distance: "1.4 km" },
      ],
      beaches: [
        { name: "Les Dunes Beach", distance: "1.4 km" },
        { name: "Les Dunes Beach", distance: "1.4 km" },
        { name: "Les Dunes Beach", distance: "1.4 km" },
      ],
      transport: [
        { name: "Train - Riverdale Central Station", distance: "1.4 km" },
        { name: "Metro - Cityline Metro Hub", distance: "1.4 km" },
      ],
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* About this property */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          About this property
        </h2>
        <p className="text-sm text-gray-600">
          {propertyDetails.description}
        </p>
      </div>

      {/* Explore the Area */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          Explore the Area
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"> {/* Adjusted grid for main content */}
          {/* Left sections (Restaurants & Cafes, Beaches) - first column of text */}
          <div className="lg:col-span-1 xl:col-span-1 space-y-4">
            {/* Restaurants */}
            <div>
              <h3 className="flex items-center text-base sm:text-lg font-medium text-gray-900 mb-2">
                <Utensils className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-600" />
                Restaurants & Cafes
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {propertyDetails.areaInfo.restaurants.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-600">•</span>
                    <span>
                      {item.name} <span className="ml-1 text-gray-400">{item.distance}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beaches */}
            <div>
              <h3 className="flex items-center text-base sm:text-lg font-medium text-gray-900 mb-2">
                <Waves className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-600" />
                Beaches
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {propertyDetails.areaInfo.beaches.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-600">•</span>
                    <span>
                      {item.name} <span className="ml-1 text-gray-400">{item.distance}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right sections (Shops & Markets, Public transport) - second column of text */}
          <div className="lg:col-span-1 xl:col-span-1 space-y-4">
            {/* Shops */}
            <div>
              <h3 className="flex items-center text-base sm:text-lg font-medium text-gray-900 mb-2">
                <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-600" />
                Shops & Markets
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {propertyDetails.areaInfo.shops.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-600">•</span>
                    <span>
                      {item.name} <span className="ml-1 text-gray-400">{item.distance}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Public Transport */}
            <div>
              <h3 className="flex items-center text-base sm:text-lg font-medium text-gray-900 mb-2">
                <Train className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-600" />
                Public transport
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {propertyDetails.areaInfo.transport.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-600">•</span>
                    <span>
                      {item.name} <span className="ml-1 text-gray-400">{item.distance}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map Preview (on the right) */}
          <div className="lg:col-span-full xl:col-span-1 flex flex-col items-center justify-start"> {/* Use flexbox to align content within this column */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-md mb-4"> {/* Added mb-4 for space */}
              <Image
                src={map}
                alt="Map of El Aurassi Hotel area"
                fill
                style={{ objectFit: "cover" }}
                className="object-cover"
              />
              {/* Note: The button is not "on" the map image in the final correct interpretation,
                  but rather visually below it, aligned with its width. */}
            </div>
            {/* Explore the Area Button (below the map, centered under it) */}
            <Button className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm hover:bg-blue-700 w-fit"> {/* w-fit to prevent full width */}
              Explore the Area
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}