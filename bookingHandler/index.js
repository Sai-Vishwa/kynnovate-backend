const express = require('express');
const cors = require('cors');

const { router } = require('./router/router');

const app = express();
const port = process.env.PORT || 3207;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/bookings', router)

app.listen(port, () => {
  console.log(`Booking tickets is running at http://localhost:${port}`);
})