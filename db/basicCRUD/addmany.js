const db = require("../connection");
async function addMany(collection,data) {
    try {
      const batch = db.batch(); 
  
      data.forEach((dt) => {
        const docRef = db.collection(collection).doc();
        batch.set(docRef,dt);
      });
  
      await batch.commit(); 
      return {msg:"success"}
    } catch (error) {
      console.error("Error adding multiple documents:", error);
      return {msg:"error"}
    }
  }
  module.exports = {addMany}