const { fetchById } = require("../../db/basicCRUD/fetchById");
const { increment } = require("../../db/basicCRUD/incrementByOne");
const { update } = require("../../db/basicCRUD/modifyoneormany");
const { fetchone } = require("../../db/basicCRUD/showoneormany");
const { admin } = require("../../db/connection");

const unlike = async(req , res ) => {
    const {pid , uid} = req.body;
    try{
        const points  = await(fetchone("rewardSystem","type","likeSent","=="));
        const points2  = await(fetchone("rewardSystem","type","likeGot","=="));

        const pt = points["data"][0]["points"];
        const pt2 = points2["data"][0]["points"];


        const result = await(increment("user","points",uid,pt*-1));

        const user = await(fetchById("posts",pid));
        const userRef = user.data().uid;
        userRef.update(await userRef.update({
            points: admin.firestore.FieldValue.increment(pt2*-1),
          }));
          res.status(200).json({msg:"success"});
    }
    catch(error){
        res.status(400).json({msg:"error"})
    }
    
}
module.exports = {
    unlike
}