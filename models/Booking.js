const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const BookingSchema = new Schema({
    bookingId: {     
        type: String,
        required: true    
    },
    date: {
        type: String,
        required: true
    },
    time: {     
        type: String,
        required: true
    },
    guests: {     
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    guestId: {
        type: String,
        required: true
    }

            //Lägg in datum tid antal gäster, kundid
});

module.exports = Booking = mongoose.model('booking', BookingSchema);


//bookingId
//date
//time
//guests

//firstName
//lastName
//email
//phone
//guestId


