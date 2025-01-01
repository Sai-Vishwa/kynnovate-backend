const db = require("../connection")
async function fetchone(collection,name,val,property) {
    try {
      const snapshot = await db
        .collection(collection)
        .where(name,property,val)
        .get();
  
      if (snapshot.empty) {
        return {msg:"empty"};
      }
  
      const documents = [];
      snapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
  
      return {data:documents,msg:"success"};
    } catch (error) {
        return {msg:"error"}
    }
  }
  module.exports = {fetchone}