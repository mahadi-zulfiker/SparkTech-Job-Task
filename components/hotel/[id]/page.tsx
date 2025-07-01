import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, Wifi, Utensils, Hotel, Snowflake, Car, Layout, Bed, Bath, MessageCircle, Heart, User } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Mock data for a single hotel
const hotelData = {
    id: 'el-aurassi-hotel',
    name: 'El Aurassi Hotel',
    tagline: 'Spacious, modern rooms with panoramic views of the Mediterranean Sea.',
    propertyType: 'Resorts',
    area: 1200, // sqft
    images: [
        '/images/el-aurassi-main.jpg', // Main image
        '/images/el-aurassi-gallery-1.jpg',
        '/images/el-aurassi-gallery-2.jpg',
        '/images/el-aurassi-gallery-3.jpg',
        '/images/el-aurassi-gallery-4.jpg',
        '/images/el-aurassi-gallery-5.jpg',
        '/images/el-aurassi-gallery-6.jpg',
        '/images/el-aurassi-gallery-7.jpg',
        '/images/el-aurassi-gallery-8.jpg',
    ],
    features: [
        { icon: Wifi, name: 'Wifi' },
        { icon: Utensils, name: 'Dining' },
        { icon: Hotel, name: 'Swimming Pool' },
        { icon: Snowflake, name: 'Air Conditioning' },
        { icon: Car, name: 'Gym' },
    ],
    rooms: [
        {
            type: 'Twin Room',
            beds: 2,
            bedType: 'single beds',
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
            type: 'Deluxe Double Room',
            beds: 2,
            bedType: 'single beds',
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
            type: 'Executive Suite',
            beds: 2,
            bedType: 'single beds',
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
    description: 'The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.',
    exploreArea: {
        restaurants: [
            { name: 'Blue Cafe', distance: '1.4 km' },
            { name: 'Blue Cafe', distance: '1.4 km' },
            { name: 'Blue Cafe', distance: '1.4 km' },
        ],
        shops: [
            { name: 'Central Mall', distance: '1.4 km' },
            { name: 'Central Mall', distance: '1.4 km' },
            { name: 'Central Mall', distance: '1.4 km' },
        ],
        beaches: [
            { name: 'Les Dunes Beach', distance: '1.4 km' },
            { name: 'Les Dunes Beach', distance: '1.4 km' },
            { name: 'Les Dunes Beach', distance: '1.4 km' },
        ],
        publicTransport: [
            { name: 'Train - Riverdale Central Station', distance: '1.4 km' },
            { name: 'Metro - Cityline Metro Hub', distance: '1.4 km' },
            { name: 'Metro - Cityline Metro Hub', distance: '1.4 km' },
        ],
    },
    reviews: [
        {
            author: 'Sofia B, France',
            date: '23.10.2024',
            rating: 5,
            comment: '“Breathtaking Views and Luxury Comfort!” The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!',
        },
        {
            author: 'Youssef R., Morocco',
            date: '23.10.2024',
            rating: 5,
            comment: '“Exceptional Stay with Excellent Amenities” The Executive Suite provided an exceptional experience. The room was spotless equipped with everything you could need. The marble bathroom with its bathtub; pure luxury. The location is perfect for exploring the city, and the staff truly make',
        },
    ],
    policies: {
        checkIn: 'Available 24 hours (Guests are required to show a photo identification and credit card upon check-in. You’ll need to let the property know in advance what time you’ll arrive.)',
        checkOut: 'Available 24 hours',
        cancellationPrepayment: 'Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.',
        childPolicies: 'Children of any age are welcome. Children 12 years and above will be charged as adults at this property. To see correct prices and occupancy information, please add the number of children in your group and their ages to your search. The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more information. There are no cots available at this property. All extra beds are subject to availability.',
        noAgeRestriction: 'There is no age requirement for check-in.',
        pets: 'Pets are not allowed.',
        cashOnly: 'This property only accepts cash payments.',
    },
};

export default function HotelDetailPage() {
    const hotel = hotelData; // In a real app, you'd fetch this using `id`

    const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date('2024-06-23T12:00:00Z'));
    const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(new Date('2024-06-29T12:00:00Z'));
    const [guests, setGuests] = useState('2 Adults - 0 Children - 1 Room');

    if (!hotel) {
        return <div>Hotel not found</div>;
    }

    return (
        <div className="container mx-auto py-8 px-4">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold">{hotel.name}</h1>
                    <p className="text-gray-600 mt-1">{hotel.tagline}</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <Button variant="outline" size="icon">
                        <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <MessageCircle className="h-5 w-5" />
                    </Button>
                    <Button>Reserve &rarr;</Button>
                </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="md:col-span-2 lg:col-span-2 relative h-80 rounded-lg overflow-hidden">
                    <Image src={hotel.images[0]} alt={hotel.name} fill style={{ objectFit: 'cover' }} />
                </div>
                {hotel.images.slice(1, 5).map((img, index) => (
                    <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                        <Image src={img} alt={`${hotel.name} gallery image ${index + 1}`} fill style={{ objectFit: 'cover' }} />
                    </div>
                ))}
                {hotel.images.length > 5 && (
                    <div className="relative h-40 rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 text-gray-600">
                        <span className="text-lg">+ {hotel.images.length - 5} More</span>
                    </div>
                )}
            </div>

            {/* Overview and Booking Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {/* Tabs for Overview, Features, Reviews, Message */}
                    <div className="flex space-x-6 border-b pb-2 mb-6">
                        <Button variant="ghost" className="px-0 py-0 rounded-none border-b-2 border-primary text-primary font-semibold">
                            Overview
                        </Button>
                        <Button variant="ghost" className="px-0 py-0 rounded-none text-gray-600">
                            Features
                        </Button>
                        <Button variant="ghost" className="px-0 py-0 rounded-none text-gray-600">
                            Reviews
                        </Button>
                        <Button className="bg-blue-500 text-white rounded-full px-4 py-2">Message</Button>
                    </div>

                    {/* Property Type and Features */}
                    <div className="mb-6">
                        <div className="flex items-center space-x-4 text-gray-700 mb-4">
                            <span className="font-semibold">Property Type</span>
                            <span className="flex items-center">
                                <Hotel className="h-4 w-4 mr-1" />
                                {hotel.propertyType}
                            </span>
                            <span className="flex items-center">
                                <Layout className="h-4 w-4 mr-1" />
                                {hotel.area} sqft
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6">
                            {hotel.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2 text-gray-700">
                                    <feature.icon className="h-5 w-5 text-gray-600" />
                                    <span>{feature.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Availability Section */}
                    <div className="mb-8 p-6 border rounded-lg bg-gray-50">
                        <h3 className="text-xl font-semibold mb-4">Availability</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Check-In</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={'outline'}
                                            className={cn(
                                                'w-full justify-start text-left font-normal',
                                                !checkInDate && 'text-muted-foreground'
                                            )}
                                        >
                                            <Calendar className="mr-2 h-4 w-4" />
                                            {checkInDate ? format(checkInDate, 'Sat, dd MMMM yyyy') : <span>Pick a date</span>}
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Check-Out</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={'outline'}
                                            className={cn(
                                                'w-full justify-start text-left font-normal',
                                                !checkOutDate && 'text-muted-foreground'
                                            )}
                                        >
                                            <Calendar className="mr-2 h-4 w-4" />
                                            {checkOutDate ? format(checkOutDate, 'Sat, dd MMMM yyyy') : <span>Pick a date</span>}
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Room & Guest</label>
                                <Select onValueChange={setGuests} defaultValue={guests}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select guests" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="2 Adults - 0 Children - 1 Room">2 Adults - 0 Children - 1 Room</SelectItem>
                                        <SelectItem value="3 Adults - 1 Child - 2 Rooms">3 Adults - 1 Child - 2 Rooms</SelectItem>
                                        {/* Add more options as needed */}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <Button className="w-full">Search</Button>
                    </div>

                    {/* Room Type Table */}
                    <div className="overflow-x-auto mb-8">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase">
                                    <th className="px-6 py-3">Room type</th>
                                    <th className="px-6 py-3">Number of guests</th>
                                    <th className="px-6 py-3">Price for 1 week</th>
                                    <th className="px-6 py-3">Your choices</th>
                                    <th className="px-6 py-3">Select rooms</th>
                                    <th className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {hotel.rooms.map((room, index) => (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="px-6 py-4">
                                            <h4 className="font-semibold text-gray-800">{room.type}</h4>
                                            <p className="text-sm text-gray-600 flex items-center mt-1">
                                                <Bed className="h-4 w-4 mr-1" /> {room.beds} {room.bedType}
                                            </p>
                                            <p className="text-sm text-gray-600 flex items-center mt-1">
                                                <Layout className="h-4 w-4 mr-1" /> {room.sqft} sq ft
                                            </p>
                                            <ul className="text-sm text-gray-600 mt-2">
                                                {room.airCondition && <li className="flex items-center"><Snowflake className="h-4 w-4 mr-1" /> Air condition</li>}
                                                {room.bathroom && <li className="flex items-center"><Bath className="h-4 w-4 mr-1" /> Bathroom</li>}
                                                {room.tv && <li className="flex items-center"><span className="mr-1">📺</span> TV</li>}
                                                {room.wifi && <li className="flex items-center"><Wifi className="h-4 w-4 mr-1" /> Wifi</li>}
                                            </ul>
                                        </td>
                                        <td className="px-6 py-4">
                                            <User className="h-5 w-5 text-gray-500" />
                                        </td>
                                        <td className="px-6 py-4 text-gray-800 font-medium">${room.pricePerWeek}</td>
                                        <td className="px-6 py-4">
                                            {room.breakfastIncluded && <span className="font-semibold text-green-700">Breakfast included</span>}
                                            <p className="text-red-500 text-sm mt-1">Only {room.roomsLeft} rooms left</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Select defaultValue="0">
                                                <SelectTrigger className="w-20">
                                                    <SelectValue placeholder="0" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {[...Array(room.roomsLeft + 1)].map((_, i) => (
                                                        <SelectItem key={i} value={String(i)}>{i}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Button>Reserve</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* About this property */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">About this property</h3>
                        <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
                    </div>

                    {/* Explore the Area */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Explore the Area</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-2">Restaurants & cafes</h4>
                                {hotel.exploreArea.restaurants.map((item, index) => (
                                    <p key={index} className="text-gray-700 flex justify-between">
                                        <span>{item.name}</span>
                                        <span className="text-gray-500">{item.distance}</span>
                                    </p>
                                ))}
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Shops & Markets</h4>
                                {hotel.exploreArea.shops.map((item, index) => (
                                    <p key={index} className="text-gray-700 flex justify-between">
                                        <span>{item.name}</span>
                                        <span className="text-gray-500">{item.distance}</span>
                                    </p>
                                ))}
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Beaches</h4>
                                {hotel.exploreArea.beaches.map((item, index) => (
                                    <p key={index} className="text-gray-700 flex justify-between">
                                        <span>{item.name}</span>
                                        <span className="text-gray-500">{item.distance}</span>
                                    </p>
                                ))}
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Public transport</h4>
                                {hotel.exploreArea.publicTransport.map((item, index) => (
                                    <p key={index} className="text-gray-700 flex justify-between">
                                        <span>{item.name}</span>
                                        <span className="text-gray-500">{item.distance}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-gray-200 rounded-lg mt-6 flex items-center justify-center text-gray-500">
                            <Image src="/images/map-placeholder.png" alt="Map of the area" width={600} height={400} style={{objectFit: "contain"}} /> {/* Placeholder */}
                        </div>
                        <Button variant="outline" className="mt-4 w-full md:w-auto">Explore the Area</Button>
                    </div>

                    {/* What Our Guests Say (Reviews) */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">What Our Guests Say</h3>
                        <div className="flex space-x-4 mb-4">
                            <Button variant="outline" size="icon" className="rounded-full"><span className="sr-only">Previous Review</span> &larr;</Button>
                            <Button variant="outline" size="icon" className="rounded-full"><span className="sr-only">Next Review</span> &rarr;</Button>
                            <Button variant="ghost" className="ml-auto">See All &rarr;</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {hotel.reviews.map((review, index) => (
                                <div key={index} className="p-6 border rounded-lg shadow-sm">
                                    <div className="flex items-center mb-3">
                                        <Avatar className="h-10 w-10 mr-3">
                                            <AvatarImage src="/images/avatar-ashik.png" alt={review.author} /> {/* Placeholder for reviewer avatar */}
                                            <AvatarFallback>{review.author.split(' ')[0][0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{review.comment.split('”')[0]}”</h4>
                                            <div className="flex items-center mt-1">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                                                ))}
                                                {[...Array(5 - review.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-gray-300" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-3 line-clamp-4">{review.comment.split('”')[1]?.trim()}</p>
                                    <p className="text-sm text-gray-500 font-medium">- {review.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Policies Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 border-b-2 border-primary inline-block pb-1">Policies</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <h4 className="font-semibold text-gray-800">Check-in</h4>
                                <p className="md:col-span-2 text-gray-700">{hotel.policies.checkIn}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <h4 className="font-semibold text-gray-800">Check-out</h4>
                                <p className="md:col-span-2 text-gray-700">{hotel.policies.checkOut}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <h4 className="font-semibold text-gray-800">Cancellation/ prepayment</h4>
                                <p className="md:col-span-2 text-gray-700">{hotel.policies.cancellationPrepayment}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <h4 className="font-semibold text-gray-800">Children and beds</h4>
                                <p className="md:col-span-2 text-gray-700">{hotel.policies.childPolicies}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <h4 className="font-semibold text-gray-800">No age restriction</h4>
                                <p className="md:col-span-2 text-gray-700">{hotel.policies.noAgeRestriction}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <h4 className="font-semibold text-gray-800">Pets</h4>
                                <p className="md:col-span-2 text-gray-700">{hotel.policies.pets}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <h4 className="font-semibold text-gray-800">Cash only</h4>
                                <p className="md:col-span-2 text-gray-700">{hotel.policies.cashOnly}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fixed Booking Summary Card (Right Column) */}
                <div className="lg:col-span-1 sticky top-8 h-fit p-6 border rounded-lg shadow-lg bg-white">
                    <h3 className="text-xl font-bold mb-4">1 week, 2 adults, 1 child</h3>
                    <p className="text-3xl font-bold mb-6">USD $6,112</p>
                    <Button className="w-full">Reserve</Button>
                </div>
            </div>
        </div>
    );
}