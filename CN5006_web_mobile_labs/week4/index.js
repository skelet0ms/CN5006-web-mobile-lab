const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://tombland_db_user:<db_password>@cluster0.hxaj8jv.mongodb.net/";

const PersonSchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        age: Number,
        gender: String,
        salary: Number
    }
);

const Person = mongoose.model(
    'modlename',
    PersonSchema,
    'personCollection'
);

async function insertOne() {
    const doc1 = new Person ({
        name: 'NHQ',
        age: 32,
        gender: 'Male',
        salary: 1234
    });

    const savedDoc = await doc1.save();

    console.log(savedDoc);
}

const { useInsertionEffect } = require("react");

// connect to mongodb
async function main() 
{
    try
    {
        await mongoose.connect(MONGO_URL);
        console.log('Connected to ${MONGO_URL}');

        await insertOne();
    }

    catch (err)
    {
        console.error("Erorr: ", err)
    }

    finally
    {
        await mongoose.connection.close();
        console.log("Connection closed");
    }
}

main();
