const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getDocs, addDoc, doc, updateDoc, deleteDoc } = require("firebase/firestore");
const {db} = require("./config")
const { collection } = require("firebase/firestore");


const express=require("express")
const cors=require('cors')
const app=express();
app.use(express.json())
app.use(cors());

// View
app.get("/", async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users')); // Change 'users' to your collection name
    const list = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

//  Create

app.post("/create",async(req,res)=>{
    
    const data=req.body
    try{
        await addDoc(collection(db, "users"), data);
    return res.status(201).json({msg:"User Added"})


    }catch (err){
        return res.status(400).json({error: err})
    }
    

});  

// Update

app.post("/update", async (req, res) => {
    try {
      const { id, ...data } = req.body;
      await updateDoc(doc(db, 'users', id), data); // Change 'users' to your collection name
      res.send({ msg: "Updated" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  });

  // Delete

  app.post("/delete", async (req, res) => {
    try {
      const { id } = req.body;
      await deleteDoc(doc(db, 'users', id)); // Change 'users' to your collection name
      res.send({ msg: "Deleted" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  });

app.listen(4000, () => console.log("Up & running *4000"));
