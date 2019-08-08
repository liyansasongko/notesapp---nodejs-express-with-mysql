const Notes = require('../models/notes.model.js');

exports.findAll = (req, res) => {
    Notes.find((err, notes) => {
        if(err){
            res.status(500).send({
                message : err.message || "Someting wrong"
            });
        }
        res.send(notes);
    });
};

exports.findOne = (req, res) => {
    Notes.findById((err, note) => {
        if(err) {
            res.status(500).send({
                message: err.message || "Someting wrong"
            });
        }
        res.send(note);
    });
};

exports.create = (req, res) => {
    const newNote = req.body;

    if(!newNote.name || !newNote.content){
        res.status(400).send({error: true, message: "don't empty"});
    }
    
    Notes.createNote(newNote, (err, note) => {
        if(err){
            res.send(err);
        }
        res.json(note);
    });
};

exports.update = (req, res) => {
    Notes.updateById(req.params.noteId, req.body, (err, note) => {
        if(err){
            res.send(err);
        }
        res.json(note);
    });
};

exports.delete = (req, res) => {
    Notes.deleteById(req.params.noteId, (err, note) => {
        if(err){
            res.send(err);
        }
        res.json({message:"Note successfully deleted"});
    });
};