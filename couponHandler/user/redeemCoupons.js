const { update } = require("../../db/basicCRUD/modifyoneormany");

const redeemCoupon = async(couponId,status) => {
    try {
        const result = await update("","",status,"","individualCoupons",couponId,true);
        return result
      } catch (error) {
        console.error("Error fetching data:", error);
        return {msg:"error"}
      }
}
module.exports = {
    redeemCoupon,
};