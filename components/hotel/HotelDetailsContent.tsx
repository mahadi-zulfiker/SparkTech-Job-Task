"use client";

import { Button } from "@/components/ui/button";
import {
  Wifi,
  Utensils,
  Hotel,
  Snowflake,
  Car,
  Layout,
  Bed,
  Bath,
  User,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils"; // Assuming you have this for tailwind-merge
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for a single hotel
const mockHotelData = {
  propertyType: "Resorts",
  area: 12000, // sqft
  features: [
    { icon: Wifi, name: "Wifi" },
    { icon: Utensils, name: "Dining" },
    { icon: Hotel, name: "Swimming Pool" },
    { icon: Snowflake, name: "Air Conditioning" },
    { icon: Car, name: "Gym" },
  ],
  rooms: [
    {
      type: "Twin Room",
      beds: 2,
      bedType: "single beds",
      sqft: 1200,
      airCondition: true,
      bathroom: true,
      tv: true,
      wifi: true,
      pricePerWeek: 282,
      breakfastIncluded: true,
      roomsLeft: 4,
    },
    {
      type: "Deluxe Double Room",
      beds: 2,
      bedType: "single beds",
      sqft: 1200,
      airCondition: true,
      bathroom: true,
      tv: true,
      wifi: true,
      pricePerWeek: 282,
      breakfastIncluded: true,
      roomsLeft: 4,
    },
    {
      type: "Executive Suite",
      beds: 2,
      bedType: "single beds",
      sqft: 1200,
      airCondition: true,
      bathroom: true,
      tv: true,
      wifi: true,
      pricePerWeek: 282,
      breakfastIncluded: true,
      roomsLeft: 4,
    },
  ],
};

export function HotelDetailsContent() {
  const hotel = mockHotelData;

  const [checkInDate, setCheckInDate] = useState<Date | undefined>(
    new Date("2024-06-23T12:00:00Z")
  );
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(
    new Date("2024-06-29T12:00:00Z")
  );
  const [guests, setGuests] = useState("2 Adults - 0 Children - 1 Room");

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Tabs for Overview, Features, Reviews, Message */}
          <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-2 mb-6">
            <div className="flex flex-wrap space-x-4">
              <Button
                variant="ghost"
                className="px-2 py-1 rounded-none border-b-2 border-[#007BFF] text-[#007BFF] font-semibold text-sm sm:text-base pb-2"
              >
                Overview
              </Button>
              <Button
                variant="ghost"
                className="px-2 py-1 rounded-none text-gray-600 hover:text-[#007BFF] hover:border-b-2 hover:border-gray-200 transition-colors text-sm sm:text-base pb-2"
              >
                Features
              </Button>
              <Button
                variant="ghost"
                className="px-2 py-1 rounded-none text-gray-600 hover:text-[#007BFF] hover:border-b-2 hover:border-gray-200 transition-colors text-sm sm:text-base pb-2"
              >
                Reviews
              </Button>
            </div>
            <Button className="bg-[#007BFF] text-white rounded-full px-3 py-1.5 text-sm sm:text-base hover:bg-[#0066CC] transition-colors ml-auto">
              Message
            </Button>
          </div>

          {/* Property Type and Features */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-700 mb-4">
              <span className="font-semibold text-lg sm:text-xl">Property Type</span>
              <span className="flex items-center text-sm sm:text-base text-gray-700">
                <Hotel className="h-4 w-4 mr-1 text-gray-600" />
                {hotel.propertyType}
              </span>
              <span className="flex items-center text-sm sm:text-base text-gray-700">
                <Layout className="h-4 w-4 mr-1 text-gray-600" />
                {hotel.area} sqft
              </span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
              {hotel.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700 text-sm sm:text-base"
                >
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Section */}
          <div className="mb-8 p-4 sm:p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
              Availability
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-In
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50",
                        !checkInDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      {checkInDate
                        ? format(checkInDate, "EEE, dd MMMM yyyy")
                        : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkInDate}
                      onSelect={setCheckInDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-Out
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50",
                        !checkOutDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      {checkOutDate
                        ? format(checkOutDate, "EEE, dd MMMM yyyy")
                        : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkOutDate}
                      onSelect={setCheckOutDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Room & Guest
                </label>
                <Select onValueChange={setGuests} defaultValue={guests}>
                  <SelectTrigger className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2 Adults - 0 Children - 1 Room">
                      2 Adults - 0 Children - 1 Room
                    </SelectItem>
                    <SelectItem value="3 Adults - 1 Child - 2 Rooms">
                      3 Adults - 1 Child - 2 Rooms
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full bg-[#007BFF] hover:bg-[#0066CC] text-white font-semibold py-2 text-sm sm:text-base">
              Search
            </Button>
          </div>

          {/* Room Type Table */}
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-100 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase">
                  <th className="px-2 sm:px-6 py-2 min-w-[150px] sm:min-w-[200px] text-gray-700">
                    Room type
                  </th>
                  <th className="px-2 sm:px-6 py-2 min-w-[100px] sm:min-w-[120px] text-gray-700">
                    Number of guests
                  </th>
                  <th className="px-2 sm:px-6 py-2 min-w-[80px] sm:min-w-[100px] text-gray-700">
                    Price for 1 week
                  </th>
                  <th className="px-2 sm:px-6 py-2 min-w-[120px] sm:min-w-[150px] text-gray-700">
                    Your choices
                  </th>
                  <th className="px-2 sm:px-6 py-2 min-w-[100px] sm:min-w-[120px] text-gray-700">
                    Select rooms
                  </th>
                  <th className="px-2 sm:px-6 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {hotel.rooms.map((room, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-2 sm:px-6 py-4 align-top">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {room.type}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 flex items-center mt-1">
                        <Bed className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />{" "}
                        {room.beds} {room.bedType}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 flex items-center mt-1">
                        <Layout className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />{" "}
                        {room.sqft} sq ft
                      </p>
                      <ul className="text-xs sm:text-sm text-gray-600 mt-1 space-y-1">
                        {room.airCondition && (
                          <li className="flex items-center">
                            <Snowflake className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />{" "}
                            Air condition
                          </li>
                        )}
                        {room.bathroom && (
                          <li className="flex items-center">
                            <Bath className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />{" "}
                            Bathroom
                          </li>
                        )}
                        {room.tv && (
                          <li className="flex items-center">
                            <span className="mr-1 text-gray-500">📺</span> TV
                          </li>
                        )}
                        {room.wifi && (
                          <li className="flex items-center">
                            <Wifi className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />{" "}
                            Wifi
                          </li>
                        )}
                      </ul>
                    </td>
                    <td className="px-2 sm:px-6 py-4 align-top">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                    </td>
                    <td className="px-2 sm:px-6 py-4 align-top text-gray-800 font-bold text-base sm:text-lg">
                      ${room.pricePerWeek}
                    </td>
                    <td className="px-2 sm:px-6 py-4 align-top">
                      {room.breakfastIncluded && (
                        <span className="font-semibold text-green-700 text-xs sm:text-sm">
                          Breakfast included
                        </span>
                      )}
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        Only {room.roomsLeft} rooms left
                      </p>
                    </td>
                    <td className="px-2 sm:px-6 py-4 align-top">
                      <Select defaultValue="0">
                        <SelectTrigger className="w-16 sm:w-20 h-8 sm:h-10 px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                          <SelectValue placeholder="0" />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(room.roomsLeft + 1)].map((_, i) => (
                            <SelectItem key={i} value={String(i)}>
                              {i}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="px-2 sm:px-6 py-4 align-top">
                      <Button className="bg-[#007BFF] hover:bg-[#0066CC] text-white font-semibold text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4">
                        Reserve
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fixed Booking Summary Card (Right Column) */}
        <div className="lg:col-span-1 sticky top-8 h-fit p-4 sm:p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900">
            1 week, 2 adults, 1 child
          </h3>
          <p className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
            USD $6,112
          </p>
          <Button className="w-full bg-[#007BFF] hover:bg-[#0066CC] text-white font-semibold py-1 sm:py-2 text-sm sm:text-base">
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}