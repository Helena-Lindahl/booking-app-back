const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Guest Schema

const GuestSchema = new Schema({
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
    }

       
});

module.exports = Guest = mongoose.model('guest', GuestSchema);