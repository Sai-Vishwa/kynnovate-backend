const {db} = require("../connection");

async function addOne(data,collection) {
    try {
      const docRef = await db.collection(collection).add(data);
      return {msg:"success",id:docRef.id}
    } catch (error) {
      console.error("Error adding document:", error);
      return {msg:"error"}
    }
  }
module.exports = {addOne};
