var Note = require('../Models/note.model');
exports.createNote = (req,res)=>{
    if(!req.body.name){
        return res.status(400).send({
            message:'note content not be empty'
        })
    }
    const note = new Note({
        name:req.body.name,
        city:req.body.city

    })
    note.save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || 'something err occured'
        })
    })

}