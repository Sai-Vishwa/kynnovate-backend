const { update } = require("../../db/basicCRUD/modifyoneormany");

const redeemCoupon = async(req,res) => {
    try {
        const {couponId , status} = req.body;
        const result = await update("","",status,"","individualCoupons",couponId,true);
        res.status(200).json(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({msg:"error"})
      }
}
module.exports = {
    redeemCoupon,
};