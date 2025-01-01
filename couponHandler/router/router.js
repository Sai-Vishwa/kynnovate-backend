const { Router } = require("express");
const { getAllCoupons } = require("../showAllCoupons");
const { getCouponsOfUser } = require("../user/myCoupons");
const { redeemCoupon } = require("../user/redeemCoupons");
const { addCoupon } = require("../admin/internalCoupons/addNewCoupon");
const { modifyCoupon } = require("../admin/internalCoupons/modifyCoupon");
const { deleteCoupon } = require("../admin/internalCoupons/deleteCoupons");
const { suggestions } = require("../admin/externalCoupons/suggestions");

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

  router.get('/', asyncHandler(async (req, res) => {
    await getAllCoupons(req,res);
  }));

  router.get('/getMyCoupons', asyncHandler(async (req, res) => {
    await getCouponsOfUser(req,res);
  }));

  router.post('/redeem', asyncHandler(async (req, res) => {
    await redeemCoupon(req,res);
  }));

  router.post('/addCoupon', asyncHandler(async (req, res) => {
    await addCoupon(req,res);
  }));

  router.put('/modifyCoupon', asyncHandler(async (req, res) => {
    await modifyCoupon(req,res);
  }));

  router.delete('/deleteCoupon', asyncHandler(async (req, res) => {
    await deleteCoupon(req,res);
  }));

  router.post('/suggestion', asyncHandler(async (req, res) => {
    await suggestions(req,res);
  }));

  module.exports = {
    router
  };