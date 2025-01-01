const express = require('express');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 3205;
const rateLimit = require("express-rate-limit");
const { couponProxy, bookingProxy, systemProxy, postsAndReferralsProxy } = require('./proxy');


app.use(cors());
app.use(express.json());
app.use(limiter);
app.use("/coupons",couponProxy);
app.use("/bookings",bookingProxy);
app.use("/system",systemProxy);
app.use("/posts-referrals",postsAndReferralsProxy);

app.listen(port, () => {
    console.log(`Backend routes are handled with proxies here at port - ${port}`);
})