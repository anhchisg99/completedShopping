const express = require('express')
const app = express()
const Multer = require('multer');
var bodyParser = require('body-parser')
const { Storage } = require('@google-cloud/storage');
const { format } = require('util');
const modelItem = require('../models/Item.model')
const path = require('path');



const storage = new Storage({
    keyFilename: path.join(__dirname, "../project3-332808-782dfec84630.json"),
    projectId: "project3-332808"
});
// app.use(express.json());
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
});
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

module.exports.sendImg = (req, res, next) => {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }
    const { name, price } = req.body
    // Create a new blob in the bucket and upload the file data.
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', err => {
        next(err);
    });

    blobStream.on('finish', () => {
        // The public URL can be used to directly access the file via HTTP.
        const publicUrl = format(
            `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        );
        const person = new modelItem({ name, price, linkImg: publicUrl })
        try {
            const usedPerson = person.save()
            res.status(200).send(usedPerson);

        } catch (error) {
            res.json(error)
        }
    });

    blobStream.end(req.file.buffer);
}