const { Router } = require("express");
const { like } = require("../services/like");
const { unlike } = require("../services/unlike");
const { referral } = require("../services/referral");
const { comment } = require("../services/comments");


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

  router.post('/like', asyncHandler(async (req, res) => {
    await like(req,res);
  }));
  router.post('/unlike', asyncHandler(async (req, res) => {
    await unlike(req,res);
  }));
  router.post('/referral', asyncHandler(async (req, res) => {
    await referral(req,res);
  }));
  router.post('/comment', asyncHandler(async (req, res) => {
    await comment(req,res);
  }));

  

  module.exports = {
    router
  };