const sql = require('../../config/database.config.js');

let Notes = {
    created_at : new Date(),
    updated_at : new Date(),
};

Notes.createNote = (newNote, result) => {   
    
    sql.query("INSERT INTO notes set ?", {...newNote,...Notes}, function(err, res){
        if(err){
            result(err, null);
        }else{
            result(null, res.insertId);
        }
    });
};

Notes.find = (result) => {
    sql.query("SELECT * FROM notes", function(err, res){
        if(err){
            result(err, null);
        }else{ 
            result(null, res);
        }
    });
};

Notes.findById = (noteId, result) => {
    sql.query("SELECT * FROM notes WHERE id = ?", noteId, function(err, res){
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Notes.updateById = (noteId, note, result) => {
    sql.query("UPDATE notes SET name = ? , content = ? WHERE id = ?", [note.name, note.content, noteId], (err, res) => {
        if(err){
            result(err, null);
        }
        result(null, res);
    });
};

Notes.deleteById = (noteId, result) => {
    sql.query("DELETE FROM notes WHERE id = ?", [noteId], (err, res) => {
        if(err){
            result(err, null);
        }
        result(null, res);
    });
};

module.exports = Notes;