const { Firestore } = require("@google-cloud/firestore");
const { addMany } = require("../../../db/basicCRUD/addmany");
const { addOne } = require("../../../db/basicCRUD/addone");

const db = new Firestore();

const addCoupon = async(req,res) => {
    try {
        const {couponType , criteriaName , offerType , offerVal , criteriaVal , partnerName ,total , validTill , validTillForUser , name} = req.body;
        const result = await addOne({
                            couponType:couponType ,
                            criteriaType:`/criteria/${criteriaName}` ,
                            criteriaVal: criteriaVal,
                            offerType: offerType,
                            offerVal: offerVal,
                            partnerInfo: partnerName,
                            totalCoupons: total,
                            name: name
                            },"allCoupons");
        if(result[msg]!="success"){
            res.status(400).json(result);
        }
        else{
            const pcid = result["id"];
            let data = [];
            for(let i=0;i<total;i++){
                data.push({"cid":pcid , "status":"active" , "uid" : "" , 
                    "validTill" : Firestore.Timestamp.fromDate(new Date(validTill)),
                    "validTillForUser" : Firestore.Timestamp.fromDate(new Date(validTillForUser))
                })
            }
            const result2 = await addMany("individualCoupons",data);
            res.status(200).json(result2);   
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status.json({msg:"error"})
      }
}
module.exports = {
    addCoupon,
};