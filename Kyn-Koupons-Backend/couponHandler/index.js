const express = require('express');
const cors = require('cors');

const { router } = require('./router/router');

const app = express();
const port = process.env.PORT || 3206;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/coupons', router)

app.listen(port, () => {
  console.log(`Coupons handling is running at http://localhost:${port}`);
})