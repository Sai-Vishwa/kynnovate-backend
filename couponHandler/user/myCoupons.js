const { fetchone } = require("../../db/basicCRUD/showoneormany");

const getCouponsOfUser = async(req,res) => { 
  try {
    const result = await fetchone("individualCoupons","userId",req.body["userId"],"==");
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({msg:"error"})
  }
};

module.exports = {
    getCouponsOfUser,
};