import emiratesLogo from './../img/flights/airlines/emirates.png';
import airIndiaLogo from './../img/flights/airlines/air_india.png';
import finnairLogo from './../img/flights/airlines/finnair.png';

const cities = ['Istanbul', 'Sydney', 'Baku', 'Male', 'Paris', 'New York', 'London', 'Tokyo', 'Dubai']
const airlines = ['Emirates', 'Finnair', 'Aeroflot', 'Air India']

export default function generateFlights(count) {
    let flights = [];

    for (let index = 0; index < count; index++) {
        const id = index;
        const from = cities[Math.floor(Math.random() * cities.length)]
        const to = cities[Math.floor(Math.random() * cities.length)]
        const airline = airlines[Math.floor(Math.random() * airlines.length)]
        const price = Math.floor(Math.random() * 1000)
        const rating = (Math.random() * 5).toFixed(1)

        let flight = {
            id: id,
            from: from,
            to: to,
            start: '12:00 pm',
            end: '01:00 pm',
            airline: airline,
            logo: emiratesLogo,
            price: price,
            rating: rating,
        }

        flights.push(flight)
    };

    return flights;
};
