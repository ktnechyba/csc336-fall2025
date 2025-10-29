
// const { MongoClient, ServerApiVersion } = require('mongodb');
import {MongoClient, ServerApiVersion} from 'mongodb'
const uri = "mongodb+srv://kn9558a_db_user:dUKlTkoijZidWeFs@csc336-fall2025.x8mvfie.mongodb.net/?appName=csc336-fall2025";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = await client.db("sample_mflix")

    const commentsCollection = database.collection("collection")

    // await commentsCollection.insertOne({
    //     name: "pingu"
    // });

    let pingu = await commentsCollection.findOne({name:"pingu"})
    console.log(pingu)

    // // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
