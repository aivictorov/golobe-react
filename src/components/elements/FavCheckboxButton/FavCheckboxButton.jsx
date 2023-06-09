import './FavCheckboxButton.scss';
import { useContext } from "react";
import { AppContext } from "../../../App";

const FavCheckboxButton = ({ flightTicket, hotelBooking }) => {
    const { user, setUser } = useContext(AppContext);

    function addFavFlight() {
        setUser({
            ...user,
            favs: {
                ...user.favs,
                flights: [
                    flightTicket,
                    ...user.favs.flights
                ],
            }
        })
    };

    function removeFavFlight() {
        setUser({
            ...user,
            favs: {
                ...user.favs,
                flights: user.favs.flights.filter((flight) => {
                    return JSON.stringify(flightTicket) !== JSON.stringify(flight);
                })

            }
        })
    };

    function addFavHotel() {
        setUser({
            ...user,
            favs: {
                ...user.favs,
                hotels: [
                    hotelBooking,
                    ...user.favs.hotels
                ],
            }
        })
    };

    function removeFavHotel() {
        setUser({
            ...user,
            favs: {
                ...user.favs,
                hotels: user.favs.hotels.filter((hotel) => {
                    return JSON.stringify(hotelBooking) !== JSON.stringify(hotel);
                })
            }
        })
    };

    let isChecked = false;

    if (flightTicket) {
        user.favs.flights.forEach((flight) => {
            if (JSON.stringify(flightTicket) === JSON.stringify(flight)) {
                isChecked = true;
                return;
            }
        })
    }

    if (hotelBooking) isChecked = user.favs.hotels.includes(hotelBooking);

    return (
        <div className="fav-checkbox">
            <label className="fav-checkbox__label">
                <input
                    className="fav-checkbox__hidden visually-hidden"
                    type="checkbox"
                    checked={isChecked}
                    onChange={(event) => {
                        if (event.target.checked) {
                            if (flightTicket) addFavFlight();
                            if (hotelBooking) addFavHotel();
                        } else {
                            if (flightTicket) removeFavFlight();
                            if (hotelBooking) removeFavHotel();
                        }
                    }}
                />
                <div
                    className="fav-checkbox__custom"
                    style={{ width: 48 }}
                >
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        stroke="#4C4850"
                        fill="none"
                    >
                        <path
                            d="M13.7863 3.625C11.2504 3.625 10.0004 6.125 10.0004 6.125C10.0004 6.125 8.7504 3.625 6.21446 3.625C4.15352 3.625 2.52149 5.34922 2.5004 7.40664C2.45743 11.6773 5.88829 14.7145 9.64884 17.2668C9.75251 17.3373 9.87501 17.3751 10.0004 17.3751C10.1258 17.3751 10.2483 17.3373 10.352 17.2668C14.1121 14.7145 17.543 11.6773 17.5004 7.40664C17.4793 5.34922 15.8473 3.625 13.7863 3.625V3.625Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </label>
        </div>
    );
}

export default FavCheckboxButton;