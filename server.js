const express = require('express'); //Nodejs framework
const mongoose = require('mongoose'); //MongoDB "framework"
const bodyParser = require('body-parser'); //take requests get data from the body
const Booking = require('./models/Booking');

app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");

//Bodyparser Cors
app.use(cors());

//Bodyparser MiddleWare
app.use(bodyParser.json());

// DB Config 
const db = require('./config/keys').mongoURI;

// Connect to mongo 
mongoose.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// @route GET api/bookings
// @desc Get all bookings
// @access Public 
//Home route
app.get("/", async (req, res) => {
res.send({ time: "We did it! time " + req.body.firstName});
//const sendBooking = {bookingId: req.body.bookingId}

// res.send({ 
// Skapa en listvariabel här som heter sendBooking eller räcker det med den i "res.send"?
//  const sendBooking = await {    
//  bookingId: req.body.bookingId, 
//   date: req.body.date, 
//   time: req.body.time, 
//   guests: req.body.guests, 
//   firstName: req.body.firstName, 
//   lastName: req.body.lastName, 
//   email: req.body.email,
//   phone: req.body.phone,
//   guestId: req.body.guestId
// }});
// res.send({ booking: sendBooking });

});
//Alt Home route 
// app.get('/', (req, res) => { //Hur får jag fram denna i browsern? 
//   const sendBooking = {bookingId: "5"}
//   Booking.find()
//   .sort({ date: -1 })
//   .then(bookings => res.json(bookings))
// }); 

// @route POST api/bookings
// @desc Create a booking
// @access Public 
app.post('/', async (req, res) => { 
  const newBooking = await new Booking({
    
      // bookingId: req.body.bookingId,                
      // date: req.body.date,
      // time: req.body.time,
      // guests: req.body.guests,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      guestId: req.body.guestId

  });
   newBooking.save()
   res.send(newBooking);
}); 

// @route DELETE api/bookings/:id
// @desc Delete a booking
// @access Public 
app.delete('/:id', (req, res) => { //api/bookings
  Booking.findById(req.params.id)    // Fångar upp id:t från endpointen
  .then(booking => booking.remove().then(() => res.json({success: true})))  //Som sedan resulterar i  (booking.then(booking) som sedan raderas (booking.remove()) sedan skickas ett bekräftelse på att booking har raderats {success: true}
  .catch(err => res.status(404).json({success: false}));
});

// Use Routes
//app.use('/api/bookings', bookings);   //alla endpoints med /api/bookings kopplas direkt till bookings-filen
app.listen(port, () => console.log("Backend server live on " + port));

//Alt
//app.listen(port, () => console.log(`Server started on port ${port}`));



module.exports = app;  
