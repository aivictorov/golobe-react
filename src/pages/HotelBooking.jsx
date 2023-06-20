import { useContext } from "react";
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import HotelReservation from './../components/cards/HotelReservation/HotelReservation';
import TrackNav from './../components/blocks/TrackNav/TrackNav';
import { AppContext } from './../App';
import BookingPaymentCards from './../components/blocks/BookingPaymentCards/BookingPaymentCards';
import BookingLogin from './../components/blocks/BookingLogin/BookingLogin';
import BookingPayment from './../components/blocks/BookingPayment/BookingPayment';
import BookingSummary from './../components/blocks/BookingSummary/BookingSummary';
import { useParams } from 'react-router-dom';

const HotelBooking = () => {
    const { userAuth, hotels } = useContext(AppContext);
    const { hotelID, roomID } = useParams();

    const hotel = hotels.find((hotel) => hotel.id == hotelID)
    const room = hotel.rooms.find((room) => room.id == roomID)

    return (
        <>
            {hotelID}
            <br />
            {roomID}
            <br />
            {JSON.stringify(room)}
            <br />

            <HeaderInner />
            <main className="booking">
                <div className="container">
                    <div className="booking__nav">
                        <TrackNav />
                    </div>
                    <div className="booking__row">
                        <div className="booking__left">
                            <HotelReservation 
                                hotel={hotel.name}
                                room={room.name}
                                price={room.price}
                            />
                            <BookingPayment />
                            {!userAuth ? <BookingLogin /> : <BookingPaymentCards />}
                        </div>
                        <div className="booking__right">
                            <BookingSummary
                                title={room.name}
                                price={room.price}
                                rating={hotel.rating}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default HotelBooking;