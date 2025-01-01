const { deleteOneOrMany } = require("../../../db/basicCRUD/deleteoneormany");

const deleteCoupon = async(req,res) => {
    const {couponId,name} = req.body;
    try {
        const result = await deleteOneOrMany("cid",couponId,"==","individualCoupons");
        if(result["msg"]=="success"){
        
            const result2 = await deleteOneOrMany("name",name,"==","allCoupons");
            res.status(200).json(result2);
           }
          else{
            res.status(200).json(result)
          }
        }
       catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({msg:"error"})
      }}

module.exports = {
    deleteCoupon,
};