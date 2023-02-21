from tensorflow import keras
model = keras.models.load_model('path/to/model')

import * as tf from '@tensorflow/tfjs';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
    const collection = db.collection('users');
  
    collection.find({ myVariable: 'points' }).toArray(function(err, docs) {
      console.log("Found the following records");
      console.log(docs);
  
      // Access the variable
      const userPoints = docs[0].myVariable;
  
      client.close();
    });

    collection.find({ myVariable: 'education' }).toArray(function(err, docs) {
      console.log("Found the following records");
      console.log(docs);
  
      // Access the variable
      const userEducation = docs[0].myVariable;
  
      client.close();
    }); 

    collection.find({ myVariable: 'interest' }).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs);
    
        // Access the variable
        const userInterest = docs[0].myVariable;
    
        client.close();
      });

    collection.find({ myVariable: 'skills' }).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs);
    
        // Access the variable
        const userSkills = docs[0].myVariable;
    
        client.close();
      });  
  });

const model = await tf.loadLayersModel('/model/model.json');
const input = tf.tensor2d([[userPoints,userEducation,userInterest,userSkills]]);
const output = model.predict(input);
