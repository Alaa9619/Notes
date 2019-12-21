const fs= require('fs') //write defensive code in order to avoid crashing app (use try and catch)
const getNotes = function () {

    return 'Your Notes ....'
}
const addNote= function(title, body){
    const notes = loadNote()
    const duplicateNotes=notes.filter(function(note){ //to avoid title duplication //callback
        return note.title === title //filter the array based upon the function taken  

    })
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
    
        })
        saveNote(notes)
        console.log('New unique note is added')

    }else{
        console.log('Sorry note title is taken')
    }
}
const saveNote= function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNote= function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json') // if the file doesn't exist it produces an error 
        const dataJson=dataBuffer.toString()
        return JSON.parse(dataJson)

    }catch(e){
        return [] // load an empty array if there is no file named (notes.json) exists 

    }
  
}
//export the methodes
module.exports= {
    getNotes:getNotes,
    addNote:addNote
}