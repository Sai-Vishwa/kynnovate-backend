const express = require('express');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 3205;
const rateLimit = require("express-rate-limit");
const { couponProxy, bookingProxy, systemProxy, postsAndReferralsProxy } = require('./proxy');

const limiter = rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 1000,
    message: "1000 requests inside 20 minutes?!?! Are u seriously intrested in this shit I built?!?!Man u need a break for sure. Wait are u DOS Attacker?? IS THIS CRAP THAT IMPORTANT TO IMPLEMENT A DOS ATTACK.. man I did a pretty good job ig **sob sob.."
})

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