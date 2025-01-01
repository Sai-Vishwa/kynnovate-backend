const {db} = require("../connection");
async function fetchAll(collection) {
    try {
      const snapshot = await db.collection(collection).get();
      if (snapshot.empty) {
        return {msg:"empty"};
      }
  
      const documents = [];
      snapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      return {data:documents,msg:"success"};
    } catch (error) {
      console.error("Error fetching documents:", error);
      return {msg:"error"};
    }
  } 
module.exports = {fetchAll};