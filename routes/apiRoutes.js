const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname,'../db/db.json'), "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();

    return fs.readFile(path.join(__dirname,'../db/db.json'), "utf8", (err, data) => {
        if (err) throw err;
        const allNotes = JSON.parse(data);
        allNotes.push(newNote);
        fs.writeFile(path.join(__dirname,'../db/db.json'), JSON.stringify(allNotes), "utf8", () => {
            res.json({success: true});
        });
    });
router.delete('/api/notes/:id', (req, res) => {

}

module.exports = router;