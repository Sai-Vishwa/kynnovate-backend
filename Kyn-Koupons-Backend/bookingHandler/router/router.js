const { Router } = require("express");

const router = new Router();

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

  router.get('/', asyncHandler(async (req, res) => {
    return res.status(200).send({
      mssg: 'Coupon handler is working',
      data: null,
      error: null
    });
  }));

  router.post('/getAllCoupons', asyncHandler(async (req, res) => {
    await getAllCoupons(req,res);
  }));

  module.exports = {router}