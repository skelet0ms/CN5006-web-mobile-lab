const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://tombland_db_user:dJNI02ifWjc5undX@cluster0.hxaj8jv.mongodb.net/";

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
// insert one values
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

// insert many values
async function insertMany()
{
    const manypersons = [
    { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456 },
    { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000 },
    { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402 },
    { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519 }
    ];

    const result = await Person.insertMany(manypersons);

    console.log('Many documents inserted.');
    console.log(result);
}

// connect to mongodb
async function main() 
{
    try
    {
        await mongoose.connect(MONGO_URL);
        console.log('Connected to ${MONGO_URL}');

        await insertOne();
        await insertMany();
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
