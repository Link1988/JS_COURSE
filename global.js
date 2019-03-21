// One way to minimize the use of global variables is to create
// a single global variable for your application:

var MYAPP = {};
// That variable then becomes the container for your application:

MYAPP.stooge = {
    name: 'John',
    lastname: 'Doe'
};

MYAPP.flight = {
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
};