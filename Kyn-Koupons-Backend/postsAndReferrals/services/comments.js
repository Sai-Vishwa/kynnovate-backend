const { addOne } = require("../../db/basicCRUD/addone");
const { fetchById } = require("../../db/basicCRUD/fetchById");
const { increment } = require("../../db/basicCRUD/incrementByOne");
const { update } = require("../../db/basicCRUD/modifyoneormany");
const { fetchone } = require("../../db/basicCRUD/showoneormany");
const { db,admin } = require("../../db/connection");

const comment = async(req , res ) => {
    const {pid , uid , content} = req.body;
    try{
        const points  = await(fetchone("rewardSystem","type","commentSent","=="));
        const points2  = await(fetchone("rewardSystem","type","commentGot","=="));

        const pt = points["data"][0]["points"];
        const pt2 = points2["data"][0]["points"];


        const result = await(increment("user","points",uid,pt));

        const user = await(fetchById("posts",pid));
        const userRef = user.data().uid;
        userRef.update(await userRef.update({
            points: admin.firestore.FieldValue.increment(pt2),
          }));
          res.status(200).json({msg:"success"});

        const final = await(addOne({postid:pid , uid:uid , content:content},"comments"))
    }
    catch(error){
        res.status(400).json({msg:"error"})
    }
    
}
module.exports = {
    comment
}