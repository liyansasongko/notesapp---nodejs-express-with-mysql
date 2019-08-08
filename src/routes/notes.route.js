module.exports = (app) => {
    const notes = require('../controllers/notes.controller.js');

    app.get('/notes', notes.findAll);
    app.get('/note/:noteId', notes.findOne);
    app.post('/note', notes.create);
    app.put('/note/:noteId', notes.update);
    app.delete('/note/:noteId', notes.delete);
}