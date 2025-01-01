const { fetchAll } = require("../db/basicCRUD/showall");

const getAllCoupons = async(req,res) => {
  try {
    const result = await fetchAll("allCoupons");
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({msg:"error"})
  }

}
module.exports = {
    getAllCoupons,
};