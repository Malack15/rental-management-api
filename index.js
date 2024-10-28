const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://malackokeiga:OkUMcy32TrZ6Z4z8@mk.lqani.mongodb.net/?retryWrites=true&w=majority&appName=MK")
.then(() => {
    console.log("connected to database")
})
.catch(() => {
    console.log("connection failed")
});