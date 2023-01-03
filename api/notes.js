const { Router } = require('express')
const router = Router()

const MongoClient = require('mongodb').MongoClient
const mongodb = require('mongodb');


const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())


router.use('/notes', (req, res) => {
    // send all notes in mongodb
    const uri = process.env.MONGODB_URI
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        const db = client.db('notes')
        const collection = db.collection('notes')
        if (req.method === 'POST') {
            const note = {
                name: req.body.name,
                text: req.body.text,
            }
            collection.insertOne(note, (err, result) => {
                if (err) {
                    console.error(err)
                    return
                }
                res.send({ success: true, data: result.insertedId})
            })
        } else if (req.method === 'GET') {
            collection.find().toArray((err, items) => {
                if (err) {
                    console.error(err)
                    return
                }
                res.send({
                    success: true,
                    data: items
                })
            })
        } else {
            res.status(400).send({
                success: false,
                msg: 'Invalid request method'
            })
        }
    })
})

// dynamic route
router.use('/note/:id', (req, res) => {
    // send note with id
    const uri = process.env.MONGODB_URI
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        const db = client.db('notes')
        const collection = db.collection('notes')

        //convert id to mongodb object id
        const id = new mongodb.ObjectId(req.params.id);

        collection.findOne({ _id: id }, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send({ success: false, msg: "Error occurred while querying the database" });
            } else {
                if (!result) res.status(404).send({ success: false, msg: "Note not found" })
                else res.send({ success: true, data: result });
            }
        });
    })
})



module.exports = router