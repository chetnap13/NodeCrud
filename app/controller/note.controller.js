const noteService = require('../services/note.services');
exports.note_create = function(req,next){
    try {
        req.assert('name','name must be atleast three charactors').len(3);
        req.assert('city','city should nt be empty').notEmpty();
        var errors = req.validationErrors();
        if(errors)
        {
            return res.status(400).send(errors)
        }
        else{
            noteService.createNote(req,res)
        }
    } catch (error) {
        res.send(error)
    }
}