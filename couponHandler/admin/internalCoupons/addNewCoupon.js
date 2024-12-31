const { addMany } = require("../../../db/basicCRUD/addmany");
const { addOne } = require("../../../db/basicCRUD/addone");

const addCoupon = async(couponType , criteriaName , offerType , offerVal , criteriaVal , partnerName ,total) => {
    try {
        const result = await addOne({
                            couponType:couponType ,
                            criteriaType:`/criteria/${criteriaName}` ,
                            criteriaVal: criteriaVal,
                            offerType: offerType,
                            offerVal: offerVal,
                            partnerInfo: partnerName,
                            totalCoupons: total
                            },"allCoupons");
        if(result[msg]!="success"){
            return result;
        }
        else{
            const pcid = result["id"]
            addMany
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return {msg:"error"}
      }
}
module.exports = {
    addCoupon,
};