import { HotelCard } from "@/components/hotel/hotelCard";


export default function HomePage() {
    // Dummy data for hotel cards
    const hotels = [
        {
            id: '1',
            name: 'Sofitel Algiers Hamma Garden',
            description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
            price: 699,
            rating: 4.5,
            beds: 2,
            bathrooms: 2,
            sqft: 1200,
            imageUrl: '/images/hotel-thumb-1.jpg', // Placeholder
        },
        {
            id: '2',
            name: 'Sofitel Algiers Hamma Garden',
            description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
            price: 699,
            rating: 4.5,
            beds: 2,
            bathrooms: 2,
            sqft: 1200,
            imageUrl: '/images/hotel-thumb-2.jpg', // Placeholder
        },
        {
            id: '3',
            name: 'Sofitel Algiers Hamma Garden',
            description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
            price: 699,
            rating: 4.5,
            beds: 2,
            bathrooms: 2,
            sqft: 1200,
            imageUrl: '/images/hotel-thumb-3.jpg', // Placeholder
        },
        {
            id: '4',
            name: 'Sofitel Algiers Hamma Garden',
            description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
            price: 699,
            rating: 4.5,
            beds: 2,
            bathrooms: 2,
            sqft: 1200,
            imageUrl: '/images/hotel-thumb-4.jpg', // Placeholder
        },
        {
            id: '5',
            name: 'Sofitel Algiers Hamma Garden',
            description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
            price: 699,
            rating: 4.5,
            beds: 2,
            bathrooms: 2,
            sqft: 1200,
            imageUrl: '/images/hotel-thumb-5.jpg', // Placeholder
        },
        {
            id: '6',
            name: 'Sofitel Algiers Hamma Garden',
            description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
            price: 699,
            rating: 4.5,
            beds: 2,
            bathrooms: 2,
            sqft: 1200,
            imageUrl: '/images/hotel-thumb-6.jpg', // Placeholder
        },
        // Add more hotel data as needed
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-6">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {hotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </div>
    );
}