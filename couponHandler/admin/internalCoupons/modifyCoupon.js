const { update } = require("../../../db/basicCRUD/modifyoneormany");

const modifyCoupon = async(req,res) => {
   try {
    const {id,couponType , criteriaName , offerType , offerVal , criteriaVal , partnerName ,total , validTill , validTillForUser , name} = req.body;
    const result = await update("","",{
                        couponType:couponType ,
                        criteriaType:`/criteria/${criteriaName}` ,
                        criteriaVal: criteriaVal,
                        offerType: offerType,
                        offerVal: offerVal,
                        partnerInfo: partnerName,
                        totalCoupons: total,
                        name: name
                        },"==","allCoupons",id,true);
        res.status(400).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status.json({msg:"error"})
  }
}
module.exports = {
    modifyCoupon,
};