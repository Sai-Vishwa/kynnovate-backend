const { fetchone } = require("../../db/basicCRUD/showoneormany");

const getCouponsOfUser = async(userId) => { 
  try {
    const result = await fetchone("individualCoupons","userId",userId,"==");
    return result
  } catch (error) {
    console.error("Error fetching data:", error);
    return {msg:"error"}
  }
};

module.exports = {
    getCouponsOfUser,
};