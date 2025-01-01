const db = require("../connection");
async function deleteOneOrMany(name,val,property,collection) {
    try {
      const snapshot = await db
        .collection(collection)
        .where(name,property,val)
        .get();
  
      if (snapshot.empty) {
        return {msg:"empty"};
      }
  
      const deletePromises = [];
      snapshot.forEach((doc) => {
        deletePromises.push(doc.ref.delete());
      });
  
      await Promise.all(deletePromises);
      return {msg:"success"}
    } catch (error) {
      console.error("Error deleting documents:", error);
      return {msg:"error"}
    }
  }
  module.exports = {deleteOneOrMany}