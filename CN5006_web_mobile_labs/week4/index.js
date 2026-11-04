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

// find all documents
async function findAll()
{
    const docs = await Person.find({})
    .sort({salary:1}) //sort by ascending salary
    .select('name salary age')
    .limit(100);
    
    console.log('Showing multiple documents')

    docs.forEach(doc=> {
        console.log(doc.age, doc.name, doc.salary);
    });
}

// find females over the age of 30
async function findFemalesOver30() 
{
    const age = 30;
    const docs = await Person.find({
        gender:'Female',
        age:{$gte:age}
    })
    .sort({salary:1}) //sort by ascending salary
    .select('name salary age')
    .limit(10);
    console.log('Females aged ${age} or above: ');
    docs.forEach(doc =>{
            console.log(doc.age, doc.name, doc.salary);
        });
}

// count all documents
async function countDocuments()
{
    const count = await Person.countDocuments();
    console.log('Total documents count: ',count);
}

// delete all documents where age is more than 25
async function deleteManyPersons() 
{
    const result = await Person.deleteMany({
        age:{$gte:25}
    });
    console.log('Deleted documents: ', result);
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
        await findAll();
        await findFemalesOver30();
        await countDocuments();
        await deleteManyPersons();
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
