var flight = {
    airline: 'Oceanic',
    number: 815,
    departure: {
        IATA: 'SYD',
        time: '2004-09-22 14:55',
        city: 'Sydney'
    },
    arrival: {
        IATA: 'LAX',
        time: '2004-09-23 10:42',
        city: 'Los Angeles'
    }
}

typeof flight.number
typeof flight.airline
typeof flight.arrival
typeof flight.manifest


flight.hasOwnProperty('number') // true
flight.hasOwnProperty('constructor') // false